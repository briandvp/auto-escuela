import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/services/seo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private seoService: SeoService) { }

  ngOnInit(): void {
    this.seoService.updateSeoData({
      title: 'Inicio - Clases de Manejo en Buenos Aires',
      description: 'Autoescuela con 10 años de experiencia formando conductores responsables. Clases de manejo de auto y moto en Capital Federal y Zona Norte. Servicio puerta a puerta, instructores certificados, vehículos doble comando. Aprende a manejar con los mejores.',
      keywords: 'autoescuela Buenos Aires, escuela de manejo CABA, clases de manejo Capital Federal, licencia de conducir GBA, aprender a manejar auto, clases de manejo moto, curso de manejo, examen de manejo, autoescuela zona norte, clases de manejo puerta a puerta, instructor de manejo certificado, vehículo doble comando, examen práctico manejo',
      ogUrl: 'https://www.miautoescuela.es/'
    });

    // FAQ Schema para SEO
    this.seoService.setJsonLd({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "¿Dónde dan clases de manejo en Buenos Aires?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ofrecemos clases de manejo de auto y moto en Capital Federal y Zona Norte. Servicio puerta a puerta con instructores certificados."
          }
        },
        {
          "@type": "Question",
          "name": "¿Cuánto cuesta aprender a manejar auto?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tenemos planes desde 5 clases. Clases de auto manual desde $188.000 y automático desde $218.000. Todos los planes incluyen servicio puerta a puerta y vehículo doble comando."
          }
        },
        {
          "@type": "Question",
          "name": "¿Qué necesito para obtener la licencia de conducir?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Necesitas aprobar el examen teórico (sobre señales de tránsito, normas de circulación y seguridad vial) y el examen práctico. Ofrecemos clases de manejo y material teórico para prepararte."
          }
        },
        {
          "@type": "Question",
          "name": "¿Ofrecen clases de manejo de moto?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sí, ofrecemos cursos de manejo de moto para categorías A21 (hasta 150cc) y A22 (más de 150cc). Incluye elementos de seguridad y te llevamos a rendir el examen."
          }
        }
      ]
    });
  }

}
