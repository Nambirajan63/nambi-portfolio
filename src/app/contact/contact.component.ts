import { Component } from '@angular/core';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  user:any = {
    fullName: "",
    phoneNum: "",
    email: "",
    subject: "",
    message: ""
  }

   async onSubmit(form:any) {
    emailjs.init('_Tnkwt3qDIHq_dyub');
    let send = await emailjs.send("service_7ujwqih","template_bpq0z2u",{
      from_name: this.user.fullName,
      phoneNum: this.user.phoneNum,
      email: this.user.email,
      subject: this.user.subject,
      message: this.user.message,
      });
      alert('Message has been sent.');
      form.reset();
      
  }

}
  