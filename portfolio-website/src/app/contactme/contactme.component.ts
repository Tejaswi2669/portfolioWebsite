import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contactme',
  templateUrl: './contactme.component.html',
  styleUrls: ['./contactme.component.css']
})
export class ContactmeComponent {
  formData = {
    fname: '',
    email: '',
    object: '',
    message: ''
  };
  constructor(private http: HttpClient) {}

  isValidEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

  public sendEmail(e: Event, form: NgForm) {
    e.preventDefault();
    if (!this.isValidEmail(this.formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }
    if (form.valid) {
      emailjs.sendForm('service_804qs6d', 'template_jjgkqvh', e.target as HTMLFormElement, environment.emailjsUserId)
        .then((result: EmailJSResponseStatus) => {
          console.log(result.text);
          alert('Your message has been sent successfully!');
          form.reset();
        }, (error: { text: any; }) => {
          console.error(error.text);
          alert('There was an error sending your message. Please try again later.');
        });
    }
  }

  onSubmit(form: NgForm) {
    if (!this.isValidEmail(form.value.email)) {
      alert('Please enter a valid email address.');
      return;
    }
    if (form.valid) {
      const formData = {
        fname: form.value.fname,
        email: form.value.email,
        object: form.value.object,
        message: form.value.comment
      };
      // Perform further actions with formData if needed
    }
  }
}
