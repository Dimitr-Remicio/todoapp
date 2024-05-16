import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  tasks = signal([
    'Read Documentation',
    "Create a new project",
    "Start to Code",
    "Create all components",
  ]);
  changeHandler(event: Event) {
    const input = event.target as HTMLInputElement;
    const newTask = input.value;
    this.tasks.update((tasks) => [...tasks, newTask]);
    input.value = "";
  };

  deleteTask(index:number) {
    this.tasks.update((tasks) => tasks.filter((_, i) => i !== index));
  };
}
