import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/services/seo.service';

@Component({
  selector: 'app-clases-moto',
  templateUrl: './clases-moto.component.html',
  styleUrls: ['./clases-moto.component.scss']
})
export class ClasesMotoComponent implements OnInit {

  constructor(private seoService: SeoService) { }

  ngOnInit(): void {
    this.seoService.updateSeoData({
      title: 'Clases de Manejo de Moto en Buenos Aires - CAT A21 y A22',
      description: 'Aprendé a manejar moto con seguridad en Capital Federal y GBA. Cursos para principiantes y avanzados, categorías A21 (hasta 150cc) y A22 (más de 150cc). Elementos de seguridad incluidos, te llevamos a rendir. Instructores especializados.',
      keywords: 'clases de manejo moto Buenos Aires, aprender a manejar moto CABA, curso de moto Capital Federal, examen de moto, licencia de conducir moto, practica de moto, categoría A21 moto, categoría A22 moto, licencia moto hasta 150cc, licencia moto más 150cc, curso de moto principiantes, autoescuela moto',
      ogUrl: 'https://www.miautoescuela.es/clases-moto'
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
          "name": "Clases de Moto",
          "item": "https://www.miautoescuela.es/clases-moto"
        }
      ]
    });
  }

}
