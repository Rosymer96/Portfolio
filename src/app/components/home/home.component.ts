import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { DataLayerService } from '../../services/data-layer.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private dataLayer: DataLayerService) {}

  downloadCV() {
    const link = document.createElement('a');
    link.href = 'CV_Rosa_Vela.pdf';
    link.download = 'CV_Rosa_Vela.pdf';
    link.click();
  }

  trackDownload() {
    this.dataLayer.push({
      event:'cv_download',
      eventInfo: {
        action: 'click',
        file_name: 'CV_Rosa_Vela.pdf',
        componentName: 'home',
      },
    });
  }

  trackVisitGitHub() {
    this.dataLayer.push({
      event: 'click',
      eventInfo: {
        action: 'visit_github',
        componentName: 'home',
      },
    });
  }

  trackVisitLinkedIn() {
    this.dataLayer.push({
      event: 'click',
      eventInfo: {
        action: 'visit_linkedin',
        componentName: 'home',
      },
    });
  }
  
  // trackDownload() {
  //   this.dataLayer.push({
  //     event:'cv_download',
  //     file_name: 'CV_Rosa_Vela.pdf',
  //     file_type: 'pdf',
  //     component: 'home',
  //   });
  // }
  // trackVisitGitHub() {
  //   this.dataLayer.push({
  //     event: 'visit_github',
  //     component: 'home',
  //   });
  // }
  // trackVisitLinkedIn() {
  //   this.dataLayer.push({
  //     event: 'visit_linkedin',
  //     component: 'home',
  //   });
  // }
}