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

  trackProjectVisit() {
    this.dataLayer.push({
      event: 'click',
      eventInfo: {
        action: 'visit_project',
        project_name: this.project()?.title,
        componentName: 'project-pill',
      },
    });
  }

  trackGithubProjectVisit() {
    this.dataLayer.push({
      event: 'click',
      eventInfo: {
        action: 'visit_github_project',
        project_name: this.project()?.title,
        componentName: 'project-pill',
      },
    });
  }
}