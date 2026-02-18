import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/services/seo.service';

@Component({
  selector: 'app-clases-auto',
  templateUrl: './clases-auto.component.html',
  styleUrls: ['./clases-auto.component.scss']
})
export class ClasesAutoComponent implements OnInit {

  constructor(private seoService: SeoService) { }

  ngOnInit(): void {
    this.seoService.updateSeoData({
      title: 'Clases de Manejo de Auto en Buenos Aires - Precios y Planes',
      description: 'Clases de manejo de auto personalizadas en Capital Federal y GBA. Instructores certificados y pacientes, vehículos doble comando manual y automático. Planes desde 5 clases, servicio puerta a puerta. Preparate para tu examen práctico con los mejores.',
      keywords: 'clases de manejo auto Buenos Aires, aprender a manejar auto CABA, curso de manejo auto Capital Federal, examen de manejo auto, licencia de conducir auto, practica de manejo auto, clases de manejo manual, clases de manejo automático, vehículo doble comando, instructor de manejo auto, precio clases de manejo, autoescuela auto',
      ogUrl: 'https://www.miautoescuela.es/clases-auto'
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
          "name": "Clases de Auto",
          "item": "https://www.miautoescuela.es/clases-auto"
        }
      ]
    });
  }

}
