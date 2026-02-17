import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services-section',
  templateUrl: './services-section.component.html',
  styleUrls: ['./services-section.component.scss']
})
export class ServicesSectionComponent implements OnInit {
  services = [
    {
      icon: 'fas fa-calendar-week',
      title: 'Clases los 7 días',
      description: 'Amplia disponibilidad horaria para adaptarnos a tu vida, solo indica el día y la hora.',
      detail: 'Flexibilidad total en horarios adaptada a tus necesidades'
    },
    {
      icon: 'fas fa-home',
      title: 'Vamos a Domicilio',
      description: 'Pasamos a buscarte por tu hogar, trabajo o gimnasio para brindarte la clase.',
      detail: 'Comodidad de aprender desde donde prefieras'
    },
    {
      icon: 'fas fa-car-alt',
      title: 'Alquiler para Examen',
      description: 'Te llevamos a rendir o te esperamos en la pista a la hora indicada.',
      detail: 'Vehículo listo para tu examen de manejo'
    },
    {
      icon: 'fas fa-award',
      title: 'Certificación',
      description: 'Adheridos a la Red de Autoescuelas Argentinas, garantía de calidad y seguridad.',
      detail: 'Garantía de calidad y profesionalismo reconocido'
    }
  ];

  expandedService: number | null = null;

  constructor() { }

  ngOnInit(): void {
  }

  toggleServiceDetail(index: number): void {
    this.expandedService = this.expandedService === index ? null : index;
  }

}
