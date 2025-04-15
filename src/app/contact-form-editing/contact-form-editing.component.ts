import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ContactService } from '../contact.service';
import { Contact } from '../model/contact';

@Component({
  selector: 'app-contact-form-editing',
  imports: [RouterLink, FormsModule],
  templateUrl: './contact-form-editing.component.html',
  styleUrl: './contact-form-editing.component.css'
})
export class ContactFormEditingComponent {
  // constructor(private contactService: ContactService) {}
  constructor() {}
  contactService = inject(ContactService);
  editingIndex:number = 0;

  editContact:Contact = this.contactService.getEditingContact();
  //   fname: this.contactService.editingContact.fname,
  //   lname: 'test2',
  //   phoneNumber: 'test3',
  //   email: 'test4'
  // }

  onEditContact() {
    this.contactService.editContact(this.contactService.getEditingIndex(), this.editContact);
  }

  // setNewContect() {
  //   this.editContact = this.contactService.getEditingContact();
  // }

  // ngOnInit():void {
  //   this.editContact = this.contactService.getEditingContact();
  // }
}
