import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as LanguageActions from '../../store/language/language.actions';
import { TranslocoService } from '@ngneat/transloco';
import { Language } from 'src/app/store/language/language.model';
import { UtilsService } from 'src/app/services/utils.service';
import { User } from 'src/app/store/user/user.model';
import * as UserActions from '../../store/user/user.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLogin: boolean = false;
  actLang:Language;
  language: string;
  user:any='';

  constructor( private translocoService: TranslocoService, 
                public utilsService: UtilsService,
                private store:Store<{lang:string, user:User}>) { }

  ngOnInit(): void {
    this.getLang();
    //this.user= this.utilsService.getUser();
    
    
  }
  ngAfterContentInit(){
    this.store.select('user').subscribe(value => {
      this.user = value;
      console.log(value);
    });
    console.log(this.user);
  }
   getLang(){
     this.store.select('lang').subscribe(value => {
       this.language = value;
     });
     this.translocoService.setActiveLang(this.language);
  
   }
  changeLang(event){
    this.actLang= event.target.value;
    this.store.dispatch(new LanguageActions.SetLanguage(this.actLang));
    localStorage.setItem('language', JSON.stringify(this.actLang));
    this.translocoService.setActiveLang(event.target.value);
  }
  logout(){
    localStorage.removeItem('user');
    this.utilsService.userInfo=null;
    //this.store.dispatch(new UserActions.Logout({}));
    
  }
}
