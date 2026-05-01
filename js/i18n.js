;(function () {
	'use strict';

	var STORAGE_KEY = 'condominio-ecologico-lang';

	var M = {
		es: {
			'meta.title.index': 'Condominio Ecológico',
			'meta.title.properties': 'Condominio Ecológico — Propiedades',
			'meta.title.contact': 'Condominio Ecológico — Contacto',
			'meta.desc': 'Condominio Ecológico: propiedades y vida en armonía con el entorno.',
			'nav.home': 'Inicio',
			'nav.contact': 'Contacto',
			'hero.credit': 'Diseñado con <i class="icon-heart3"></i> por el equipo de <a href="http://freehtml5.co" target="_blank">FreeHTML5.co</a>',
			'search.title': 'Buscar propiedades',
			'search.keyword': 'Palabra clave:',
			'search.keyword_ph': 'Cualquiera',
			'search.status': 'Estado de la propiedad:',
			'search.type': 'Tipo de propiedad:',
			'search.location': 'Ubicación:',
			'search.price': 'Precio:',
			'search.bedrooms': 'Dormitorios:',
			'search.bathrooms': 'Baños:',
			'search.area': 'Superficie:',
			'search.parking': 'Plazas de parking:',
			'search.cta': 'Saber más',
			'search.opt.any': 'Cualquiera',
			'search.opt.rent': 'Alquiler',
			'search.opt.sale': 'Venta',
			'search.opt.building': 'Edificio',
			'search.opt.office': 'Oficina',
			'status.sale': 'Venta',
			'status.rent': 'Alquiler',
			'index.slide.badge': 'Venta',
			'index.slide.title': 'Condominio Campestre Ecológico en Puerto López, Meta 📍',
			'index.slide.highlight': 'Lotes de 2.000 m² con escritura inmediata',
			'index.slide.desc': '<p>En el centro geográfico de Colombia, en el mar verde de los Llanos.</p><p>Un paraíso que se compone de:</p><ul class="slide-amenities"><li>🌿 Caños veraneros</li><li>🚶‍♀️ Senderos para caminatas ecológicas</li><li>🌳 Zona de B.B.Q</li><li>👨‍👩‍👧‍👦 Parques infantiles</li><li>🏊 Zona social con piscinas y mucho más</li></ul><p>Todo listo para construir tu casa de descanso.</p>',
			'index.slide.learn': 'Saber más',
			'index.feat1.title': 'Mudanza',
			'index.feat1.desc': 'Te ayudamos a planificar tu traslado con asesoramiento y recursos locales.',
			'index.feat2.title': 'Hipoteca',
			'index.feat2.desc': 'Opciones de financiación y comparación de condiciones con aliados bancarios.',
			'index.feat3.title': 'Rentabilidad',
			'index.feat3.desc': 'Análisis de inversión y retorno estimado para tu próxima compra.',
			'index.feat4.title': 'Negocio en casa',
			'index.feat4.desc': 'Espacios adaptados al teletrabajo y necesidades profesionales.',
			'index.feat5.title': 'Marketing',
			'index.feat5.desc': 'Difusión en portales, visitas virtuales y seguimiento de interesados.',
			'index.feat6.title': 'Explorar',
			'index.feat6.desc': 'Recorre zonas, servicios y comparativas de barrio en un solo lugar.',
			'index.popular.title': 'Propiedades populares',
			'index.popular.sub': 'Una selección de viviendas destacadas por ubicación, precio y demanda del mercado.',
			'index.pop1.title': 'Propiedades cerca de la playa, California, EE. UU.',
			'index.pop2.title': 'Casa moderna en Nueva Zelanda',
			'index.pop3.title': 'Casa tipo bungalow',
			'index.testimonial.title': 'Clientes satisfechos',
			'index.testimonial.q1': '«Muy lejos, tras las montañas de las palabras, lejos de los países de Vokalia y Consonantia, viven los textos ciegos. Separados viven en Bookmarksgrove, junto a la costa de Semantics, un gran océano de lenguas.»',
			'index.testimonial.q2': '«Muy lejos, tras las montañas de las palabras, lejos de los países de Vokalia y Consonantia, viven los textos ciegos.»',
			'index.testimonial.q3': '«Muy lejos, tras las montañas de las palabras, lejos de los países de Vokalia y Consonantia, viven los textos ciegos. Separados viven en Bookmarksgrove, junto a la costa de Semantics, un gran océano de lenguas.»',
			'index.testimonial.a1': 'John Doe, CEO <a href="http://freehtml5.co/" target="_blank">FREEHTML5.co</a> <span class="subtext">Director creativo</span>',
			'index.testimonial.a2': 'John Doe, CEO <a href="http://freehtml5.co/" target="_blank">FREEHTML5.co</a> <span class="subtext">Director creativo</span>',
			'index.testimonial.a3': 'John Doe, fundador <a href="#">FREEHTML5.co</a> <span class="subtext">Director creativo</span>',
			'index.newest.title': 'Propiedades más recientes',
			'index.newest.sub': 'Últimas incorporaciones al catálogo: revisa detalles y agenda una visita.',
			'prop.lorem': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit est facilis maiores.',
			'prop.section_lorem': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit est facilis maiores, perspiciatis accusamus asperiores sint consequuntur debitis.',
			'prop.detail_sqft': '2000 pies²',
			'prop.detail_bed': '5 dormitorios',
			'prop.detail_bath': '4 baños',
			'prop.detail_garage': '3 plazas garaje',
			'prop.p1.title': 'Propiedades cerca de la playa',
			'prop.p2.title': 'Casa moderna en NZ',
			'prop.p3.title': 'Casa bungalow',
			'prop.p4.title': 'Propiedades en Alaska',
			'prop.p5.title': 'Propiedades modernas',
			'prop.p6.title': 'Casa en la cima de la montaña',
			'index.cta.title': 'Escríbenos: estamos para ayudarte',
			'index.cta.sub': 'Completa el formulario y te contactamos con la información que necesitas.',
			'index.cta.address_title': 'Ubicación',
			'index.cta.address': 'Condominio Campestre Ecológico<br>Puerto López, Meta, Colombia',
			'index.cta.map_open': 'Abrir en Google Maps',
			'form.name': 'Nombre',
			'form.email': 'Correo electrónico',
			'form.message': 'Mensaje',
			'form.send': 'Enviar mensaje',
			'footer.about_title': 'Sobre Condominio Ecológico',
			'footer.about': 'Muy lejos, tras las montañas de las palabras, lejos de los países de Vokalia y Consonantia, viven los textos ciegos. Separados viven en Bookmarksgrove, junto a la costa de Semantics.',
			'footer.links': 'Enlaces',
			'footer.information': 'Información',
			'footer.newsletter': 'Boletín',
			'footer.newsletter_sub': 'Suscríbete a nuestro boletín',
			'footer.ph_email': 'Introduce tu correo',
			'footer.link_home': 'Inicio',
			'footer.link_api': 'API',
			'footer.link_faq': 'Preguntas frecuentes / Contacto',
			'footer.tos': 'Términos y condiciones',
			'footer.license': 'Licencia',
			'footer.privacy': 'Privacidad y política',
			'footer.contact_link': 'Contacto',
			'footer.copyright': 'Copyright 2016 Free Html5 <a href="#">Module</a>. Todos los derechos reservados. <br>Hecho con <i class="icon-heart3"></i> por <a href="http://freehtml5.co/" target="_blank">Freehtml5.co</a> / Imágenes demo: <a href="https://unsplash.com/" target="_blank">Unsplash</a> y <a href="http://blog.gessato.com/" target="_blank">Gessato</a>',
			'properties.hero.title': 'Nuestras propiedades',
			'properties.newest.title': 'Propiedades más recientes',
			'properties.newest.sub': 'Últimas incorporaciones al catálogo: revisa detalles y agenda una visita.',
			'contact.hero.title': 'Contáctanos',
			'contact.section.title': 'Información de contacto',
			'contact.section.sub': 'Muy lejos, tras las montañas de las palabras, lejos de los países de Vokalia y Consonantia, viven los textos ciegos.',
			'contact.address.title': 'Nuestra dirección',
			'contact.address.text': 'Muy lejos, tras las montañas de las palabras, lejos de los países de Vokalia y Consonantia, viven los textos ciegos.'
		},
		en: {
			'meta.title.index': 'Ecological Condominium',
			'meta.title.properties': 'Ecological Condominium — Properties',
			'meta.title.contact': 'Ecological Condominium — Contact',
			'meta.desc': 'Ecological Condominium: properties and living in harmony with the environment.',
			'nav.home': 'Home',
			'nav.contact': 'Contact',
			'hero.credit': 'Designed with <i class="icon-heart3"></i> by the fine folks at <a href="http://freehtml5.co" target="_blank">FreeHTML5.co</a>',
			'search.title': 'Search Properties',
			'search.keyword': 'Keyword:',
			'search.keyword_ph': 'Any',
			'search.status': 'Property Status:',
			'search.type': 'Property Type:',
			'search.location': 'Location:',
			'search.price': 'Price:',
			'search.bedrooms': 'Bedrooms:',
			'search.bathrooms': 'Bathrooms:',
			'search.area': 'Area:',
			'search.parking': 'Parking spots:',
			'search.cta': 'Learn More',
			'search.opt.any': 'Any',
			'search.opt.rent': 'Rent',
			'search.opt.sale': 'Sale',
			'search.opt.building': 'Building',
			'search.opt.office': 'Office',
			'status.sale': 'Sale',
			'status.rent': 'Rent',
			'index.slide.badge': 'Sale',
			'index.slide.title': 'Ecological Country Condominium in Puerto López, Meta 📍',
			'index.slide.highlight': '2,000 m² lots with immediate title deed',
			'index.slide.desc': '<p>At the geographic heart of Colombia, in the green sea of the Llanos.</p><p>A paradise that includes:</p><ul class="slide-amenities"><li>🌿 Seasonal creeks</li><li>🚶‍♀️ Trails for ecological walks</li><li>🌳 B.B.Q area</li><li>👨‍👩‍👧‍👦 Children\'s playgrounds</li><li>🏊 Social area with pools and more</li></ul><p>Everything ready to build your vacation home.</p>',
			'index.slide.learn': 'Learn More',
			'index.feat1.title': 'Move House',
			'index.feat1.desc': 'Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.',
			'index.feat2.title': 'Mortgage',
			'index.feat2.desc': 'Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.',
			'index.feat3.title': 'Make Money',
			'index.feat3.desc': 'Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.',
			'index.feat4.title': 'Business Home',
			'index.feat4.desc': 'Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.',
			'index.feat5.title': 'Marketing',
			'index.feat5.desc': 'Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.',
			'index.feat6.title': 'Explorer',
			'index.feat6.desc': 'Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.',
			'index.popular.title': 'Popular Properties',
			'index.popular.sub': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit est facilis maiores, perspiciatis accusamus asperiores sint consequuntur debitis.',
			'index.pop1.title': 'Properties Near in Beach, USA California',
			'index.pop2.title': 'Modern House at NZ',
			'index.pop3.title': 'Bonggalo House',
			'index.testimonial.title': 'Happy Clients',
			'index.testimonial.q1': '&ldquo;Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.&rdquo;',
			'index.testimonial.q2': '&ldquo;Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.&rdquo;',
			'index.testimonial.q3': '&ldquo;Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.&rdquo;',
			'index.testimonial.a1': 'John Doe, CEO <a href="http://freehtml5.co/" target="_blank">FREEHTML5.co</a> <span class="subtext">Creative Director</span>',
			'index.testimonial.a2': 'John Doe, CEO <a href="http://freehtml5.co/" target="_blank">FREEHTML5.co</a> <span class="subtext">Creative Director</span>',
			'index.testimonial.a3': 'John Doe, Founder <a href="#">FREEHTML5.co</a> <span class="subtext">Creative Director</span>',
			'index.newest.title': 'Newest Properties',
			'index.newest.sub': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit est facilis maiores, perspiciatis accusamus asperiores sint consequuntur debitis.',
			'prop.lorem': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit est facilis maiores.',
			'prop.section_lorem': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit est facilis maiores, perspiciatis accusamus asperiores sint consequuntur debitis.',
			'prop.detail_sqft': '2000 ft sq',
			'prop.detail_bed': '5 Bedroom:',
			'prop.detail_bath': '4 Bathroom:',
			'prop.detail_garage': '3 Garage:',
			'prop.p1.title': 'Properties Near in Beach',
			'prop.p2.title': 'Modern House at NZ',
			'prop.p3.title': 'Bonggalo House',
			'prop.p4.title': 'Properties at Alaska',
			'prop.p5.title': 'Modern Properties',
			'prop.p6.title': 'House at the Top of Mountain',
			'index.cta.title': 'Write to us: we are here to help',
			'index.cta.sub': 'Complete the form and we will get back to you with the information you need.',
			'index.cta.address_title': 'Location',
			'index.cta.address': 'Ecological Country Condominium<br>Puerto López, Meta, Colombia',
			'index.cta.map_open': 'Open in Google Maps',
			'form.name': 'Name',
			'form.email': 'Email',
			'form.message': 'Message',
			'form.send': 'Send Message',
			'footer.about_title': 'About Ecological Condominium',
			'footer.about': 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics.',
			'footer.links': 'Links',
			'footer.information': 'Information',
			'footer.newsletter': 'Newsletter',
			'footer.newsletter_sub': 'Subscribe for our newsletter',
			'footer.ph_email': 'Enter your email',
			'footer.link_home': 'Home',
			'footer.link_api': 'API',
			'footer.link_faq': 'FAQ / Contact',
			'footer.tos': 'Terms & Condition',
			'footer.license': 'License',
			'footer.privacy': 'Privacy & Policy',
			'footer.contact_link': 'Contact Us',
			'footer.copyright': 'Copyright 2016 Free Html5 <a href="#">Module</a>. All Rights Reserved. <br>Made with <i class="icon-heart3"></i> by <a href="http://freehtml5.co/" target="_blank">Freehtml5.co</a> / Demo Images: <a href="https://unsplash.com/" target="_blank">Unsplash</a> &amp; <a href="http://blog.gessato.com/" target="_blank">Gessato</a>',
			'properties.hero.title': 'Our Properties',
			'properties.newest.title': 'Newest Properties',
			'properties.newest.sub': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit est facilis maiores, perspiciatis accusamus asperiores sint consequuntur debitis.',
			'contact.hero.title': 'Contact Us',
			'contact.section.title': 'Contact Information',
			'contact.section.sub': 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
			'contact.address.title': 'Our Address',
			'contact.address.text': 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
		}
	};

	function t(lang, key) {
		var pack = M[lang] || M.es;
		var s = pack[key];
		if (s === undefined) s = M.es[key];
		return s !== undefined ? s : key;
	}

	function applyLanguage(lang) {
		if (lang !== 'en' && lang !== 'es') lang = 'es';
		document.documentElement.setAttribute('lang', lang);
		var els = document.querySelectorAll('[data-i18n]');
		for (var i = 0; i < els.length; i++) {
			var el = els[i];
			var key = el.getAttribute('data-i18n');
			var val = t(lang, key);
			if (el.hasAttribute('data-i18n-html')) {
				el.innerHTML = val;
			} else if (el.tagName === 'TITLE') {
				document.title = val;
			} else {
				el.textContent = val;
			}
		}
		var ph = document.querySelectorAll('[data-i18n-placeholder]');
		for (var j = 0; j < ph.length; j++) {
			var pe = ph[j];
			pe.setAttribute('placeholder', t(lang, pe.getAttribute('data-i18n-placeholder')));
		}
		var va = document.querySelectorAll('[data-i18n-value]');
		for (var k = 0; k < va.length; k++) {
			var ve = va[k];
			ve.setAttribute('value', t(lang, ve.getAttribute('data-i18n-value')));
		}
		var mc = document.querySelectorAll('meta[data-i18n-content]');
		for (var n = 0; n < mc.length; n++) {
			var me = mc[n];
			me.setAttribute('content', t(lang, me.getAttribute('data-i18n-content')));
		}
		var sw = document.querySelectorAll('[data-set-lang]');
		for (var m = 0; m < sw.length; m++) {
			var btn = sw[m];
			btn.classList.toggle('active', btn.getAttribute('data-set-lang') === lang);
		}
	}

	function readStoredLang() {
		try {
			var v = localStorage.getItem(STORAGE_KEY);
			if (v === 'en' || v === 'es') return v;
		} catch (e) {}
		return 'es';
	}

	function init() {
		var lang = readStoredLang();
		applyLanguage(lang);
		var btns = document.querySelectorAll('[data-set-lang]');
		for (var i = 0; i < btns.length; i++) {
			btns[i].addEventListener('click', function (e) {
				e.preventDefault();
				var l = this.getAttribute('data-set-lang');
				if (l !== 'en' && l !== 'es') return;
				try {
					localStorage.setItem(STORAGE_KEY, l);
				} catch (err) {}
				applyLanguage(l);
			});
		}
	}

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', init);
	} else {
		init();
	}
})();
