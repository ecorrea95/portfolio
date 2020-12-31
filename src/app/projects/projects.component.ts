import { Component, OnInit } from '@angular/core';
import { Project } from '../shared/project';
import { PROJECTS } from '../shared/projects';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: Project[];
  selectedProject: Project;

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
    //this.projects = this.projectService.getFeaturedProject();
  }

  onSelect(project: Project) {
    this.selectedProject = project;
  }

}
