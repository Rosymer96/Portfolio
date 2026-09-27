import { Component, HostListener } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
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
  submitStatus: 'idle' | 'success' | 'error' = 'idle';
  private formStarted = false;

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

    this.contactForm.valueChanges.pipe(takeUntilDestroyed()).subscribe(() => {
      if (this.formStarted) return;

      this.formStarted = true;
      this.dataLayer.push({
        event: 'form_start',
        eventInfo: {
          action: 'start_contact_form',
          component_name: 'contact',
        },
      });
    });
  }

  @HostListener('window:pagehide')
  onPageHide(): void {
    if (!this.formStarted) return;

    const values = this.contactForm.value;
    const completedFields = Object.keys(values).filter(
      (key) => !!values[key]?.toString().trim(),
    );

    this.dataLayer.push({
      event: 'form_abandon',
      eventInfo: {
        action: 'abandon_contact_form',
        component_name: 'contact',
        fields_completed: completedFields,
      },
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
      return;
    }

    if (this.isSubmitting) return;

    this.isSubmitting = true;
    this.submitStatus = 'idle';

    const formData = this.contactForm.value;

    try {
      const response = await fetch(
        'https://formsubmit.co/ajax/rosymer96@gmail.com',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            _subject: 'Nuevo mensaje desde el portafolio',
            _template: 'table',
            _captcha: 'false',
            _honey: '',
            _replyto: formData.email,
            empresa: formData.company,
            persona: formData.contactPerson,
            email: formData.email,
            mensaje: formData.message,
          }),
        },
      );

      const result = await response.json();

      if (!response.ok || String(result.success) !== 'true') {
        throw new Error(result.message ?? 'Form submission failed');
      }

      this.dataLayer.push({
        event: 'submit',
        eventInfo: {
          action: 'submit_contact_form',
          component_name: 'contact',
        },
      });

      this.submitStatus = 'success';
      this.contactForm.reset();
      this.formStarted = false;
    } catch (error) {
      console.error('Error submitting form:', error);
      this.submitStatus = 'error';

      this.dataLayer.push({
        event: 'form_error',
        eventInfo: {
          action: 'error_contact_form',
          component_name: 'contact',
        },
      });
    } finally {
      this.isSubmitting = false;
    }
  }
}
