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
    this.seoService.updateSeoData(
      'Inicio',
      'Autoescuela Silver - 10 años formando conductores responsables. Clases de manejo de auto y moto en Capital Federal, Zona Norte, Oeste y Sur. Servicio puerta a puerta.',
      'autoescuela, escuela de manejo, clases de manejo, licencia de conducir, Buenos Aires, CABA, moto, auto, aprender a manejar'
    );
  }

}
