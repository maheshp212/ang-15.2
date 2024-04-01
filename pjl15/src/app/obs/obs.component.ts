import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, combineLatest, concat, filter, first, forkJoin, from, interval, map, of, take, timer } from 'rxjs';

@Component({
  selector: 'app-obs',
  templateUrl: './obs.component.html',
  styleUrls: ['./obs.component.scss'],
})
export class ObsComponent implements OnInit, OnDestroy {
  constructor(private http:HttpClient){}
  ngOnInit(): void {
    // this.rxOf()
    // this.rxFrom();
    // this.rxPipe();
    // this.rxMap();
    // this.rxFilter();
    // this.rxFirst();
    // this.rxInterval();
    // this.rxTake();
    // this.rxForkJoin();
    // this.rxCombineLatest();
    this.rxConcat()
  }
  rxOf() {
    // used to call in a sequential order
    let observable = of(1, 2, 3, 4);
    let observable1 = of([1, 2, 3, 4]);

    observable.subscribe((data: any) => {
      console.log(data);
    });
    console.log('#########');
    observable1.subscribe((data: any) => {
      console.log(data);
    });
  }

  numbers = from([1, 2, 3, 4]);
  numbers1 = from([
    { name: 'bittu', city: 'blr' },
    { name: 'bittu', city: 'blr' },
  ]);
  numbers2 = from('hello');
  numbers3 = from(new Promise((resolve, reject) => resolve('hello')));
  numbers4 = from(fetch('https://jsonplaceholder.typicode.com/users/1'));

  rxFrom() {
    this.numbers.subscribe((data) => {
      console.log('from', data);
    });

    this.numbers1.subscribe((data) => {
      console.log('from', data);
    });

    this.numbers2.subscribe((data) => {
      console.log(data);
    });

    this.numbers3.subscribe((data) => {
      console.log(data);
    });

    this.numbers4.subscribe((data) => {
      let numbers5 = from(data.json());
      numbers5.subscribe((data) => {
        console.log(data);
      });
    });
  }








  rxPipe() {
    // [1,2,3,4]
    this.numbers
      .pipe(
        map(function (x: number) {
          return x * 2;
        }),
        filter(function (x: number) {
          return x > 2;
        })
      )
      .subscribe((data) => {
        console.log('pipe- map, filter operators', data);
      });
  }











  observable = of(1, 2, 3, 4);
  observable1 = of([1, 2, 3, 4], [5, 6, 7]);

  rxMap() {
    this.observable
      .pipe(
        map(function (value: number) {
          return value * 2;
        })
      )
      .subscribe((data) => {
        console.log('map in number', data);
      });

    this.observable1
      .pipe(
        map(function (array) {
          return array.map((value) => value * 2);
        })
      )
      .subscribe((data) => {
        console.log('map in array', data);
      });
  }

  rxFilter() {
    //   observable = of(1, 2, 3, 4);
    // numbers = from([1, 2, 3, 4]);
    this.observable.pipe(
      filter((value) => value > 2)
      )
    .subscribe((data) => {
      console.log('filter data in number', data);
    });


    this.numbers.pipe(
      filter((value) => value > 2)
      )
    .subscribe((data) => {
      console.log('filter data in numberbbb', data);
    });
  }

  rxFirst(){
    // observable = of(1, 2, 3, 4);
    // observable1 = of([1, 2, 3, 4]);

    this.observable.pipe(first()).subscribe((data) => {
      console.log('first operator', data);
    });

    this.observable1.pipe(first()).subscribe((data) => {
      console.log('first operator', data);
    });
  }

source = interval(1000);    
subscribe: Subscription | any;

rxInterval(){
  this.subscribe = this.source.subscribe(val => console.log(val));
}

takeFourNumber: Subscription | any;

  rxTake(){
  this.takeFourNumber= this.source.pipe(take(4)).subscribe((data)=>{
      console.log(data)
  })
}


response = [];


rxForkJoin(){
  const request1 = this.http.get('https://jsonplaceholder.typicode.com/users/1');
  const request2 = this.http.get('https://jsonplaceholder.typicode.com/users/2');
  const request3 = this.http.get('https://jsonplaceholder.typicode.com/users/3');
  const request4 = this.http.get('https://jsonplaceholder.typicode.com/users/4');

  forkJoin([request1, request2, request3, request4]).subscribe(
    (data:any) => {
      // this.response = data;
      // console.log(this.response)

      let request1 = data[0]
      let request2 = data[1]
      let request3 = data[2]
      let request4 = data[3]
      console.log(request1, request2,request3,request4); 
      console.log('##################')
    },
    (error) => {
      console.error('Error:', error);
    }
  );

  forkJoin([request1, request2, request3]).subscribe(
    ([result1, result2, result3]) => {
      console.log('Result 1:', result1);
      console.log('Result 2:', result2);
      console.log('Result 3:', result3);
    },
    (error) => {
      console.error('Error:', error);
    }
  )
}

rxCombineLatest(){
  let combinedLatestSingleValues = []
  //combine latest
    //timerOne emits first value at 6s, then once every 4s
    const timer1 = timer(6000, 4000).pipe(take(4));
    //timerTwo emits first value at 5s, then once every 4s
    const timer2 = timer(5000, 4000).pipe(take(5));
    //timerThree emits first value at 7s, then once every 4s
    const timer3 = timer(7000, 4000).pipe(take(3));

    //when one timer emits, emit the latest values from each timer as an array
    combineLatest([timer1, timer2, timer3]).subscribe(
      ([timerValOne, timerValTwo, timerValThree]) => {
        combinedLatestSingleValues = [
          timerValOne,
          timerValTwo,
          timerValThree,
        ];
        console.log('latest value', combinedLatestSingleValues);
      }
    );
}

rxConcat(){
  const timer12 = interval(1000).pipe(take(10));
  const timer13 = interval(2000).pipe(take(6));
  const timer14 = interval(500).pipe(take(10));

  const result = concat(timer12, timer13, timer14);
  result.subscribe((x) => {
    console.log('concat', x);
  });



  const sourceA$ = of(1, 2, 3);
  const sourceB$ = of(4, 5, 6);
  const sourceC$ = of(7, 8, 9);
  const source$ = concat(sourceA$, sourceB$, sourceC$);

  source$.subscribe((data) => console.log(data));
}





ngOnDestroy() {
    this.subscribe.unsubscribe();
}
}
