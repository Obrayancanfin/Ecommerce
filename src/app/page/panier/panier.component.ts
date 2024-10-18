import { Component } from '@angular/core';
import { ArticleComponent } from "../../component/article/article.component";

@Component({
  selector: 'app-panier',
  standalone: true,
  imports: [ArticleComponent],
  templateUrl: './panier.component.html',
  styleUrl: './panier.component.css'
})
export class PanierComponent {
  
}
