import { Component } from '@angular/core';
import { UtilsService } from './services/utils.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  constructor( private utilsService: UtilsService) {
    //this.utilsService.getUser();
   }

ngOnInit(): void {
  
}
}
