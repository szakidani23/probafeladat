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

  /// CREATE
  addProject() {
    this.projects.unshift(Object.assign(new Project(), this.project));
  }
  /// READs data from LocalStorage
  loadData() {}
  /// UPDATE
  saveEdits() {}
  cancelEdits() {}
  /// DELETE - by clickin on the trash btn
  deleteProject(project: Project) {}

  // Saves Data to LocalStorage
  saveData() {}

  // Loads project data to the inputfields
  loadEdit(project: Project) {}
}
