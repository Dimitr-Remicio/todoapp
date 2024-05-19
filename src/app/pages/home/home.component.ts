import { CommonModule } from "@angular/common";
import { Component, signal } from "@angular/core";
import { Task } from "../../models/task.model";
@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})
export class HomeComponent {
  tasks = signal<Task[]>([
    {
      id: Date.now(),
      title: "crear proyecto (using array)",
      completed: false,
    },
    {
      id: Date.now(),
      title: "Create all components",
      completed: false,
    },
    {
      id: Date.now(),
      title: "Start to Code",
      completed: false,
    },
    {
      id: Date.now(),
      title: "Create a new project",
      completed: false,
    },
    {
      id: Date.now(),
      title: "Read Documentation",
      completed: true,
    },
  ]);
  changeHandler(event: Event) {
    const input = event.target as HTMLInputElement;
    const newTask = input.value;
    this.addTask(newTask);
    input.value = "";
  }

  addTask(title: string) {
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    };
    this.tasks.update((tasks) => [...tasks, newTask]);
  }

  deleteTask(index: number) {
    this.tasks.update((tasks) => tasks.filter((_, i) => i !== index));
  }

  updateTask(index: number) {
    this.tasks.update((tasks) => {
      return tasks.map((task, position) => {
        if (position === index) {
          return {
            ...task,
            completed: !task.completed,
          };
        }
        return task;
      });
    });
  }
}
