import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-contact-product',
  standalone: true,
  imports: [],
  templateUrl: './contact-product.component.html',
  styleUrl: './contact-product.component.scss'
})
export class ContactProductComponent implements OnChanges {
  
  @Input() title: string = '';
  @Input() type: string = '';
  whatsappLink: string = '';
  ngOnChanges(): void {
    if (this.title) {
      const phoneNumber = '+56950074572'; // Reemplaza con el número de WhatsApp del vendedor
      const message = `Hola, estoy interesado en el producto: ${this.type}, ${this.title}`;
      this.whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    }
  }
  
  
}
