import { Component, OnInit } from '@angular/core';
import { Project } from '../shared/project';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: Project[];
  selectedProject: Project;

  constructor(private projectservice: ProjectService) { }

  ngOnInit() {
    this.projectservice.getProjects()
    .then(projects => this.projects = projects);
  }

  onSelect(project: Project) {
    this.selectedProject = project;
  }

}
