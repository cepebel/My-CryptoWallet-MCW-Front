import { Pipe, PipeTransform } from '@angular/core';
import { Icoin } from '../models/coin.model';

@Pipe({
  name: 'filterName'
})
export class FilterNamePipe implements PipeTransform {

  transform(value: Icoin[], args: string ): Icoin[] {
    return value.filter(value=> 
      value.name.toLocaleLowerCase().indexOf(args.toLocaleLowerCase())>-1)
  }

}
