import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/services/seo.service';

@Component({
  selector: 'app-teorico',
  templateUrl: './teorico.component.html',
  styleUrls: ['./teorico.component.scss']
})
export class TeoricoComponent implements OnInit {

  constructor(private seoService: SeoService) { }

  ngOnInit(): void {
    this.seoService.updateSeoData({
      title: 'Material Teórico para Examen de Licencia de Conducir - Guía Completa',
      description: 'Repasá las señales de tránsito y normas de seguridad vial. Material de estudio actualizado y completo para aprobar el examen teórico de licencia de conducir en Buenos Aires. Temas: señales, reglas de circulación, documentación, alcohol y drogas, primeros auxilios, mecánica básica.',
      keywords: 'señales de transito, examen teorico manejo Buenos Aires, normas de transito, seguridad vial, curso teorico manejo, licencia de conducir teorico, material de estudio licencia, examen teorico CABA, reglas de circulación, documentación vehículo, límites alcoholemia, primeros auxilios conducción',
      ogUrl: 'https://www.miautoescuela.es/teorico'
    });

    // Breadcrumbs Schema
    this.seoService.setJsonLd({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Inicio",
          "item": "https://www.miautoescuela.es/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Material Teórico",
          "item": "https://www.miautoescuela.es/teorico"
        }
      ]
    });
  }

}
