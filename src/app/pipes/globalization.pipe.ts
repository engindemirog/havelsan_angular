import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'globalization'
})
export class GlobalizationPipe implements PipeTransform {

  //[0] = tr,eng [1] = word
  transform(value: string, ...args: any[]): any {
    if(args[0]==="eng"){
      return args[1].english;
    }else{
      return args[1].turkish;
    }

  }

}
