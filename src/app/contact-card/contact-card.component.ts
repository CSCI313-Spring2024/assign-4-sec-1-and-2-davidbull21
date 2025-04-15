import { Component, inject, Input } from '@angular/core';
import { Contact } from '../model/contact';
import { ContactService } from '../contact.service';
import { RouterLink } from '@angular/router';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { ContactFormEditingComponent } from '../contact-form-editing/contact-form-editing.component';

@Component({
  selector: 'app-contact-card',
  imports: [RouterLink],
  templateUrl: './contact-card.component.html',
  styleUrl: './contact-card.component.css'
})
export class ContactCardComponent {
  @Input() contact!: Contact;
  contactService = inject(ContactService);
  // contactEditForm = inject(ContactFormEditingComponent);
  contacts: Contact[] = this.contactService.getContactList();

  onDeleteAccount(index: number) {
    this.contactService.deleteContact(index);
  }

  onEditAccount(index:number, firstname:string, lastname:string, phone:string, emailaddress:string) {
    this.contactService.setEditingContact(index, firstname, lastname, phone, emailaddress);
  }
}
