import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {

  private favourites:Set<string>=new Set();


  constructor() {
    const savedFavourites=localStorage.getItem('favourites');
    if(savedFavourites){
      this.favourites=new Set(JSON.parse(savedFavourites));
    }
   }

   addFavourite(name:string){
    this.favourites.add(name);
   this.updateLocalStorage();
   console.log("add",this.favourites);
   }

   removeFavourite(name:string){
    this.favourites.delete(name);
    this.updateLocalStorage();
    localStorage.setItem("name","swetha");
    console.log("remove",this.favourites);
   }

   isFavorite(name:string){
    return this.favourites.has(name);
   }

   getFavourites():string[]{
    return Array.from(this.favourites);
   }

   updateLocalStorage(){
    localStorage.setItem('favourites',JSON.stringify(Array.from(this.favourites)));
   }
  
}
