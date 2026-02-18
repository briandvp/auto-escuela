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
      title: 'Clases de Moto',
      description: 'Aprendé a manejar moto con seguridad. Cursos para principiantes y avanzados. Practicá en nuestra pista exclusiva o en tránsito real.',
      keywords: 'clases de manejo moto, aprender a manejar moto, curso de moto, examen de moto, licencia de conducir moto, practica de moto',
      ogUrl: 'https://www.miautoescuela.es/clases-moto'
    });
  }

}
