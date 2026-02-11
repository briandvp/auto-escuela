import { Component } from '@angular/core';

@Component({
  selector: 'app-coverage-map',
  templateUrl: './coverage-map.component.html',
  styleUrls: ['./coverage-map.component.scss']
})
export class CoverageMapComponent {
  expandedZone: string | null = null;

  zones = {
    caba: [
      'Agronomía', 'Almagro', 'Balvanera', 'Barracas', 'Belgrano', 'Boedo',
      'Caballito', 'Chacarita', 'Coghlan', 'Colegiales', 'Constitución', 'Flores',
      'Floresta', 'La Boca', 'La Paternal', 'Liniers', 'Mataderos', 'Monserrat',
      'Núñez', 'Palermo', 'Recoleta', 'Retiro', 'Saavedra', 'San Telmo',
      'Villa Crespo', 'Villa Devoto', 'Villa Lugano', 'Villa Urquiza'
    ],
    norte: [
      'San Isidro', 'Vicente López', 'San Martín', 'San Fernando', 'Tigre',
      'El Talar', 'Don Torcuato', 'Martínez', 'Boulogne', 'Munro',
      'Villa Ballester', 'Santos Lugares', 'Caseros', 'El Palomar'
    ],
    oeste: [
      'Morón', 'Tres de Febrero', 'La Matanza', 'Merlo', 'Moreno',
      'San Miguel', 'Bella Vista', 'Hurlingham', 'Ituzaingó', 'Haedo',
      'Ramos Mejía', 'Ciudadela', 'San Justo', 'Tablada'
    ],
    sur: [
      'Avellaneda', 'Quilmes', 'Lanús', 'Florencio Varela', 'Berazategui',
      'Lomas de Zamora', 'Banfield', 'Bernal', 'Burzaco', 'Ezeiza',
      'Monte Grande', 'Wilde', 'San Francisco Solano'
    ]
  };

  toggleZone(zone: string): void {
    this.expandedZone = this.expandedZone === zone ? null : zone;
  }
}
