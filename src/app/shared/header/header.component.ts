import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as LanguageActions from '../../store/language/language.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLogin: boolean = false;
  language:Observable<string>;

  constructor(private store:Store<{lang:string}>) { }

  ngOnInit(): void {
    this.language = this.store.select('lang');
    console.log(this.language);
    
  }
  changeLang(event){
    this.language= event.target.value;
    this.store.dispatch(new LanguageActions.ChangeLanguage(event.target.value));
    console.log(this.language);
  }

}
