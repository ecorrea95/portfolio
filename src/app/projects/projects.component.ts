import { Component, OnInit } from '@angular/core';
import { Project } from '../shared/project';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  project: Project;

  constructor(private projectservice: ProjectService) { }

  ngOnInit() {
    this.project = this.projectservice.getFeaturedProject();
  }

}
