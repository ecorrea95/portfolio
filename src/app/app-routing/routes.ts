import { Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ContactComponent} from '../contact/contact.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent, data: {animation: 'Home'} },
    { path: 'about', component: AboutComponent, data: {animation: 'About'} },
    { path: 'projects', component: ProjectsComponent, data: {animation: 'Projects'} },
    { path: 'contact', component: ContactComponent, data: {animation: 'Contact'} },
    { path: '', redirectTo: '/home', pathMatch: 'full'}
];
