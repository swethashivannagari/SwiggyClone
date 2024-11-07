import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { CommonModule } from '@angular/common';
import { SignupComponent } from '../signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartserviceService } from '../cartservice.service';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule,LoginComponent,CommonModule,SignupComponent,ReactiveFormsModule,FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  isLoggedIn=false;
  showLogout=false;
  searchText:string='';
  username='';
  showLogin:boolean=false;
 showSignup:boolean=false;
 cartQuantity=0;

 constructor(private cartservice:CartserviceService,private searchService:SearchService){}

  //if loggin set username
  ngOnInit(){
    const user = localStorage.getItem('user');
  if (user) {
    const parsedUser = JSON.parse(user);
    this.isLoggedIn = true;
    this.username = parsedUser.name;  
  } else {
    this.isLoggedIn = false;
    this.username = '';
  }
  const loginState = localStorage.getItem('showLogin');
  this.showLogin = loginState === 'true';
  
  this.cartservice.cartQuantity.subscribe(quantity=>{
    this.cartQuantity=quantity;
    console.log("quantity",quantity);
  })
  }

  //to search
  onSearch(){
    this.searchService.updateContent(this.searchText);
  }



  //for logout button
  toggleLogout(){
    this.showLogout=!this.showLogout;
  }

  //logOut Logic
  logout(){
    localStorage.removeItem('user');
    this.isLoggedIn=false;
    this.username='';
    this.showLogout=false;
  }
 
 onCloseSignup(){
  this.showSignup=false;
 }
 onCloseLogin(){
  this.showLogin=false;
  localStorage.setItem('showLogin', 'false');
 }
 openLogin(){
  this.showLogin=true;
  this.showSignup=false;
  localStorage.setItem('showLogin', 'true');
 }
 openSignup(){
  this.showLogin=false;
  this.showSignup=true;
  console.log("sigup");
 }

 
}
