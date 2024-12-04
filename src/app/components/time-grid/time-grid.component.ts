import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-time-grid',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="time-slots">
      <div *ngFor="let hour of hours" class="time-slot">
        {{ hour }}:00
      </div>
    </div>
  `,
  styles: [`
    .time-slots {
      background: #f5f5f5;
    }

    .time-slot {
      height: 60px;
      padding: 8px;
      border-bottom: 1px solid #ddd;
      font-size: 0.8em;
      color: #666;
    }
  `]
})
export class TimeGridComponent {
  @Input() hours: number[] = [];
}