import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  descargarCV() {
    const link = document.createElement('a');
    link.href = 'CV_Rosa_Vela.pdf';
    link.download = 'CV_Rosa_Vela.pdf';
    link.click();
  }
}
