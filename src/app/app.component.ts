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
  ascending: boolean = true;

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
  deleteProject(project: Project) {
    this.projects = this.projects.filter((x) => x.id !== project.id);
    this.saveData(this.projects);
  }

  // Loads project data to the inputfields for editing
  loadEdit(project: Project) {
    Object.assign(this.project, project);
    this.editEnabled = true;
  }

  // Disables addproject button if inputfields are empty
  btnDisabled() {
    return (
      this.project.name === '' ||
      this.project.description === '' ||
      this.project.contactName === '' ||
      this.project.contactEmail === '' ||
      this.project.status === ''
    );
  }

  // Sorting the table by status
  sortByStatus() {
    this.projects.sort((a, b) =>
      this.ascending
        ? a.status.localeCompare(b.status)
        : b.status.localeCompare(a.status)
    );
    this.ascending = !this.ascending;
  }
}
