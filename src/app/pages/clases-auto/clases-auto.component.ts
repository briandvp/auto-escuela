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
      title: 'Clases de Auto',
      description: 'Clases de manejo de auto personalizadas. Instructores pacientes y vehículos doble comando. Preparate para el examen práctico en CABA y GBA.',
      keywords: 'clases de manejo auto, aprender a manejar auto, curso de manejo, examen de manejo, licencia de conducir auto, practica de manejo',
      ogUrl: 'https://www.miautoescuela.es/clases-auto'
    });
  }

}
