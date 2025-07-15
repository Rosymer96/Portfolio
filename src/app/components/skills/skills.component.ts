import { Component, signal } from '@angular/core';
import { ISkill } from '../../interfaces/skill';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  skills = signal<ISkill[]>([
    { name: 'Angular', img: './skills-logos/angular.svg' },
    {
      name: 'CSS',
      img: './skills-logos/css3.svg',
    },
    {
      name: 'HTML',
      img: './skills-logos/html.svg',
    },
    {
      name: 'JavaScript',
      img: './skills-logos/javascript.svg',
    },
    {
      name: 'MySQL',
      img: './skills-logos/mysql.svg',
    },
    {
      name: 'Node.js',
      img: './skills-logos/nodejs.svg',
    },
  ]);
}
