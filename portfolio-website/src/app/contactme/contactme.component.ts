import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

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
  public sendEmail(e: Event, form: NgForm) {
    e.preventDefault();
    if (form.valid) {
      emailjs.sendForm('service_804qs6d', 'template_jjgkqvh', e.target as HTMLFormElement, 'U5nfMqOaqFgCBFRaP')
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
    if (form.valid) {
      const formData = {
        fname: form.value.fname,
        email: form.value.email,
        object: form.value.object,
        message: form.value.comment
      };
      
   
    }
  }
}



