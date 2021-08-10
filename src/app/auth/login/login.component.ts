import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
   
  
  //accounts:any = [this.account1, this.account2, this.account3, this.account4];

  constructor(private formBuilder: FormBuilder) { }

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
      this.currentAccount = this.accounts.find(acc => acc.username === this.userLoginForm.value['username']);
       if(this.currentAccount?.password === Number(this.userLoginForm.value['password'])){
         this.isLoggin = true; 
       }

      console.log(this.currentAccount);
      
      //console.log(this.userLoginForm.value['username']);
    }else {
      this.messageError="Zorunlu alanları Doldurun";
    }
    
    
  }

}
