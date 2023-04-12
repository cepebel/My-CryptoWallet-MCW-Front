import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Iuser } from '../models/user.model';

const USER_API = 'http://localhost:3142/api/users/';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) { }

  updateUserBudget(userId: string, newBudget: number):Observable<number>{
    console.log('Estoy cambiando el budget a '+newBudget)
    return this.http.post<number>(USER_API+'update/budget',{userId: userId, budget: newBudget})
  }
 
}
