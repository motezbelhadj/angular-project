import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hello',
  standalone: true,
  template: `
    <h1>Hello from {{ name }}!</h1>
  `,
  styles: [`
    h1 {
      color: #333;
      font-family: Arial, sans-serif;
      margin-bottom: 1rem;
    }
  `]
})
export class HelloComponent {
  @Input() name = 'Angular';
}