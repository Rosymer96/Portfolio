import { Component, input, signal } from '@angular/core';
import { IProject } from '../../interfaces/project';

@Component({
  selector: 'app-project-pill',
  imports: [],
  templateUrl: './project-pill.component.html',
  styleUrl: './project-pill.component.scss',
})
export class ProjectPillComponent {
  project = input<IProject>();
}
