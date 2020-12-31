import { Injectable } from '@angular/core';
import { Project } from '../shared/project';
import { PROJECTS } from '../shared/projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  getProjects(): Project[] {
    return PROJECTS;
  }

  getProject(id: string) {
    return PROJECTS.filter((project) => (project.id === id))[0];
  }

  getFeaturedProject(): Project {
    return PROJECTS.filter((project) => project.featured)[0];
  }

}
