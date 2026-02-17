import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {
  locations = [
    {
      name: 'CABA',
      city: 'Caballito',
      address: 'Rosario 841',
      phone: '11 5263-0411',
      hours: 'Lun-Vie: 8:00 - 21:00',
      coords: { lat: -34.6037, lng: -58.3816 }
    },
    {
      name: 'Zona Norte',
      city: 'Olivos',
      address: 'Maipú 3684',
      phone: '11 5263-0411',
      hours: 'Lun-Vie: 8:00 - 21:00',
      coords: { lat: -34.4939, lng: -58.5023 }
    },
    {
      name: 'Zona Oeste',
      city: 'Ramos Mejía',
      address: 'Rosales 250',
      phone: '11 5263-0411',
      hours: 'Lun-Vie: 8:00 - 21:00',
      coords: { lat: -34.6553, lng: -58.6228 }
    },
    {
      name: 'Zona Sur',
      city: 'Avellaneda',
      address: 'Pastor Obligado 75',
      phone: '11 5263-0411',
      hours: 'Lun-Vie: 8:00 - 21:00',
      coords: { lat: -34.7580, lng: -58.3624 }
    }
  ];

  selectedLocation: number | null = null;

  constructor() { }

  ngOnInit(): void {
  }

  selectLocation(index: number): void {
    this.selectedLocation = this.selectedLocation === index ? null : index;
  }

  openGoogleMaps(location: any): void {
    const url = `https://www.google.com/maps/search/${encodeURIComponent(location.address + ' ' + location.city)}`;
    window.open(url, '_blank');
  }

}
