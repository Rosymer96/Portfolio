import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DataLayerService } from '../../services/data-layer.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  copied = false;
  private copiedTimeout: ReturnType<typeof setTimeout> | null = null;

  isSubmitting = false;

  contactForm: FormGroup;

  constructor(
    private readonly dataLayer: DataLayerService,
    private readonly formBuilder: FormBuilder,
  ) {
    this.contactForm = this.formBuilder.group({
      company: ['', Validators.required],
      contactPerson: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, this.minWordsValidator(5)]],
    });
  }

  private minWordsValidator(minWords: number) {
    return (control: { value: string | null }) => {
      const value = control.value?.trim() ?? '';
      const wordCount = value.split(/\s+/).filter(Boolean).length;

      return wordCount >= minWords ? null : { minWords: true };
    };
  }

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

    this.dataLayer.push({
      event: 'click',
      eventInfo: {
        action: 'copy_email',
        component_name: 'contact',
      },
    });
  }

  async submitForm(): Promise<void> {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return ;
    }

    if (this.isSubmitting) {
      return;
    }

    this.isSubmitting = true;

    const formData = this.contactForm.value;

    try{
      const respone = await fetch('https://formsubmit.co/ajax/rosymer96@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          _captcha: 'false',
          empresa: formData.company,
          persona: formData.contactPerson,
          email: formData.email,
          mensaje: formData.message,
        }),      
      });

      if (!respone.ok) {
        throw new Error('Network response was not ok');
      }

      this.dataLayer.push({
        event: 'submit',
        eventInfo: {
          action: 'submit_contact_form',
          component_name: 'contact',
        },
      });

      this.contactForm.reset();
    }
    catch (error) {
      console.error('Error submitting form:', error);
    }
    finally {
      this.isSubmitting = false;
    }
  }
}
