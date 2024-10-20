import { Component, EventEmitter, Injectable, OnInit, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';



type utilisateur = {
  username: string;
  password: string;
  role:string;
};

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

@Injectable({
  providedIn: 'root',
})

export class LoginComponent implements OnInit {
  
  ngOnInit(): void {
  }

  constructor(private router: Router) {} 
  ForParent: string="";
  username: string = '';
  password: string = '';
  role:string='user';
  isLogged:boolean=false;
  rootUser:utilisateur={"username":"root","password":"root","role":"admin"}
  testUser:utilisateur={"username":"test","password":"test","role":"user"}
  listuser:utilisateur[]=[this.rootUser,this.testUser];
  @Output() addItemEvent = new EventEmitter<string>();


  onSubmit() {
    
    if (this.username==""){
      alert("fill the username imput")
      return ;
    }
    if (this.password==""){
      alert("fill the password imput")
      return ;
    }
    
    for (let index = 0; index < this.listuser.length; index++) {
      const element = this.listuser[index];
      
      if (element.username == this.username){
        if(element.password == this.password){
          this.isLogged=true;
          this.router.navigateByUrl('/Accueil')
        }
      }
    }if (!this.isLogged){
      alert("Wrong username or password");
      return;
    }
  }
}