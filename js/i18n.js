;(function () {
	'use strict';

	var STORAGE_KEY = 'condominio-ecologico-lang';

	var M = {
		es: {
			'meta.title.index': 'Condominio Ecológico',
			'meta.title.properties': 'Condominio Ecológico — Lotes',
			'meta.title.contact': 'Condominio Ecológico — Contacto',
			'meta.desc': 'Condominio Campestre Ecológico en Puerto López, Meta: lotes de 2.000 m² con escritura inmediata en los Llanos Orientales.',
			'nav.home': 'Inicio',
			'nav.contact': 'Contacto',
			'hero.credit': 'Vive en armonía con la naturaleza en el corazón de los Llanos',
			'search.title': 'Buscar lotes',
			'search.keyword': 'Palabra clave:',
			'search.keyword_ph': 'Cualquiera',
			'search.status': 'Estado:',
			'search.type': 'Tipo:',
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
			'index.features.title': '¿Por qué elegir el condominio?',
			'index.features.sub': 'Todo lo que necesitas para tu lote campestre en Puerto López, Meta.',
			'index.feat1.title': 'Ubicación privilegiada',
			'index.feat1.desc': 'En el centro geográfico de Colombia, rodeado del mar verde de los Llanos Orientales.',
			'index.feat2.title': 'Escritura inmediata',
			'index.feat2.desc': 'Lotes con documentación al día para que adquieras y construyas sin demoras.',
			'index.feat3.title': '2.000 m² por lote',
			'index.feat3.desc': 'Espacio amplio para diseñar tu casa campestre, jardín y zona de descanso.',
			'index.feat4.title': 'Zonas comunes',
			'index.feat4.desc': 'Piscinas, parques infantiles, zona de B.B.Q y senderos ecológicos para toda la familia.',
			'index.feat5.title': 'Entorno natural',
			'index.feat5.desc': 'Caños veraneros y paisajes llaneros que conectan tu proyecto con la naturaleza.',
			'index.feat6.title': 'Casa de descanso',
			'index.feat6.desc': 'Infraestructura lista para que materialices tu refugio campestre en los Llanos.',
			'index.popular.title': 'Lotes destacados',
			'index.popular.sub': 'Opciones disponibles en el condominio con acceso a todas las amenidades comunes.',
			'index.pop1.title': 'Lote sector caños veraneros',
			'index.pop2.title': 'Lote con acceso a senderos ecológicos',
			'index.pop3.title': 'Lote zona social y piscinas',
			'index.testimonial.title': 'Propietarios satisfechos',
			'index.testimonial.q1': '«Encontramos el lote ideal para nuestra casa de descanso. La escritura fue inmediata y el entorno natural superó nuestras expectativas.»',
			'index.testimonial.q2': '«Los senderos ecológicos y la zona social hacen que cada visita al condominio sea un plan familiar completo.»',
			'index.testimonial.q3': '«Invertir en Puerto López fue la mejor decisión. Tenemos 2.000 m² para construir el hogar campestre que siempre soñamos.»',
			'index.testimonial.a1': 'María y Carlos R. <span class="subtext">Propietarios, Bogotá</span>',
			'index.testimonial.a2': 'Ana Lucía M. <span class="subtext">Propietaria, Villavicencio</span>',
			'index.testimonial.a3': 'Jorge y Patricia L. <span class="subtext">Propietarios, Medellín</span>',
			'index.newest.title': 'Lotes disponibles',
			'index.newest.sub': 'Conoce las opciones actuales y agenda una visita al condominio.',
			'index.gallery.title': 'Galería',
			'index.gallery.sub': 'Conoce el entorno natural y las zonas comunes del condominio.',
			'prop.price_inquire': 'Consultar',
			'prop.cta': 'Consultar lote',
			'prop.address': 'Puerto López, Meta, Colombia',
			'prop.lorem': 'Lote campestre de 2.000 m² en condominio ecológico con escritura inmediata y acceso a zonas comunes.',
			'prop.section_lorem': 'Lotes campestres de 2.000 m² con escritura inmediata en Puerto López, Meta.',
			'prop.detail_area': '2.000 m²',
			'prop.detail_deed': 'Escritura inmediata',
			'prop.detail_type': 'Lote campestre',
			'prop.detail_access': 'Vías internas',
			'prop.p1.title': 'Lote sector caños veraneros',
			'prop.p1.desc': 'Lote con vista al entorno natural de caños veraneros, ideal para quienes buscan tranquilidad y contacto con la naturaleza.',
			'prop.p2.title': 'Lote con senderos ecológicos',
			'prop.p2.desc': 'Acceso directo a senderos para caminatas ecológicas dentro del condominio.',
			'prop.p3.title': 'Lote zona B.B.Q',
			'prop.p3.desc': 'Ubicado cerca de la zona de parrilla y áreas verdes para reuniones familiares.',
			'prop.p4.title': 'Lote parques infantiles',
			'prop.p4.desc': 'Cerca de los parques infantiles, perfecto para familias con niños.',
			'prop.p5.title': 'Lote zona social',
			'prop.p5.desc': 'A pocos pasos de la zona social con piscinas y áreas de esparcimiento.',
			'prop.p6.title': 'Lote vista Llanos',
			'prop.p6.desc': 'Amplia vista al mar verde de los Llanos Orientales desde tu futura casa de descanso.',
			'index.cta.title': '¿Te interesa un lote? Escríbenos',
			'index.cta.sub': 'Completa el formulario y te contactamos con disponibilidad, precios y opciones de visita.',
			'index.cta.address_title': 'Ubicación',
			'index.cta.address': 'Condominio Campestre Ecológico<br>Puerto López, Meta, Colombia',
			'index.cta.map_open': 'Abrir en Google Maps',
			'form.name': 'Nombre',
			'form.email': 'Correo electrónico',
			'form.message': 'Mensaje',
			'form.send': 'Enviar mensaje',
			'footer.about_title': 'Sobre Condominio Ecológico',
			'footer.about': 'Condominio campestre ecológico en Puerto López, Meta. Lotes de 2.000 m² con escritura inmediata, caños veraneros, senderos, zona social con piscinas y todo listo para tu casa de descanso.',
			'footer.links': 'Enlaces',
			'footer.information': 'Información',
			'footer.newsletter': 'Boletín',
			'footer.newsletter_sub': 'Recibe novedades sobre lotes disponibles',
			'footer.ph_email': 'Introduce tu correo',
			'footer.link_home': 'Inicio',
			'footer.link_contact': 'Contacto',
			'footer.link_faq': 'Preguntas frecuentes',
			'footer.tos': 'Términos y condiciones',
			'footer.license': 'Licencia',
			'footer.privacy': 'Privacidad y política',
			'footer.contact_link': 'Contacto',
			'footer.copyright': 'Copyright Condominio Ecológico. Todos los derechos reservados.<br>Puerto López, Meta, Colombia',
			'properties.hero.title': 'Nuestros lotes',
			'properties.newest.title': 'Lotes disponibles',
			'properties.newest.sub': 'Conoce las opciones actuales y agenda una visita al condominio.',
			'contact.hero.title': 'Contáctanos',
			'contact.section.title': 'Información de contacto',
			'contact.section.sub': 'Escríbenos para conocer disponibilidad de lotes, precios, escritura y agendar una visita al condominio.',
			'contact.address.title': 'Ubicación del condominio',
			'contact.address.text': 'Condominio Campestre Ecológico<br>Puerto López, Meta, Colombia',
			'contact.phone': '+57 313 874 0915',
			'contact.email': 'condominioecologicoinfo@gmail.com',
			'contact.web': 'www.condominioecologico.com'
		},
		en: {
			'meta.title.index': 'Ecological Condominium',
			'meta.title.properties': 'Ecological Condominium — Lots',
			'meta.title.contact': 'Ecological Condominium — Contact',
			'meta.desc': 'Ecological Country Condominium in Puerto López, Meta: 2,000 m² lots with immediate title deed in the Eastern Plains.',
			'nav.home': 'Home',
			'nav.contact': 'Contact',
			'hero.credit': 'Live in harmony with nature in the heart of the Llanos',
			'search.title': 'Search Lots',
			'search.keyword': 'Keyword:',
			'search.keyword_ph': 'Any',
			'search.status': 'Status:',
			'search.type': 'Type:',
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
			'index.features.title': 'Why choose the condominium?',
			'index.features.sub': 'Everything you need for your country lot in Puerto López, Meta.',
			'index.feat1.title': 'Prime Location',
			'index.feat1.desc': 'At the geographic center of Colombia, surrounded by the green sea of the Eastern Plains.',
			'index.feat2.title': 'Immediate Title Deed',
			'index.feat2.desc': 'Lots with up-to-date documentation so you can purchase and build without delays.',
			'index.feat3.title': '2,000 m² per lot',
			'index.feat3.desc': 'Ample space to design your country home, garden and relaxation area.',
			'index.feat4.title': 'Common Areas',
			'index.feat4.desc': 'Pools, playgrounds, B.B.Q area and ecological trails for the whole family.',
			'index.feat5.title': 'Natural Setting',
			'index.feat5.desc': 'Seasonal creeks and llanos landscapes that connect your project with nature.',
			'index.feat6.title': 'Vacation Home',
			'index.feat6.desc': 'Infrastructure ready for you to build your country retreat in the Llanos.',
			'index.popular.title': 'Featured Lots',
			'index.popular.sub': 'Available options in the condominium with access to all common amenities.',
			'index.pop1.title': 'Lot near seasonal creeks',
			'index.pop2.title': 'Lot with access to ecological trails',
			'index.pop3.title': 'Lot near social area and pools',
			'index.testimonial.title': 'Happy Owners',
			'index.testimonial.q1': '&ldquo;We found the ideal lot for our vacation home. The title deed was immediate and the natural setting exceeded our expectations.&rdquo;',
			'index.testimonial.q2': '&ldquo;The ecological trails and social area make every visit to the condominium a complete family experience.&rdquo;',
			'index.testimonial.q3': '&ldquo;Investing in Puerto López was the best decision. We have 2,000 m² to build the country home we always dreamed of.&rdquo;',
			'index.testimonial.a1': 'María and Carlos R. <span class="subtext">Owners, Bogotá</span>',
			'index.testimonial.a2': 'Ana Lucía M. <span class="subtext">Owner, Villavicencio</span>',
			'index.testimonial.a3': 'Jorge and Patricia L. <span class="subtext">Owners, Medellín</span>',
			'index.newest.title': 'Available Lots',
			'index.newest.sub': 'Explore current options and schedule a visit to the condominium.',
			'index.gallery.title': 'Gallery',
			'index.gallery.sub': 'Discover the natural setting and common areas of the condominium.',
			'prop.price_inquire': 'Inquire',
			'prop.cta': 'Inquire about lot',
			'prop.address': 'Puerto López, Meta, Colombia',
			'prop.lorem': '2,000 m² country lot in ecological condominium with immediate title deed and access to common areas.',
			'prop.section_lorem': '2,000 m² country lots with immediate title deed in Puerto López, Meta.',
			'prop.detail_area': '2,000 m²',
			'prop.detail_deed': 'Immediate title deed',
			'prop.detail_type': 'Country lot',
			'prop.detail_access': 'Internal roads',
			'prop.p1.title': 'Lot near seasonal creeks',
			'prop.p1.desc': 'Lot with views of the natural seasonal creek environment, ideal for those seeking tranquility and nature.',
			'prop.p2.title': 'Lot with ecological trails',
			'prop.p2.desc': 'Direct access to ecological walking trails within the condominium.',
			'prop.p3.title': 'Lot near B.B.Q area',
			'prop.p3.desc': 'Located near the grill area and green spaces for family gatherings.',
			'prop.p4.title': 'Lot near playgrounds',
			'prop.p4.desc': 'Close to the children\'s playgrounds, perfect for families with kids.',
			'prop.p5.title': 'Lot near social area',
			'prop.p5.desc': 'Steps away from the social area with pools and recreation spaces.',
			'prop.p6.title': 'Lot with Llanos view',
			'prop.p6.desc': 'Wide views of the green sea of the Eastern Plains from your future vacation home.',
			'index.cta.title': 'Interested in a lot? Write to us',
			'index.cta.sub': 'Complete the form and we will contact you with availability, pricing and visit options.',
			'index.cta.address_title': 'Location',
			'index.cta.address': 'Ecological Country Condominium<br>Puerto López, Meta, Colombia',
			'index.cta.map_open': 'Open in Google Maps',
			'form.name': 'Name',
			'form.email': 'Email',
			'form.message': 'Message',
			'form.send': 'Send Message',
			'footer.about_title': 'About Ecological Condominium',
			'footer.about': 'Ecological country condominium in Puerto López, Meta. 2,000 m² lots with immediate title deed, seasonal creeks, trails, social area with pools and everything ready for your vacation home.',
			'footer.links': 'Links',
			'footer.information': 'Information',
			'footer.newsletter': 'Newsletter',
			'footer.newsletter_sub': 'Get updates on available lots',
			'footer.ph_email': 'Enter your email',
			'footer.link_home': 'Home',
			'footer.link_contact': 'Contact',
			'footer.link_faq': 'FAQ',
			'footer.tos': 'Terms & Conditions',
			'footer.license': 'License',
			'footer.privacy': 'Privacy Policy',
			'footer.contact_link': 'Contact Us',
			'footer.copyright': 'Copyright Ecological Condominium. All rights reserved.<br>Puerto López, Meta, Colombia',
			'properties.hero.title': 'Our Lots',
			'properties.newest.title': 'Available Lots',
			'properties.newest.sub': 'Explore current options and schedule a visit to the condominium.',
			'contact.hero.title': 'Contact Us',
			'contact.section.title': 'Contact Information',
			'contact.section.sub': 'Write to us to learn about lot availability, pricing, title deed process and schedule a visit to the condominium.',
			'contact.address.title': 'Condominium location',
			'contact.address.text': 'Ecological Country Condominium<br>Puerto López, Meta, Colombia',
			'contact.phone': '+57 313 874 0915',
			'contact.email': 'condominioecologicoinfo@gmail.com',
			'contact.web': 'www.condominioecologico.com'
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
