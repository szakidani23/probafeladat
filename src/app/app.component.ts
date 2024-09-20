import { Component } from '@angular/core';
import { Project } from './models/project';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'probafeladat';

  projects: Project[] = [];
  project: Project = new Project();
  editEnabled: boolean = false;

  addProject() {}
  saveEdits() {}
  cancelEdits() {}
}
