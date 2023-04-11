import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Icoin } from '../models/coin.model';

const COIN_API = 'http://localhost:3142/api/coins/';

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
}
