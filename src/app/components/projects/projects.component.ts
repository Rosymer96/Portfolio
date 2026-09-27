import { Component, signal } from '@angular/core';
import { ProjectPillComponent } from '../project-pill/project-pill.component';
import { IProject } from '../../interfaces/project';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectPillComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {

  projects = signal<IProject[]>([
      {
      title: 'Portfolio Digital Analytics',
      img: './img-projects/DigitalAnalytics.png',
      description: 'Event tracking with Adobe Client Data Layer and a tagging plan (SDR)',
      technologies: ['Angular', 'TypeScript', 'Adobe Client Data Layer'],
      link: 'https://docs.google.com/presentation/d/1KkNiAnPCndseXpXaORQIbbnsH-_6Ptjk/edit?usp=sharing&ouid=110646154850101358727&rtpof=true&sd=true',
      githubLink: 'https://github.com/Rosymer96/Portfolio',
    },
    {
      title: 'NutriCole',
      img: './img-projects/NutriCole.png',
      description: 'School menu management application',
      technologies: ['Angular', 'Node.js', 'MySQL', 'Express.js'],
      link: 'https://github.com/Rosymer96/FrontEnd-NutriCole',
      githubLink: 'https://github.com/Rosymer96/FrontEnd-NutriCole',
    },
    {
      title: 'FinanMe',
      img: './img-projects/FinanMe.png',
      description: 'Personal finance management application',
      technologies: ['Angular', 'CSS', 'Material'],
      link: 'https://finan-me-rosymer96s-projects.vercel.app/',
      githubLink: 'https://github.com/Rosymer96/FinanMe',
    },
    {
      title: 'Xiuling Store',
      img: './img-projects/XiulingStore.png',
      description: 'Online store for children accessories',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://rosymer96.github.io/XiulingStore/',
      githubLink: 'https://github.com/Rosymer96/XiulingStore',
    },
    {
      title: 'Rovers',
      img: './img-projects/Hamburgueseria.png',
      description: 'Static website for a burger restaurant',
      technologies: ['HTML', 'CSS', 'Bootstrap'],
      link: 'https://rosymer96.github.io/Hamburgueseria-TrabajoFinalHTML/',
      githubLink:
        'https://github.com/Rosymer96/Hamburgueseria-TrabajoFinalHTML',
    },
  ]);
}
