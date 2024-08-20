import { Component, OnInit } from '@angular/core';
import { CarouselComponent } from "../../components/carousel/carousel.component";
import { FloatingButtonComponent } from "../../components/floating-button/floating-button.component";
import { CardComponent } from "../../components/card/card.component";
import { CommonModule } from '@angular/common';
import { CardExampleProduct1Component } from "../../components/card-example-product1/card-example-product1.component";
import { CardExampleProduct3Component } from "../../components/card-example-product3/card-example-product3.component";
import { CardExampleProduct2Component } from "../../components/card-example-product2/card-example-product2.component";
export interface Product {
  id: number;
  type: string; // Esto te permitirá diferenciar entre tipos de productos
  title : string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselComponent, FloatingButtonComponent, CardComponent, CommonModule, CardExampleProduct1Component, CardExampleProduct3Component, CardExampleProduct2Component],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent implements OnInit {
  products = [
    {id: 1, type: 'Tipo 1', title: 'Producto 1', description: 'Descripcion Producto 1',image: 'https://www.latercera.com/resizer/zzN969HHW2CS93-Z5e1vDh23APY=/900x600/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/AWE3KAW6X5COJHCBT3GDT7D5AA.png' },
    {id: 2, type: 'Tipo 2', title: 'Producto 2', description: 'Descripcion Producto 2',image: 'https://www.latercera.com/resizer/zzN969HHW2CS93-Z5e1vDh23APY=/900x600/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/AWE3KAW6X5COJHCBT3GDT7D5AA.png' },
    {id: 3, type: 'Tipo 1', title: 'Producto 3', description: 'Descripcion Producto 3',image: 'https://www.latercera.com/resizer/zzN969HHW2CS93-Z5e1vDh23APY=/900x600/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/AWE3KAW6X5COJHCBT3GDT7D5AA.png' },
    {id: 4, type: 'Tipo 2', title: 'Producto 4', description: 'Descripcion Producto 4',image: 'https://www.latercera.com/resizer/zzN969HHW2CS93-Z5e1vDh23APY=/900x600/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/AWE3KAW6X5COJHCBT3GDT7D5AA.png' },
    {id: 5, type: 'Tipo 1', title: 'Producto 1', description: 'Descripcion Producto 1',image: 'https://www.latercera.com/resizer/zzN969HHW2CS93-Z5e1vDh23APY=/900x600/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/AWE3KAW6X5COJHCBT3GDT7D5AA.png' },
    {id: 6, type: 'Tipo 2', title: 'Producto 2', description: 'Descripcion Producto 2',image: 'https://www.latercera.com/resizer/zzN969HHW2CS93-Z5e1vDh23APY=/900x600/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/AWE3KAW6X5COJHCBT3GDT7D5AA.png' },
    {id: 7, type: 'Tipo 1', title: 'Producto 3', description: 'Descripcion Producto 3',image: 'https://www.latercera.com/resizer/zzN969HHW2CS93-Z5e1vDh23APY=/900x600/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/AWE3KAW6X5COJHCBT3GDT7D5AA.png' },
    {id: 8, type: 'Tipo 2', title: 'Producto 4', description: 'Descripcion Producto 4',image: 'https://www.latercera.com/resizer/zzN969HHW2CS93-Z5e1vDh23APY=/900x600/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/AWE3KAW6X5COJHCBT3GDT7D5AA.png' },
    {id: 9, type: 'Tipo 3', title: 'Producto 1', description: 'Descripcion Producto 1',image: 'https://www.latercera.com/resizer/zzN969HHW2CS93-Z5e1vDh23APY=/900x600/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/AWE3KAW6X5COJHCBT3GDT7D5AA.png' },
    {id: 10, type: 'Tipo 3', title: 'Producto 2', description: 'Descripcion Producto 2',image: 'https://www.latercera.com/resizer/zzN969HHW2CS93-Z5e1vDh23APY=/900x600/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/AWE3KAW6X5COJHCBT3GDT7D5AA.png' },
    {id: 11, type: 'Tipo 3', title: 'Producto 3', description: 'Descripcion Producto 3',image: 'https://www.latercera.com/resizer/zzN969HHW2CS93-Z5e1vDh23APY=/900x600/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/AWE3KAW6X5COJHCBT3GDT7D5AA.png' },
    {id: 12, type: 'Tipo 3', title: 'Producto 4', description: 'Descripcion Producto 4',image: 'https://www.latercera.com/resizer/zzN969HHW2CS93-Z5e1vDh23APY=/900x600/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/AWE3KAW6X5COJHCBT3GDT7D5AA.png' },
    // Añade más productos según sea necesario
  ];

  groupedProducts: { [key: string]: Product[] } = {};
  ngOnInit() {
    this.groupProductsByType();
  }

  groupProductsByType() {
    this.products.forEach(product => {
      if (!this.groupedProducts[product.type]) {
        this.groupedProducts[product.type] = [];
      }
      this.groupedProducts[product.type].push(product);
    });
  }
  getTypes(): string[] {
    return Object.keys(this.groupedProducts);
  }
}
