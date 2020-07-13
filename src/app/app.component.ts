import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  articles = ['', '', '']
isChecked: boolean = false;
isChecked1: boolean = false;
isChecked2: boolean = false;


}
