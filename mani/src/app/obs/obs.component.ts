import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { combineLatest, concat, filter, first, forkJoin, from, interval, map, of, Subscription, take, timer } from 'rxjs';

@Component({
  selector: 'app-obs',
  templateUrl: './obs.component.html',
  styleUrls: ['./obs.component.scss']
})
export class ObsComponent implements OnInit {

  constructor(private http:HttpClient){}
  ngOnInit(): void {
    
    // this.rxOf();
    // this.rxFrom()
    // this.rxPipe();
    // this.rxMap();
    // this.rxFilter();
    // this.rxFirst();
    // this.rxInterval();
    // this.rxTake();
    // this.rxForkJoin();
    // this.rxCombineLatest();
    this.rxConcat();
  } 

  rxOf(){
    // used to call in a sequential order
    let ob1 = of(1,2,3,4);
    let ob2 = of([1,2,3,4]);
    ob1.subscribe((data:any) =>{
      console.log(data);
    })
    console.log('###############')
    ob2.subscribe((data:any) =>{
      console.log(data);
    })
  
  }


  numbers = from([1,2,3,4]);
  numbers1 = from([
    {name:'mani', city: 'blr'},
    {name:'kiran', city: 'hyd'},
  ]);
  numbers2 = from('hello');
  numbers3 = from(new Promise((resolve, reject) => resolve('promise resolved hello')));
  numbers4 = from(fetch('https://gorest.co.in/public/v2/users'));

  rxFrom(){

    this.numbers.subscribe((data) =>{
      console.log('from ', data);
    })
    this.numbers1.subscribe((data) =>{
      console.log('from ', data);
    })
    this.numbers2.subscribe((data) =>{
      console.log('from ', data);
    })
    this.numbers3.subscribe((data) =>{
      console.log('from ', data);
    })

    // fetch(url, options)
    // .then(response => response.json())
    // .then(data => console.log(data))
    // .catch(error => console.error('Error:', error));
    this.numbers4.subscribe((data) =>{
      console.log('from ', data);



      let res = from(data.json());
      res.subscribe(result =>{

        console.log(result);
      })
    });

  }
  rxPipe(){

    from([1,2,3,4])
    .pipe( 
      map((x:number) => {return x*3}),
      filter((x:number) => {return x>8}),
    ).subscribe( (resp:any) =>{
      console.log("pipe - map, filter operatore", resp);
    })
  }


  rxMap(){
    // map is used for iteration
    let ob1 = of(1,2,3,4);
    let ob2 = of([1,2,3,4]);
    ob1.pipe(
      map( (val) => val*2)
    ).subscribe(resp =>{
      console.log('map ::' , resp);
    })


    ob2.pipe(
      map( (val) => { // this map is rxjs operator
        return val.map(value => value*3) // this map is array predefined method
      })
    ).subscribe(resp =>{
      console.log('map in array ::' , resp);
    })
  }

  rxFilter(){
    // map is used for iteration
    let ob1 = of(1,2,3,4);
    let ob2 = from([1,2,3,4]);
    ob1.pipe(
      filter( (val) => val>2)
    ).subscribe(resp =>{
      console.log('of + filter ::' , resp);
    })

    ob2.pipe(
      filter( (val) => val>2)
    ).subscribe(resp =>{
      console.log('from + filter ::' , resp);
    })
  }

  rxFirst(){
    let ob1 = of(1,2,3,4);
    let ob2 = of([1,2,3,4]);
    
    ob1.pipe(
      first()
    ).subscribe(resp =>{
      console.log('of + first ::' , resp);
    })
    
    ob2.pipe(
      first()
    ).subscribe(resp =>{
      console.log('of + first ::' , resp);
    })
  }


  source = interval(1000);
  subscribe:Subscription | any;
  rxInterval(){
    this.subscribe = this.source.subscribe(val => console.log(val));
  }

  take4:Subscription | any;

  rxTake(){
    this.take4 = this.source.pipe(take(4)).subscribe(val => console.log(val));
  }


  rxForkJoin(){
    const req1 = this.http.get('https://jsonplaceholder.typicode.com/users/1')
    const req2 = this.http.get('https://jsonplaceholder.typicode.com/users/2')
    const req3 = this.http.get('https://jsonplaceholder.typicode.com/users/3')
    const req4 = this.http.get('https://jsonplaceholder.typicode.com/users/4')


    forkJoin([req1, req2, req3, req4])
    .subscribe(
      (resp:any) =>{
        let request1 = resp[0]
        let request2 = resp[1]
        let request3 = resp[2]
        let request4 = resp[3]

        console.log(request1, request2, request3, request4)
      },
      (err) =>{
        console.log('some error came ');
      }
    )

    forkJoin([req1, req2, req3, req4])
    .subscribe(
      ([request1, request2,request3, request4]) =>{
        console.log(request1, request2, request3, request4)
      },
      (err) =>{
        console.log('some error came ');
      }
    )
  }


  rxCombineLatest(){
    const timer1 = timer(5000, 4000).pipe(take(4))
    const timer2 = timer(6000, 4000).pipe(take(4))
    const timer3 = timer(7000, 4000).pipe(take(4))

    combineLatest([timer1,timer2,timer3])
    .subscribe(
      (allVals) =>{
        console.log('latestvalue' + allVals)
      }
    )
  }


  rxConcat() {
    const timer1 = interval(500).pipe(take(10))
    const timer2 = interval(1000).pipe(take(5))
    const timer3 = interval(2000).pipe(take(10))

    concat(timer1, timer2, timer3)
    .subscribe((res) =>{
      console.log('concat' + res);
    })

  }
}
