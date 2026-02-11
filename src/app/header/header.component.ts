import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-header',
    template: `
  <header>
    <h1><a routerLink="/"><img src="assets/img/logo.png" alt="Bethany's Pie Shop Logo" i18n-alt="business logo|hero image for site@@headerLogo" /></a></h1>
    <nav>
      <ul>
        <div>
          <li><a routerLink="/" i18n="menu item|shop menu item@@headerShop">Shop</a></li>
          <li><a routerLink="/cafe" i18n="menu item|cafe menu item@@headerCafe">Cafe</a></li>
        </div>
        <li><a routerLink="/cart"><img src="assets/img/cart-icon.png" alt="shopping cart" i18n-alt="menu item|cart menu item@@headerCart"/></a></li>
      </ul>
    </nav>
  </header>
  `,
    styleUrls: ['./header.component.scss'],
    standalone: true,
    imports: [RouterLink]
})
export class HeaderComponent {

}
