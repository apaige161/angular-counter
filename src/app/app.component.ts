import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello world';
  counter: number = 0;
  name: string = 'Alex'

  number: number = 0

  increaseCounter(add: number) {
    this.counter = this.counter + add;
  }

  decreaseCounter(subtract: number) {
    if(this.counter > 0) {
      this.counter = this.counter - subtract;
    }
  }

  resetCounter() {
    this.counter = 0;
  }
  
  

}


