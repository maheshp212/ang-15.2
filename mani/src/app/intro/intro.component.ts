import { Component } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent {

  cardsData = 
    {
      headging : 'Three 90 Batches Starting this weekend',
      viewAll: 'https://www.geeksforgeeks.org/courses/category/all?courseType=all&courseFeeType=all',
      cards: [
        {
          id:1,
          bgColor:'blue',
          title:'DSA Dev',
          subTitle:'Development',
          intrested: '500',
          rating: 4.4,
          fullName: "DSA to Developoment complete Guide",
          type:'Begginer',
          seatsLeft: 3
        },
        {
          id:2,
          bgColor:'green',
          title:'ML / AI',
          subTitle:'Development',
          intrested: '3K',
          rating: 4.6,
          fullName: "ML / AI its the new world",
          type:'Advanced',
          seatsLeft: 35
        },
        {
          id:3,
          bgColor:'yellow',
          title:'Java',
          subTitle:'Development',
          intrested: '1.5L',
          rating: 3.4,
          fullName: "Java hell to heaven",
          type:'Intermediate',
          seatsLeft: 0
        },
        {
          id:4,
          bgColor:'pink',
          title:',net',
          subTitle:'Development',
          intrested: '2200',
          rating: 4.9,
          fullName: ".Net its a MVC",
          type:'Begginer',
          seatsLeft: 0
        }

      ]
    }

    selectedCouse(id:any){

        console.log(' im id from intro component' + id);
    } 

}
