import { Component, OnInit } from '@angular/core';
import { Project } from './models/project';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.loadData();
  }
  title = 'probafeladat';

  projects: Project[] = [];
  project: Project = new Project();
  editEnabled: boolean = false;
  projectLocalDb: string = 'projectLocalDb';

  // Saves Data to LocalStorage
  saveData(projects: Project[]) {
    this.projects = projects;
    localStorage.setItem(this.projectLocalDb, JSON.stringify(this.projects));
  }

  /// CREATE
  addProject() {
    this.projects.unshift(Object.assign(new Project(), this.project));
    this.project.resetProperties();
    this.saveData(this.projects);
  }
  /// READs data from LocalStorage
  loadData() {
    let data = JSON.parse(localStorage.getItem(this.projectLocalDb) ?? '[]');
    this.projects = Object.values(data).map((x) =>
      Object.assign(new Project(), x)
    );
  }
  /// UPDATEs table
  saveEdits() {
    let index = this.projects.findIndex((x) => x.id === this.project.id);
    this.projects[index] = Object.assign(new Project(), this.project);
    this.editEnabled = false;
    this.saveData(this.projects);
    this.project.resetProperties();
  }
  cancelEdits() {
    this.project.resetProperties();
    this.editEnabled = false;
  }
  /// DELETE - by clickin on the trash btn
  deleteProject(project: Project) {}

  // Loads project data to the inputfields for editing
  loadEdit(project: Project) {
    Object.assign(this.project, project);
    this.editEnabled = true;
  }
}
