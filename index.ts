import './style.css';
import { mergeMap } from 'rxjs/operators';
import { of, map, Observable } from 'rxjs';

let srcObservable= of(1,2,3,4)
let innerObservable= of('A','B','C','D')
 
srcObservable.pipe(
  mergeMap( val => {
    console.log('Source value '+val)
    console.log('starting new observable')
    return innerObservable
  })
)
.subscribe(ret=> {
  console.log('Recd ' + ret);
})

// Open the console in the bottom right to see results.
