import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'my-app',
  templateUrl: `./app.component.template.html`,
  animations: [
    trigger('myTrigger', [
      state('small', style({
        transform: 'scale(1)'
      })),
      state('large', style({
        transform: 'scale(2)'
      })),
      state('fadeIn', style({
        opacity: 1
      })),
      //transition("small <=> large", animate("500ms")) 
      transition("void => *", [style({ 
        opacity: 0, 
        transform: 'translateY(50px)' }), 
        animate("1000ms 0ms ease-out")])
    ])

  ],
  styles: [`
  ul { list-style-type: none; margin: 30px 30px 0px 0px; padding 0;}
  li {
    padding: 15px;
    width: 100%;
    background: #f1f1f1;
    margin-bottom: 2px;
    font-weight: bold
  }
  
  `]

})
export class AppComponent {
  state = 'fadeIn';
  name = 'Angular';
  items: any[] = ['item1', 'item2', 'item3'];

  toggleState() {
    this.items.push('new items');

    this.state = 'fadeIn';
    console.log(this.state);
  }
}
