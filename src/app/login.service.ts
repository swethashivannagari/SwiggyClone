import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl="https://6729017c6d5fa4901b6bd112.mockapi.io/users";

  constructor(private http:HttpClient) { }

  login(User:any):Observable<any>{
    return this.http.get<any[]>(this.apiUrl).pipe(
     map(users=>{
      const user=users.find(user=>user.phoneNumber===User.phoneNumber);
     
      return user;
     }),
     catchError(()=>of(false))
    )
  }

  getLoggedinData(){
    const userData= localStorage.getItem('user');
    //console.log(userData);
    return userData? JSON.parse(userData):null;
  }
}
