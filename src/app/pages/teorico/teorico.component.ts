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
      title: 'Material Teórico',
      description: 'Repasá las señales de tránsito y normas de seguridad vial. Material de estudio actualizado para aprobar el examen teórico de licencia de conducir.',
      keywords: 'señales de transito, examen teorico manejo, normas de transito, seguridad vial, curso teorico manejo, licencia de conducir teorico',
      ogUrl: 'https://www.miautoescuela.es/teorico'
    });
  }

}
