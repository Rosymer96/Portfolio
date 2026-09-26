import { Component, input, signal } from '@angular/core';
import { IProject } from '../../interfaces/project';
import { DataLayerService } from '../../services/data-layer.service';

@Component({
  selector: 'app-project-pill',
  standalone: true,
  imports: [],
  templateUrl: './project-pill.component.html',
  styleUrl: './project-pill.component.scss',
})
export class ProjectPillComponent {

  constructor(private dataLayer: DataLayerService) {}

  project = input<IProject>();

    trackProjectVisit(project: IProject) {
    this.dataLayer.push({
      event: 'visit_project',
      project_title: project.title,
      component: 'projects',
    });
  }
    trackGithubProjectVisit(project: IProject) {
    this.dataLayer.push({
      event: 'visit_github_project',
      project_title: project.title,
      component: 'projects',
    });
  }
}
