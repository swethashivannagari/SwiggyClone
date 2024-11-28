import { Component } from '@angular/core';
import { CartserviceService } from '../cartservice.service';
import { CommonModule } from '@angular/common';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  cart:any;
  placeOrder=true;
  singleRestuarant:boolean=true;
  restuarantName:string|null=null;
  totalPrice:number|null=null;
  address:string='';
  showOrderModal=false;
  orderFailed:boolean|null=null;

  constructor(private cartservice:CartserviceService,
    private loginservice:LoginService,
    private orderservice:OrderService,
    private router:Router){}
  ngOnInit(){
    this.cart=this.cartservice.getCartItems();
    this.restuarantName=this.cartservice.getRestaurantName();
    console.log(this.cart)
   
  }

  //add to cart

addToCart(item:any){
 console.log("item",item)
  this.singleRestuarant=this.cartservice.addtoCart(item,this.restuarantName);
  this.cart = this.cartservice.getCartItems();
  console.log(this.cart);
}

removeFromCart(item:any){
  this.cartservice.removeFromCart(item);
  this.cart = this.cartservice.getCartItems();
}

calculateTotal(){
  return this.cartservice.getTotalPrice();
}

checkOut(){
  
  const loggedin=this.loginservice.getLoggedinData();
  if(!loggedin){
    this.placeOrder=false;
  }
  else{
    this.showOrderModal=true;
  }
}

onOrderSubmit(){

  if(this.address&&this.cart.length>0){
    const order={
      user:this.loginservice.getLoggedinData(),
      cart:{...this.cart,restaurant:this.restuarantName},
      address:this.address,
      date:new Date()
    };
  
  this.orderservice.placeOrder(order).subscribe(
    (response)=>{
      console.log("Order Placed Successfully:",response);
      alert("Order Placed Successfully");
      this.showOrderModal=false;
      this.cartservice.resetCart();
      this.orderFailed=false;
      localStorage.removeItem('cartItems');
      localStorage.removeItem('currentRestaurant');
      window.location.reload();
    },
    (error)=>{
      console.error('error placing order');
      this.orderFailed=true;
    }
  )
  }
}

closeModal() {
  this.showOrderModal = false;
}


}





