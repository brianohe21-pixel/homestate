<?php
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
	http_response_code(405);
	echo json_encode(['ok' => false, 'error' => 'method']);
	exit;
}

$to = 'condominioecologicoinfo@gmail.com';
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

$host = $_SERVER['HTTP_HOST'] ?? 'condominioecologico.com';
$host = preg_replace('/^www\./', '', $host);
$from = 'noreply@' . $host;

$subject = 'Contacto web - Condominio Ecológico';
$body = "Nombre: {$name}\nCorreo: {$email}\n\nMensaje:\n{$message}\n";
$headers = implode("\r\n", [
	'MIME-Version: 1.0',
	'Content-Type: text/plain; charset=UTF-8',
	'From: Condominio Ecológico <' . $from . '>',
	'Reply-To: ' . $name . ' <' . $email . '>',
]);

$sent = mail($to, '=?UTF-8?B?' . base64_encode($subject) . '?=', $body, $headers);

if ($sent) {
	echo json_encode(['ok' => true]);
	exit;
}

http_response_code(500);
echo json_encode(['ok' => false, 'error' => 'send']);
