import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../shared/project';

@Component({
  selector: 'app-projectdetail',
  templateUrl: './projectdetail.component.html',
  styleUrls: ['./projectdetail.component.scss']
})
export class ProjectdetailComponent implements OnInit {

  @Input()
  project: Project;

  constructor() { }

  ngOnInit() {
  }

}
