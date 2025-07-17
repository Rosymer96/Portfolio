import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import {
  MatSidenavContainer,
  MatSidenavContent,
  MatSidenavModule,
} from '@angular/material/sidenav';
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
    MatSidenavModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'PORTFOLIO-ROSA-VELA';
  isDrawerOpen = false;

  // Referencias a secciones
  @ViewChild('homeRef') homeRef!: ElementRef;
  @ViewChild('aboutRef') aboutRef!: ElementRef;
  @ViewChild('skillsRef') skillsRef!: ElementRef;
  @ViewChild('projectsRef') projectsRef!: ElementRef;
  @ViewChild('contactRef') contactRef!: ElementRef;

  onOpenedChange(opened: boolean) {
    this.isDrawerOpen = opened;
  }

  /**
   * Scrolls to the specified element on the page.
   * @param elementId The ID of the element to scroll to.
   */
  scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
