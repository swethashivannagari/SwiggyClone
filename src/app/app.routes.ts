import { Routes } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { OrdersComponent } from './orders/orders.component';
import { CartComponent } from './cart/cart.component';
import { FavouriteComponent } from './favourite/favourite.component';

export const routes: Routes = [
    
    {path:"",component:HeroComponent},
    {path:'orders',component:OrdersComponent},
    {path:'cart',component:CartComponent},
    {path:"favorite",component:FavouriteComponent}
];
