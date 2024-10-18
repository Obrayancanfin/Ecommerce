import { Routes } from '@angular/router';
import { PanierComponent } from './page/panier/panier.component';
import { AccueilComponent } from './page/accueil/accueil.component';
import { CatalogueComponent } from './component/catalogue/catalogue.component';

export const routes: Routes = [
    {path:"Accueil",component:AccueilComponent},
    {path:"Catalogue",component:CatalogueComponent},
    {path:"Panier",component:PanierComponent}
];
