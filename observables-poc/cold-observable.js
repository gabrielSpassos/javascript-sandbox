import {Observable} from 'rxjs/Rx';

let obs = Observable
            .create(observer => observer.next(Date.now()));

obs.subscribe(v => console.log("1st subscriber: " + v));
setTimeout(() => obs.subscribe(v => console.log("2nd subscriber: " + v)), 1000);
