import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-why-us',
  templateUrl: './why-us.component.html',
  styleUrls: ['./why-us.component.scss']
})
export class WhyUsComponent implements OnInit {
  @ViewChild('statsGrid', { static: false }) statsGrid!: ElementRef;

  stats = [
    { number: 10, label: 'Años de Experiencia', suffix: '+' },
    { number: 5000, label: 'Alumnos Graduados', suffix: '+' },
    { number: 98, label: 'Tasa de Aprobación', suffix: '%' },
    { number: 4, label: 'Zonas de Cobertura', suffix: '' }
  ];

  displayNumbers = [0, 0, 0, 0];
  hasAnimated = false;

  constructor() { }

  ngOnInit(): void {
    this.observeStatsVisibility();
  }

  observeStatsVisibility(): void {
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !this.hasAnimated) {
            this.animateCounters();
            this.hasAnimated = true;
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.5 });

      if (this.statsGrid) {
        setTimeout(() => {
          observer.observe(this.statsGrid.nativeElement);
        }, 100);
      }
    }
  }

  animateCounters(): void {
    this.stats.forEach((stat, index) => {
      const increment = Math.ceil(stat.number / 50);
      let current = 0;

      const interval = setInterval(() => {
        current += increment;
        if (current >= stat.number) {
          this.displayNumbers[index] = stat.number;
          clearInterval(interval);
        } else {
          this.displayNumbers[index] = current;
        }
      }, 30);
    });
  }

}
