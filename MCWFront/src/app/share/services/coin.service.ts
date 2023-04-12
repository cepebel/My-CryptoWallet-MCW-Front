import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Icoin } from '../models/coin.model';

const COIN_API = 'http://localhost:3142/api/coins/';
const USER_API = 'http://localhost:1342/api/users/';

@Injectable({
  providedIn: 'root'
})

export class CoinService {

  constructor(private http: HttpClient) { }

  getAllCoins():Observable<Icoin[]>{
    return this.http.get<Icoin[]>(COIN_API+'all') 
  }
  buyCoin(userId: string, coinId: string, amount: number):Observable<string>{
    return this.http.post<string>(COIN_API+'update',{userId:userId, coinId:coinId, amount:amount})
  }
  getUserCoins(userId: string):Observable<Icoin[]>{
    console.log('A por mis monedas!')
    return this.http.get<Icoin[]>(COIN_API+'get/coins/user/'+userId)
  }
}
