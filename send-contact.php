<?php

header('Content-Type: application/json; charset=utf-8');

use PHPMailer\PHPMailer\Exception as MailException;
use PHPMailer\PHPMailer\PHPMailer;

require __DIR__ . '/lib/PHPMailer/Exception.php';
require __DIR__ . '/lib/PHPMailer/PHPMailer.php';
require __DIR__ . '/lib/PHPMailer/SMTP.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
	http_response_code(405);
	echo json_encode(['ok' => false, 'error' => 'method']);
	exit;
}

$name = trim($_POST['name'] ?? '');
$email = trim($_POST['email'] ?? '');
$message = trim($_POST['message'] ?? '');
$website = trim($_POST['website'] ?? '');

if ($website !== '') {
	echo json_encode(['ok' => true]);
	exit;
}

if ($name === '' || $email === '' || $message === '') {
	http_response_code(400);
	echo json_encode(['ok' => false, 'error' => 'required']);
	exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
	http_response_code(400);
	echo json_encode(['ok' => false, 'error' => 'email']);
	exit;
}

$configPath = __DIR__ . '/mail-config.php';
if (!is_file($configPath)) {
	http_response_code(500);
	echo json_encode(['ok' => false, 'error' => 'send']);
	exit;
}

$config = require $configPath;
if (
	empty($config['smtp_host']) ||
	empty($config['smtp_user']) ||
	empty($config['smtp_pass']) ||
	empty($config['mail_to'])
) {
	http_response_code(500);
	echo json_encode(['ok' => false, 'error' => 'send']);
	exit;
}

$siteUrl = $config['site_url'] ?? 'https://condominioecologico.com';
$siteUrl = rtrim($siteUrl, '/');
$safeName = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
$safeEmail = htmlspecialchars($email, ENT_QUOTES, 'UTF-8');
$safeMessage = nl2br(htmlspecialchars($message, ENT_QUOTES, 'UTF-8'));
$sentAt = date('d/m/Y H:i') . ' (Colombia)';

$subject = '[Condominio Ecológico] Consulta de ' . $name;

$plainBody = "Nuevo mensaje desde el formulario de contacto\n"
	. "Sitio: {$siteUrl}\n"
	. "Fecha: {$sentAt}\n\n"
	. "Nombre: {$name}\n"
	. "Correo: {$email}\n\n"
	. "Mensaje:\n{$message}\n\n"
	. "---\n"
	. "Responde directamente a este correo para contactar al visitante.\n";

$htmlBody = '<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8"></head><body style="margin:0;padding:0;background:#f4f4f4;font-family:Arial,sans-serif;color:#333;">'
	. '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;padding:24px 0;">'
	. '<tr><td align="center">'
	. '<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#fff;border-radius:8px;overflow:hidden;">'
	. '<tr><td style="background:#2d6a4f;color:#fff;padding:20px 24px;font-size:18px;font-weight:bold;">Condominio Ecológico</td></tr>'
	. '<tr><td style="padding:24px;">'
	. '<p style="margin:0 0 16px;font-size:15px;">Nuevo mensaje desde el formulario de contacto del sitio web.</p>'
	. '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="font-size:14px;margin-bottom:20px;">'
	. '<tr><td style="padding:8px 0;border-bottom:1px solid #eee;width:120px;color:#666;">Sitio</td><td style="padding:8px 0;border-bottom:1px solid #eee;"><a href="' . htmlspecialchars($siteUrl, ENT_QUOTES, 'UTF-8') . '" style="color:#2d6a4f;">' . htmlspecialchars($siteUrl, ENT_QUOTES, 'UTF-8') . '</a></td></tr>'
	. '<tr><td style="padding:8px 0;border-bottom:1px solid #eee;color:#666;">Fecha</td><td style="padding:8px 0;border-bottom:1px solid #eee;">' . htmlspecialchars($sentAt, ENT_QUOTES, 'UTF-8') . '</td></tr>'
	. '<tr><td style="padding:8px 0;border-bottom:1px solid #eee;color:#666;">Nombre</td><td style="padding:8px 0;border-bottom:1px solid #eee;">' . $safeName . '</td></tr>'
	. '<tr><td style="padding:8px 0;color:#666;">Correo</td><td style="padding:8px 0;"><a href="mailto:' . $safeEmail . '" style="color:#2d6a4f;">' . $safeEmail . '</a></td></tr>'
	. '</table>'
	. '<p style="margin:0 0 8px;font-size:14px;color:#666;">Mensaje:</p>'
	. '<div style="background:#f9f9f9;border-left:4px solid #2d6a4f;padding:16px;font-size:14px;line-height:1.6;">' . $safeMessage . '</div>'
	. '</td></tr>'
	. '<tr><td style="padding:16px 24px;background:#f9f9f9;font-size:12px;color:#888;border-top:1px solid #eee;">'
	. 'Puerto López, Meta, Colombia · Responde a este correo para contactar al visitante.'
	. '</td></tr>'
	. '</table>'
	. '</td></tr></table>'
	. '</body></html>';

try {
	$mail = new PHPMailer(true);
	$mail->isSMTP();
	$mail->Host = $config['smtp_host'];
	$mail->SMTPAuth = true;
	$mail->Username = $config['smtp_user'];
	$mail->Password = $config['smtp_pass'];
	$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
	$mail->Port = (int) ($config['smtp_port'] ?? 587);
	$mail->CharSet = 'UTF-8';
	$mail->XMailer = ' ';
	$mail->Priority = 3;

	$fromEmail = $config['from_email'] ?? $config['smtp_user'];
	$fromName = $config['from_name'] ?? 'Condominio Ecológico';

	$mail->setFrom($fromEmail, $fromName);
	$mail->Sender = $fromEmail;
	$mail->addAddress($config['mail_to']);
	$mail->addReplyTo($email, $name);
	$mail->Subject = $subject;
	$mail->isHTML(true);
	$mail->Body = $htmlBody;
	$mail->AltBody = $plainBody;

	$mail->send();
	echo json_encode(['ok' => true]);
} catch (MailException $e) {
	http_response_code(500);
	echo json_encode(['ok' => false, 'error' => 'send']);
}
