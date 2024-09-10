import { Component, input, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-home',
  template: ` <h1>Home</h1> `,
})
export default class DataComponent {
  data = input.required<any>();
}
