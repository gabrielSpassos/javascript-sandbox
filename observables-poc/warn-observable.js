import {Observable} from 'rxjs/Rx';

let obs = Observable
            .interval(1000)
            .publish()
            .refCount();

setTimeout(() => {
  obs.subscribe(v => console.log("1st subscriber:" + v));
  setTimeout(() => obs.subscribe(v => console.log("2nd subscriber:" + v)), 1100);
},2000);
