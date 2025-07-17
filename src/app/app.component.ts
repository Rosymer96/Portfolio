import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { MatSidenavContainer, MatSidenavContent, MatSidenavModule } from '@angular/material/sidenav';
import { AboutComponent } from './components/about/about.component';
import { ProjectPillComponent } from './components/project-pill/project-pill.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactComponent } from './components/contact/contact.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    HomeComponent,
    MatSidenavContainer,
    MatSidenavContent,
    AboutComponent,
    ProjectsComponent,
    SkillsComponent,
    ContactComponent,
    MatSidenavModule
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'PORTFOLIO-ROSA-VELA';
  isDrawerOpen = false;

  onOpenedChange(opened: boolean) {
    this.isDrawerOpen = opened;
  }
}
