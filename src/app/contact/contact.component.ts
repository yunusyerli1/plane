import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslocoService } from '@ngneat/transloco';
import { Store } from '@ngrx/store';
import { UtilsService } from '../services/utils.service';
import { User } from '../store/user/user.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  errorMessage:string;
  user:User;
  countries:Array<any>=[];

  countryList :Array<any> = [
    { id: "TR", name: "Turkey" },
    { id: "US", name: "United States of America" },
    { id: "GB", name: "United Kingdom" },
    { id: "DE", name: "Germany" },
    { id: "SE", name: "Sweden" },
    { id: "KE", name: "Kenya" },
    { id: "BR", name: "Brazil" },
    { id: "ZW", name: "Zimbabwe" }
  ]
  

  constructor(private formBuilder: FormBuilder,
    private utilsService: UtilsService,
    private translocoService: TranslocoService,
    private store:Store<{user:User}>
    ) { }

  ngOnInit(): void {
    this.createContactForm();
  }
  ngAfterViewInit(){
    this.store.select('user').subscribe(value => {
      this.user = value;
      this.createContactForm();
      
    });
    this.translateMessages(this.countryList);
  }
  ngAfterContentChecked() {
      this.translateMessages(this.countryList);
 
  }

  createContactForm() {
    const params = {
      title: ["", Validators.required],
      name: [this.user?.name ? this.user?.name : "", [Validators.required, Validators.minLength(3)]],
      email: [this.user?.email ? this.user?.email : "", Validators.compose([Validators.required, Validators.maxLength(250), Validators.pattern(this.utilsService.emailPattern)])],
      phone: ["", [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(this.utilsService.onlyNumberPattern)]],
      country: [""],
      description:[""]
    }

    this.contactForm = this.formBuilder.group(params);
  }
  submitForm(){
    if (this.contactForm.valid) {
      let value = this.contactForm.value;
      let  params = {
        title: value.title,
        name: value.name,
        email: value.email,
        phone: value.phone,
        country: value.country,
        description: value.description
      }
      console.log(params);
      this.contactForm.reset();
      this.errorMessage="";
    } else {
      this.errorMessage = "Lütfen zorunlu alanları doldurun.";
    }
  }


  translateMessages(message:any) {
    this.countries.length=0;
    message.forEach(element => {
      let translatedMessage;
      this.translocoService.selectTranslate(`country.${element.id}`).subscribe(translation => {
        translatedMessage = translation;
        this.countries.push({
          id:element.id,
          name:translatedMessage
        });
      });
    });
  }
}
