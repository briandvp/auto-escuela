import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {
  locations = [

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
