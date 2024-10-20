import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoginComponent } from '../../page/login/login.component';
import { interval } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  login =inject(LoginComponent)
  isLoggedIn:boolean=this.login.isLogged;
  roleUser:boolean=(this.login.role=="admin")?true:false ;
  role:string =this.login.role

}
