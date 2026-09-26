import { DataLayerService } from '../../services/data-layer.service';
import { Component } from '@angular/core';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {

constructor(private dataLayer: DataLayerService) {}

  copied = false;
  private copiedTimeout: ReturnType<typeof setTimeout> | null = null;

  copyEmail() {
    const email = 'rosymer96@gmail.com';
    navigator.clipboard.writeText(email);

    this.copied = true;

    if (this.copiedTimeout) {
      clearTimeout(this.copiedTimeout);
    }

    this.copiedTimeout = setTimeout(() => {
      this.copied = false;
    }, 2000);
  }
}
