import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl='https://6729017c6d5fa4901b6bd112.mockapi.io/orders';
  constructor(private http:HttpClient) { }

  placeOrder(orderData:any):Observable<any>{
    
      return this.http.post(this.apiUrl, orderData).pipe(
        catchError(error => {
          console.error('Placing order Error:', error);
          return throwError(() => new Error('order failed; please try again later.'));
        })
      );
    
  }
  
}
