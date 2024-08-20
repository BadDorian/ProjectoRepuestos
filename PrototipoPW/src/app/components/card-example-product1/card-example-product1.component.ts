import { Component, Input } from '@angular/core';
import { ContactProductComponent } from '../contact-product/contact-product.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-example-product1',
  standalone: true,
  imports: [CommonModule, ContactProductComponent],
  templateUrl: './card-example-product1.component.html',
  styleUrl: './card-example-product1.component.scss'
})
export class CardExampleProduct1Component {
  @Input() imgSrc!: string;
  @Input() title!:string;
  @Input() description!: string;
  @Input() type!: string;
}
