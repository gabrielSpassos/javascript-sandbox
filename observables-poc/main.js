import * as Rx from "rxjs";

const random = Math.random()

const hotObservable = Rx.Observable.create((observer) => {
    observer.next(random);
});

const coldObservable = Rx.Observable.create((observer) => {
    observer.next(Math.random());
});

hotObservable.subscribe((data) => {
  console.log('Hot Subscription 1: ', data);
});

hotObservable.subscribe((data) => {
   console.log('Hot Subscription 2: ', data);
});

coldObservable.subscribe((data) => {
  console.log('Cold Subscription 1: ', data);
});

coldObservable.subscribe((data) => {
   console.log('Cold Subscription 2: ', data);
});
