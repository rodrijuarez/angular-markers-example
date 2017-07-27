import { Component } from '@angular/core';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lat: number = -34.6041145324707;
  lng: number = -58.38628005981445;

  markers = [];

  constructor(private productsService: ProductsService) {
    this.productsService.getProducts().subscribe(products => {
      this.markers = products.json();

      this.markers = this.markers.map(marker => ({
        ...marker,
        label: marker.descripcion,
        latitude: Number(marker.latitud),
        longitude: Number(marker.longitud)
      }));
    });
  }
}
