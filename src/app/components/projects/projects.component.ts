import { Component, signal } from '@angular/core';
import { ProjectPillComponent } from '../project-pill/project-pill.component';
import { IProject } from '../../interfaces/project';

@Component({
  selector: 'app-projects',
  imports: [ProjectPillComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects = signal<IProject[]>([
    {
      title: 'NutriCole',
      img: './img-projects/NutriCole.png',
      description: 'Aplicación de gestión de menú escolar',
      tecnologies: ['Angular', 'Node.js', 'MySQL', 'Express.js'],
      link: 'https://github.com/Rosymer96/FrontEnd-NutriCole',
      linkGitHub: 'https://github.com/Rosymer96/FrontEnd-NutriCole',
    },
    {
      title: 'FinanMe',
      img: './img-projects/FinanMe.png',
      description: 'Aplicación de gestión financiera personal',
      tecnologies: ['Angular', 'CSS', 'Material'],
      link: 'https://finan-me-rosymer96s-projects.vercel.app/',
      linkGitHub: 'https://github.com/Rosymer96/FinanMe',
    },
    {
      title: 'Xiuling Store',
      img: './img-projects/XiulingStore.png',
      description: 'Tienda virtual de accesorios para niños',
      tecnologies: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://rosymer96.github.io/XiulingStore/',
      linkGitHub: 'https://github.com/Rosymer96/XiulingStore',
    },
    {
      title: 'Rovers',
      img: './img-projects/Hamburgueseria.png',
      description: 'Sitio web estático de una hamburguesería',
      tecnologies: ['HTML', 'CSS', 'Bootstrap'],
      link: 'https://rosymer96.github.io/HamburgueseriaTrabajoFinalHTML/',
      linkGitHub:
        'https://github.com/Rosymer96/Hamburgueseria-TrabajoFinalHTML',
    },
  ]);
}
