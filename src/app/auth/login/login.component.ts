import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { UtilsService } from 'src/app/services/utils.service';
import { User } from 'src/app/store/user/user.model';
import { Language } from 'src/app/store/language/language.model';
import * as UserActions from '../../store/user/user.actions';
import * as LanguageActions from '../../store/language/language.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userLoginForm: FormGroup;
  namePattern = "^((?:[A-Za-zğüşöçıİĞÜŞÖÇ]+ ?){1,2})$";
  messageError: string;
  currentAccount:any;
  isLoggin: boolean= false;
  activeLang:Language;

accounts:any = [
  {
    name: 'Yunus Yerli',
    username:'yyerli',
    email:'yunusyerli1@gmail.com',
    password: 111111
  },
  {
    name: 'Yusuf Gün',
    username:'yusufgun',
    email:'yusufgun@gmail.com',
    password: 222222
  },
  {
    name: 'Ayşe Yılmaz',
    username:'ayseyilmaz',
    email:'ayseyilmaz@gmail.com',
    password: 333333
  },
  
  {
    name: 'Mehmet Turk',
    username:'mehmetturk',
    email:'mehmetturk@gmail.com',
    password: 444444
  }
]


  constructor(private formBuilder: FormBuilder,
              private utilsService: UtilsService,
              private store:Store<{user:User}>) { }

  ngOnInit(): void {
    this.createUserLoginForm();
  }
  createUserLoginForm() {
    const params = {
      username: ["", Validators.compose([Validators.required, Validators.pattern(this.namePattern)])],
      password: ["", [Validators.required, Validators.minLength(6)]]
    }
    this.userLoginForm = this.formBuilder.group(params);
  }
  login(){
    if (this.userLoginForm.valid) {
      this.messageError = "";
      this.currentAccount = JSON.parse(JSON.stringify(this.accounts.find(acc => acc.username === this.userLoginForm.value['username'])));
       if(this.currentAccount?.password === Number(this.userLoginForm.value['password'])){
         this.isLoggin = true;
         delete this.currentAccount['password'];
         localStorage.setItem('user', JSON.stringify(this.currentAccount));
         this.utilsService.userInfo = this.currentAccount;
         this.store.dispatch(new LanguageActions.SetLanguage(this.activeLang ));
        this.store.dispatch(new UserActions.Login(this.currentAccount));
        
         this.closeModal();
       }
    }else {
      this.messageError="Zorunlu alanları Doldurun";
    }
  }
  public closeModal() {
    const modal = document.getElementById('login-button');
    modal.setAttribute("data-bs-dismiss", "modal");
    modal.click();
    event.preventDefault();
    modal.removeAttribute("data-bs-dismiss");
  }
  

}
