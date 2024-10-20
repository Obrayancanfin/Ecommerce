import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './component/navbar/navbar.component';
import { PanierComponent } from './page/panier/panier.component';
import { AccueilComponent } from './page/accueil/accueil.component';
import { FooterComponent } from "./component/footer/footer.component";
import { ArticleComponent } from "./component/article/article.component";
import { CatalogueComponent } from './component/catalogue/catalogue.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './page/login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, PanierComponent, AccueilComponent, FooterComponent, ArticleComponent,CatalogueComponent,FormsModule,LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'E-commerce';
  login =inject(LoginComponent)
  isLogged=this.login.isLogged
}

