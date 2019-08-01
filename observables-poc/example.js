import { Observable } from 'rxjs';

function foo() {
  console.log('Hello foo');
  return 42;
}

function bar() {
  console.log('Hello bar');
  return 19;
  return 100;
  return 200;
}

console.log('before');
console.log(foo.call());
console.log('after');

console.log(bar());

console.log('------------------------')

const fooObservable = new Observable(subscriber => {
  console.log('Hello foo observable');
  subscriber.next(42);
});

const barObservable = new Observable(subscriber => {
    console.log('Hello bar');
    subscriber.next(19);
    subscriber.next(100);
    subscriber.next(200);
    setTimeout(() => {
      subscriber.next(300);
    }, 1000);
});

console.log('before');
fooObservable.subscribe(x => {
  console.log(x);
});
console.log('after');


barObservable.subscribe(subscriber => {
  console.log(subscriber);
});
