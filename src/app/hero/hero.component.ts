import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef ,OnInit,ViewChild} from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { Router } from '@angular/router';
import { SearchService } from '../search.service';
import { FavouriteService } from '../favourite.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements AfterViewInit,OnInit {

  searchTerm='';
  filter=false;
  foodItems=[
    {
      img:"../../assets/sandwich.avif",
      name:"World Snadwich Day"
    },
    {
      img:"../../assets/biryani.avif",
      name:"Biryani"
    },
    {
      img:"../../assets/burgers.avif",
      name:"burgers"
    },
    {
      img:"../../assets/pizza.avif",
      name:"Pizzas"
    },
    {
      img:"../../assets/cakes.avif",
      name:"cakes"
    },
    {
      img:"../../assets/dosa.avif",
      name:"Dosas"
    },
    
    {
      img:"../../assets/south indian.avif",
      name:"South Indian"
    },
    {
      img:"../../assets/shawarma.avif",
      name:"Shawarmas"
    },
    {
      img:"../../assets/paratha.avif",
      name:"Paratha"
    },
    {
      img:"../../assets/pavbhaji.avif",
      name:"Pav Bhaji"
    },
    {
      img:"../../assets/pastry.avif",
      name:"Pastry"
    },
    {
      img:"../../assets/idli.avif",
      name:"Idli"
    },
    
  ]
  
  topRestaurants:any[]=[];
  restaurants:any[]=[];
  filteredRestaurants:any[]=[];
  
  constructor(private restuarantService:RestaurantService,
    private router:Router,private searchService:SearchService,
  private favouriteService:FavouriteService){}

  ngOnInit():void{
      this.restaurants=this.restuarantService.getRestaurants();
      this.topRestaurants=this.restuarantService.getTopRestaurants(6);
      this.searchService.updateHome.subscribe((term)=>{
        this.searchTerm=term;
        this.applyFilter();
      })

  }


  cities=["Bangalore","Pune","Mumbai",
    "Delhi","Hyderabad","Kolkata","Chennai",
    "Chandigarh","Ahmedabad","Jaipur","Nagpur"]

  cusines=[
    "Chinese","South Indian","Indian","Kerala",
    "Korean","North Indian","Seafood","Bengali",
    "Pujabi","Italian","Andhra"
  ]


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
  
    const restroPrevBtn = document.getElementById('restro-prevBtn');
    const restroNextBtn = document.getElementById('restro-nextBtn');
    const restrocontainer = document.getElementById('restaurant-container');

    if (restroPrevBtn && restrocontainer) {
      restroPrevBtn.addEventListener('click', () => {
        restrocontainer.scrollBy({ left: -460, behavior: 'smooth' });
      });
    }

    if (restroNextBtn && restrocontainer) {
      restroNextBtn.addEventListener('click', () => {
        restrocontainer.scrollBy({ left: 460, behavior: 'smooth' });
      });
    }
  }

  //toggleing favourites
  toggleFavourite(name:string){
    console.log(this.favouriteService.isFavorite(name));
    if(this.favouriteService.isFavorite(name)){
      this.favouriteService.removeFavourite(name);
    }
    else{
      this.favouriteService.addFavourite(name);
    }
  }

  isFavourite(name:string){
    //console.log("isfav",name)
    return this.favouriteService.isFavorite(name);

  }

  //Impleting search logic for restuarants 
  applyFilter() {
    // Ensure searchTerm is a string and check if it’s empty
    const term = this.searchTerm ? this.searchTerm.trim().toLowerCase() : '';
    console.log(term);
    if (term === '') {
      this.filteredRestaurants = this.restaurants;
    } else {
      this.filter=true;
      this.filteredRestaurants = this.restaurants.filter((restaurant) =>
        restaurant.title.toLowerCase().includes(term) ||
        restaurant.food.toLowerCase().includes(term)
      );
    }
    console.log('restros',this.filteredRestaurants)
  }

  //navigating to orders page

  navigateToOrders(restaurant:any){
    this.restuarantService.setRestaurantInfo(restaurant);
    this.router.navigate(['/orders']);
  }
}
