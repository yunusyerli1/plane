import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  user:any;

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
    private store:Store<{user:User}>
    ) { }

  ngOnInit(): void {
    this.createContactForm();
    this.user= this.store.select('user');
    console.log(this.user);
    
  }
  createContactForm() {
    const params = {
      title: ["", Validators.required],
      name: ["", [Validators.required, Validators.minLength(3)]],
      email: ["", Validators.compose([Validators.required, Validators.maxLength(250), Validators.pattern(this.utilsService.emailPattern)])],
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
    }
  }
}
