import { Component, OnInit } from '@angular/core';
import { Project } from '../shared/project';

const PROJECTS: Project[] = [
  {
      id: '0',
      name: 'Multiplayer Snake Game',
      comment: 'Developed with HTML, CSS & JavaScript',
      cover: '../../assets/img/snakegame.jpg',
      seecode: 'https://github.com/ecorrea95/SnakeGame',
      seeproject: 'https://practical-bhabha-5a248a.netlify.app/',
      featured: true
  },
  {
      id: '1',
      name: 'La Voz Romántica Website',
      comment: 'Developed with HTML, CSS, JavaScript & Bootstrap',
      cover: '../../assets/img/lavoz.png',
      seecode: '',
      seeproject: 'https://www.miguelangelcorrea.com/',
      featured: false
  },
  {
      id: '2',
      name: 'Math Problem Solver',
      comment: 'Developed with C++',
      cover: '../../assets/img/taller1.png',
      seecode: 'https://github.com/ecorrea95/Taller-I-UDE-2020',
      seeproject: 'https://github.com/ecorrea95/Taller-I-UDE-2020',
      featured: false
  }
];

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects = PROJECTS;
  selectedProject = PROJECTS[0];

  constructor() { }

  ngOnInit() {
  }

}
