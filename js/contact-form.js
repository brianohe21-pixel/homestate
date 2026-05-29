;(function () {
	'use strict';

	var M = {
		es: {
			sending: 'Enviando...',
			success: 'Mensaje enviado. Te contactaremos pronto.',
			error: 'No se pudo enviar el mensaje. Intenta de nuevo o escríbenos por WhatsApp.',
			required: 'Completa todos los campos.',
			email: 'Introduce un correo válido.'
		},
		en: {
			sending: 'Sending...',
			success: 'Message sent. We will contact you soon.',
			error: 'Could not send the message. Try again or write to us on WhatsApp.',
			required: 'Please fill in all fields.',
			email: 'Enter a valid email address.'
		}
	};

	function msg(key) {
		var lang = document.documentElement.getAttribute('lang');
		var pack = M[lang] || M.es;
		return pack[key] || M.es[key];
	}

	function init() {
		var forms = document.querySelectorAll('.contact-form');
		for (var i = 0; i < forms.length; i++) {
			forms[i].addEventListener('submit', handleSubmit);
		}
	}

	function handleSubmit(e) {
		e.preventDefault();
		var form = e.target;
		var btn = form.querySelector('[type="submit"]');
		var feedback = form.querySelector('.contact-form-feedback');
		var defaultLabel = btn.getAttribute('data-default-value') || btn.value;

		if (!btn.getAttribute('data-default-value')) {
			btn.setAttribute('data-default-value', defaultLabel);
		}

		feedback.className = 'contact-form-feedback';
		feedback.textContent = '';
		btn.disabled = true;
		btn.value = msg('sending');

		var body = new FormData(form);

		fetch(form.getAttribute('action'), {
			method: 'POST',
			body: body,
			headers: { 'Accept': 'application/json' }
		})
			.then(function (res) {
				return res.json().then(function (data) {
					return { ok: res.ok, data: data };
				});
			})
			.then(function (result) {
				if (result.ok && result.data.ok) {
					feedback.className = 'contact-form-feedback is-success';
					feedback.textContent = msg('success');
					form.reset();
					return;
				}
				var err = result.data && result.data.error;
				feedback.className = 'contact-form-feedback is-error';
				if (err === 'required') {
					feedback.textContent = msg('required');
				} else if (err === 'email') {
					feedback.textContent = msg('email');
				} else {
					feedback.textContent = msg('error');
				}
			})
			.catch(function () {
				feedback.className = 'contact-form-feedback is-error';
				feedback.textContent = msg('error');
			})
			.finally(function () {
				btn.disabled = false;
				btn.value = defaultLabel;
			});
	}

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', init);
	} else {
		init();
	}
})();
