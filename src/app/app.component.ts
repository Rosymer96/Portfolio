import { Component, ElementRef, ViewChild, isDevMode } from '@angular/core';
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
    // Subscribe to data layer changes
    this.dataLayer.onChange((event) => {
      console.log('Data Layer Event:', event);
    })

    // Push initial page information to the data layer
    this.dataLayer.push({
      page:{
        name: 'portfolio',
        site: 'rosa-vela-portfolio',
        language: document.documentElement.lang,
        enviroment: isDevMode() ? 'development' : 'production',
      }
    })

    // Push initial page view event to the data layer
    this.dataLayer.push({
      event: 'page_view',
      eventInfo: {
        action: 'page_view',
        component_name: 'app-root',
      },
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
