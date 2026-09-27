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

  downloadCv() {
    const link = document.createElement('a');
    link.href = 'CV_Rosa_Vela.pdf';
    link.download = 'CV_Rosa_Vela.pdf';
    link.click();

    this.dataLayer.push({
      event:'click',
      eventInfo: {
        action: 'download_cv',
        file_name: 'CV_Rosa_Vela.pdf',
        component_name: 'home',
      },
    });
  }

  visitGitHub() {
    this.dataLayer.push({
      event: 'click',
      eventInfo: {
        action: 'visit_github',
        component_name: 'home',
      },
    });
  }

  visitLinkedIn() {
    this.dataLayer.push({
      event: 'click',
      eventInfo: {
        action: 'visit_linkedin',
        component_name: 'home',
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