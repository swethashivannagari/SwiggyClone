import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private updateHomeSubject=new BehaviorSubject<any>(null);
  updateHome=this.updateHomeSubject.asObservable();

  constructor() { }

  updateContent(data:any){
    this.updateHomeSubject.next(data);
  }
}
