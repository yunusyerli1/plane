import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../store/counter/counter.actions';
import { ADD_LANGUAGE } from '../store/language/language.actions';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.scss']
})
export class MyCounterComponent implements OnInit {

  count$: Observable<number>

  constructor(private store: Store<{ count: number, lang:string}>) {
    // TODO: Connect `this.count$` stream to the current store `count` state
    this.count$ = store.select('count');
    //this.lang$ = store.select('lang');
   }

  ngOnInit(): void {
  }

  increment() {
    // TODO: Dispatch an increment action
    this.store.dispatch(increment());
  }
 
  decrement() {
    // TODO: Dispatch a decrement action
    this.store.dispatch(decrement());
  }
 
  reset() {
    // TODO: Dispatch a reset action
    this.store.dispatch(reset());
  }
  addLang(value:any){
    //this.store.dispatch(ADD_LANGUAGE());
    console.log(value);
    
  }

}
