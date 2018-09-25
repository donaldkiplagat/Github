import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAgo'
})
export class TimeAgoPipe implements PipeTransform {

    transform(value: any): number {
       let today:Date = new Date(); //get current date and time
       let todayWithNoTime:any = new Date(today.getFullYear(),today.getMonth(),today.getDate())
       console.log(todayWithNoTime);
       return todayWithNoTime;
     }
}
