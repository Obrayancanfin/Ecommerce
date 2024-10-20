import { Routes } from '@angular/router';
import { PanierComponent } from './page/panier/panier.component';
import { AccueilComponent } from './page/accueil/accueil.component';
import { CatalogueComponent } from './component/catalogue/catalogue.component';
import { LoginComponent } from './page/login/login.component';

export const routes: Routes = [
    {path:'',component:AccueilComponent},
    {path: 'Login', component: LoginComponent },
    {path:"Accueil",component:AccueilComponent},
    {path:"Catalogue",component:CatalogueComponent},
    {path:"Panier",component:PanierComponent}
];
