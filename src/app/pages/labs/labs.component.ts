import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  title = 'Todo App';
  tasks = [
    'Read Documentation',
    "Create a new project",
    "Start to Code",
    "Create all components",
  ]
}
