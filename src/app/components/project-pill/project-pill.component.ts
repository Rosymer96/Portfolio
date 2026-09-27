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

  projectVisit() {
    this.dataLayer.push({
      event: 'click',
      eventInfo: {
        action: 'visit_project',
        project_name: this.project()?.title,
        component_name: 'project-pill',
      },
    });
  }

  githubProjectVisit() {
    this.dataLayer.push({
      event: 'click',
      eventInfo: {
        action: 'visit_github_project',
        project_name: this.project()?.title,
        component_name: 'project-pill',
      },
    });
  }
}