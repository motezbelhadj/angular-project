import { Component } from '@angular/core';

@Component({
  selector: 'app-learn-more',
  standalone: true,
  template: `
    <a target="_blank" href="https://angular.dev/overview" class="learn-more-link">
      Learn more about Angular
    </a>
  `,
  styles: [`
    .learn-more-link {
      color: #1976d2;
      text-decoration: none;
      font-family: Arial, sans-serif;
    }
    
    .learn-more-link:hover {
      text-decoration: underline;
    }
  `]
})
export class LearnMoreComponent {}