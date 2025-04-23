import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { Product } from '../models/product.class';
import { CommonModule } from '@angular/common';
import { KoszykComponent } from './koszyk/koszyk.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductComponent, CommonModule, KoszykComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'taiib_zadanie';

  products: Product[] = 
  [
    new Product("Jajka", 30, new Date(), false, 0),
    new Product("Mleko", 20, new Date(), false, 0),
    new Product("Woda", 12, new Date(), true, 0),
    new Product("Mięso", 23, new Date(), false, 0),
    new Product("Chleb", 13, new Date(), false, 0)
  ];

  koszyk = 0;
  wyswietlProdukty = true;

  onDodajDoKoszyka(event: Product):void
  {
    this.koszyk += event.cena;
  }

  wyczyscKoszyk(): void
  {
    this.koszyk = 0;
    this.products.forEach(pr => { pr.sztuki = 0; });
  }
}
