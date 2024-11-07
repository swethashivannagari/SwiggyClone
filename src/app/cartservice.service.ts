import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {

  private cartItems:{item:any}[]=[];
  
  private currentRestaurant: string | null = null;

  cartQuantitySubject=new BehaviorSubject<number>(0);
  cartQuantity=this.cartQuantitySubject.asObservable();

  constructor() { 
    this.loadCartFromStorage();
  }
//load cart from localstorage 
  private loadCartFromStorage() {
    const storedCart = localStorage.getItem('cartItems');
    const storedRestaurant = localStorage.getItem('currentRestaurant');

    if (storedCart) {
      this.cartItems = JSON.parse(storedCart);
    }
    if (storedRestaurant) {
      this.currentRestaurant = storedRestaurant;
    }

    this.updateCartQuantity();
  }

  private saveCartToStorage() {
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    localStorage.setItem('currentRestaurant', this.currentRestaurant ? this.currentRestaurant : '');
  }
  //Add Food to cart
  addtoCart(item:any,restaurant:string|null):boolean{
    
    //checking if order is from same restaurant
    if (this.currentRestaurant && this.currentRestaurant !== restaurant) {
      return false; 
    }

    const existingItem=this.cartItems.find(cartItem=>cartItem.item.name===item.name);
    console.log("exist",existingItem)
    console.log("item",item)
    if(existingItem){
      existingItem.item.quantity++;
      //existingItem.quantity++;
    }
    else{
      item.quantity++;
      this.cartItems.push({item});
    }
    this.updateCartQuantity();
    this.saveCartToStorage();
    this.currentRestaurant=restaurant;
    return true;
  }

  //Reduce the quantity
  removeFromCart(item:any){
    const existingItem=this.cartItems.find(cartItem=>cartItem.item.name===item.name);
    if(existingItem){
      if(existingItem.item.quantity>1){
        existingItem.item.quantity--;
        //existingItem.quantity--;
      }
      else{
        item.quantity=0;
        this.cartItems=this.cartItems.filter(cartItem=>cartItem.item.name!==item.name);
        
      }

    }
    if(this.cartItems.length===0){
      this.currentRestaurant=null;
    }
    this.updateCartQuantity();
    this.saveCartToStorage();
  }

  cartCount(){
    return this.cartItems.length;
  }


  private updateCartQuantity(){
    const totalQuantity=this.cartItems.length;
    this.cartQuantitySubject.next(totalQuantity);
  console.log("Updated cart quantity:", totalQuantity);
  }

  getRestaurantName(){
    return this.currentRestaurant;
  }

  getCartItems(){
    return this.cartItems;
  }

  resetCart(){
    console.log("resetting");
    this.cartItems=[];
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((totalPrice, cartItem) => {
      const item = cartItem.item;
      return totalPrice + item.price * item.quantity;
      
    }, 0);
  }

  
  getQuantity(item:any,restaurant:string){
    const cartItem=this.cartItems.find(cartItem=>cartItem.item.name===item.name &&
       this.currentRestaurant===restaurant)
    return cartItem?cartItem.item.quantity:0;
  }


 
}
