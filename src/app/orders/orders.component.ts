import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { CommonModule } from '@angular/common';
import { CartserviceService } from '../cartservice.service';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent implements OnInit,AfterViewInit{
 restuarantDetails:any='';
 restuanrantName:any='';
 singleRestaurant:boolean=true;

 menuItems= [{ name: 'Truffle', price: 140, image: '../../assets/truffle.avif',quantity:0 },
 { name: 'Brownie', price: 120, image: '../../assets/brownie.avif',quantity:0 },
 { name: 'Chicken Biryani', price: 180, image: '../../assets/chickenbiryani.avif',quantity:0 },
 { name: 'Delight Pizza', price: 250, image: '../../assets/MoMo.avif',quantity:0 },
 { name: 'Salad', price: 100, image: '../../assets/salad.avif',quantity:0 },
 {name:'Chicken Roll',price:199,image:'../../assets/chickenroll.avif',quantity:0}
];

 constructor(private restuarantService:RestaurantService,private cartservice:CartserviceService 
 ){}
 ngOnInit(): void {
     this.restuarantDetails=this.restuarantService.getRestaurantInfo()||'Taj Mahal';
     //for fooditems static resturant tajMahal

     //load Quantiites 
     this.loadQuantites();
 }

 // left and right buttons on top picks
 ngAfterViewInit(): void {
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const container = document.getElementById('container');

  if (prevBtn && container) {
    prevBtn.addEventListener('click', () => {
      container.scrollBy({ left: -460, behavior: 'smooth' });
    });
  }

  if (nextBtn && container) {
    nextBtn.addEventListener('click', () => {
      container.scrollBy({ left: 460, behavior: 'smooth' });
    });
  }

  
}

//add to cart

addToCart(item:any){
 
  this.singleRestaurant=this.cartservice.addtoCart(item,this.restuarantDetails.title);
  this.loadQuantites(); 
}

removeFromCart(item:any){
  this.cartservice.removeFromCart(item);
  this.loadQuantites();
}

//load quantites of menu
loadQuantites(){
  this.menuItems.forEach(item=>{
    item.quantity=this.cartservice.getQuantity(item,this.restuarantDetails.title);
  })
  
}


}
