import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContactService } from '../contact.service';
import { Contact } from '../model/contact';
import { FormsModule } from '@angular/forms';
import { first } from 'rxjs';

@Component({
  selector: 'app-contact-form',
  imports: [RouterLink, FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
  constructor(private contactService: ContactService) {}

  newContact = {
    fname: '',
    lname: '',
    phoneNumber: '',
    email: ''
  }

  onCreateContact() {
    this.contactService.addContact(this.newContact);
  }
}
