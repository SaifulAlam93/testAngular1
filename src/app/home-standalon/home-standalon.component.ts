import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-home-standalon',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './home-standalon.component.html',
  styleUrls: ['./home-standalon.component.scss']
})
export class HomeStandalonComponent {
  constructor(private service: SharedService) { }
  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', Validators.required)
  });

  get name() { return this.contactForm.get('name')!; }
  get email() { return this.contactForm.get('email')!; }
  get message() { return this.contactForm.get('message')!; }

  submitForm() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      alert('Form submitted successfully!');
      this.contactForm.reset();
    }
  }
}
