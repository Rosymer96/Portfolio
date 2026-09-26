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
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { DataLayerService } from './services/data-layer.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HomeComponent,
    MatSidenavContainer,
    MatSidenavContent,
    AboutComponent,
    ProjectsComponent,
    SkillsComponent,
    ContactComponent,
    FooterComponent,
    MatSidenavModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

constructor(private dataLayer: DataLayerService) {}

  title = 'PORTFOLIO-ROSA-VELA';
  isDrawerOpen = false;

  ngOnInit(): void {
    this.dataLayer.onChange((event) => {
      console.log('Data Layer Event:', event);
    })
  }

  // Section references
  @ViewChild('homeRef') homeRef!: ElementRef;
  @ViewChild('aboutRef') aboutRef!: ElementRef;
  @ViewChild('skillsRef') skillsRef!: ElementRef;
  @ViewChild('projectsRef') projectsRef!: ElementRef;
  @ViewChild('contactRef') contactRef!: ElementRef;

  onOpenedChange(opened: boolean) {
    this.isDrawerOpen = opened;
  }

  scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  backHome() {
    const element = document.getElementById('homeSection');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
