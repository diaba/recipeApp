import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'recipeApp';
  req:string = 'recipeS';

  onRequestReceived(data:string){
         this.req = data;
  }
}
