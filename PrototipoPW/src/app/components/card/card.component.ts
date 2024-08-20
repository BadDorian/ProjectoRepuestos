import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ContactProductComponent } from '../contact-product/contact-product.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, ContactProductComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() imgSrc!: string;
  @Input() title!:string;
  @Input() description!: string;
  
}
