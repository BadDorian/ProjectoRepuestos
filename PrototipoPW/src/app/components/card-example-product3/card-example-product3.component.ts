import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ContactProductComponent } from '../contact-product/contact-product.component';

@Component({
  selector: 'app-card-example-product3',
  standalone: true,
  imports: [CommonModule, ContactProductComponent],
  templateUrl: './card-example-product3.component.html',
  styleUrl: './card-example-product3.component.scss'
})
export class CardExampleProduct3Component {
  @Input() imgSrc!: string;
  @Input() title!:string;
  @Input() description!: string;
  @Input() type!: string;
}
