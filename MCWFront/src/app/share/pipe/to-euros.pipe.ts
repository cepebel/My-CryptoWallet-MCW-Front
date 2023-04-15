import { Pipe, PipeTransform } from '@angular/core';
import { Icoin, Ijoin } from '../models/coin.model';
import { CoinService } from '../services/coin.service';
@Pipe({
  name: 'toEuros'
})
export class ToEurosPipe implements PipeTransform {
  coinValue: number = 0
  constructor(private coinServices: CoinService){}

  transform(value: string, args: number): number {
    
    this.coinServices.getCoinById(value).subscribe(res=>{
      this.coinValue = res.value || 0
    })
    return this.coinValue*args;
  }

}

