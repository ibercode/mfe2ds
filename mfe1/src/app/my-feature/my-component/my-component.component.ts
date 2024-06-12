import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom, 
})
export class MyComponent {

}
