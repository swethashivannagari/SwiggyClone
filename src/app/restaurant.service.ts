import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  restaurants=[
    {
      banner:"20% OFF UPTO ₹50",
      img:"../../assets/belgianWaffle.avif",
      title:"The Belgain Waffle Co.",
      rating:"4.6",
      time:"45-50 mins",
      food:"Waffle, Desserts, Ice Cream, Beverages",
      address:" Mohan Nagar",
    },
    {
      banner:"₹151 OFF ABOVE ₹349",
      img:"../../assets/AdilHotel.avif",
      title:"Adil Hotel",
      rating:"4.4",
      time:"45-50 mins",
      food:"North Indian, Biryani, Tandoori,Dosa,Idly",
      address:" Chhindwara Locality"
    },
    {
      banner:"FREE ITEM",
      img:"../../assets/HotelSaiNath.avif",
      title:"Hotel Sai Nath & Sai Restaurant",
      rating:"4.3",
      time:"45-50 mins",
      food:"North Indian, South Indian,Dosa Chinese..",
       address:" Chhindwara Locality"
    },
    {
      banner:"₹50 OFF ABOVE ₹249",
      img:"../../assets/BakeryWorld.avif",
      title:"Bakery World",
      rating:"4.2",
      time:"45-50 mins",
      food:"Bakery, Ice Cream, Snacks, Beverages",
      address:" Parasia Road",
    },
    {
      banner:"",
      img:"../../assets/PizzaBox.avif",
      title:"Pizza Box",
      rating:"4.3",
      food:"Pizzas, Burgers, Beverages",
      address:" Chhindwara Locality",
      time:"45-50 mins",
      
    },
    {
      banner:"₹50 OFF ABOVE ₹199",
      img:"../../assets/RaajBagh.avif",
      title:"Raajbagh Restaurant",
      rating:"3.7",
      food:"North Indian,Dosa,Poori,Beverages",
      address:" Chhindwara Locality",
      time:"65-70 mins",
      
    },
  
    {
      banner:"50% OFF UPTO ₹100",
      img:"../../assets/SanjukaDhaba.avif",
      title:"Sanju Ka Dhaba",
      rating:"4.5",
      time:"50-55 mins",
      food:"North Indian,Biryani,Chinese",
      address:"Prasia Road"

    },
    {
      banner:"",
      img:"../../assets/Accord.avif",
      title:"Accord International",
      rating:"4.4",
      time:"65-70 mins",
      food:"North Indian,Biryani,Chinese",
      address:"VIshnu Nagar"

    },
    {
      banner:"₹50 OFF ABOVE ₹199",
      img:"../../assets/RaajBagh.avif",
      title:"Raajbagh Restaurant",
      rating:"3.7",
      food:"North Indian, South Indian,Beverages",
      address:" Chhindwara Locality",
      time:"65-70 mins",
      
    },
    {
      banner:"",
      img:"../../assets/IndianCoffee.avif",
      title:"Indian Coffee House",
      rating:"4.5",
      time:"65-70 mins",
      food:"North Indian,SouthIndian,Chinese",
      address:"Khajiri Chowk"

    },
    {
      banner:"",
      img:"../../assets/MagicMomo.avif",
      title:"Magic Momo",
      rating:"3.8",
      time:"55-60 mins",
      food:"Momo,Chinese",
      address:"Prasia Road"

    },
    {
      banner:"FREE ITEM",
      img:"../../assets/Satkar.avif",
      title:"Satkar Restuarant",
      rating:"4.3",
      time:"55-60 mins",
      food:"North Indian,SouthIndian,Chinese",
      address:"Khajiri Chowk"

    },
    
    
  ]

  getRestaurants() {
    return this.restaurants;
  }

  
  getTopRestaurants(limit: number) {
    return this.restaurants
      .sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating)) 
      .slice(0, limit);
  }

  private restaurantInfo:any;
  constructor() { }

  setRestaurantInfo(details:any){
    this.restaurantInfo=details;
    console.log(details);
  }

  getRestaurantInfo(){
    if (!this.restaurantInfo.title) {
      this.restaurantInfo = { ...this.restaurantInfo, title: "Taj Mahal" };
    }
    
    return this.restaurantInfo;
  }

  getRestuarantsByName(name:string[]){
    return this.restaurants.filter(
      restaurant=>name.includes(restaurant.title));
  }
}
