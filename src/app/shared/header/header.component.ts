import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as LanguageActions from '../../store/language/language.actions';
import { TranslocoService } from '@ngneat/transloco';
import { Language } from 'src/app/store/language/language.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLogin: boolean = false;
  actLang:Language;
  language: string;

  constructor( private translocoService: TranslocoService, 
                private store:Store<{lang:string}>) { }

  ngOnInit(): void {
    this.getLang();
    
  }
   getLang(){
     this.store.select('lang').subscribe(value => {
       this.language = value;
     });
     this.translocoService.setActiveLang(this.language);
  
   }
  changeLang(event){
    this.actLang= event.target.value;
    this.store.dispatch(new LanguageActions.ChangeLanguage(this.actLang));
    this.translocoService.setActiveLang(event.target.value);
  }

}
