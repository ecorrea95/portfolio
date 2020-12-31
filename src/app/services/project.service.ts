import { Injectable } from '@angular/core';
import { Project } from '../shared/project';
import { PROJECTS } from '../shared/projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  getProjects(): Promise<Project[]> {
    return Promise.resolve(PROJECTS);
  }
}
