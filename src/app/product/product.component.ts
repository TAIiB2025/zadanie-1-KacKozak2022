import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product.class';

@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent 
{
  @Input() product!: Product;
  @Output() dodajDoKoszyka = new EventEmitter<Product>();

  onDodajDoKoszyka(): void
  {
    this.dodajDoKoszyka.emit(this.product);
    this.product.sztuki++;
  }
}
