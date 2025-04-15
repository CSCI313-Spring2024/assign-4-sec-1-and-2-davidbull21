import { inject, Injectable } from '@angular/core';
import { Contact } from './model/contact';
import { ContactFormEditingComponent } from './contact-form-editing/contact-form-editing.component';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contactList: Contact[] = [
    {
        fname: 'John',
        lname: 'Adams',
        phoneNumber: '701-000-1000',
        email: 'johnadams@gmail.com'
    },
    {
        fname: 'Mary',
        lname: 'Jane',
        phoneNumber: '701-000-1111',
        email: 'maryjane@gmail.com'
    }
  ]

  editingIndex:number = 0;
  editingContact:Contact = {
    fname: '',
    lname: '',
    phoneNumber: '',
    email: ''
  }

  constructor() { }

  getContactList(): Contact[] {
    return this.contactList;
  }

  // addContact(fname: string, lname: string, phoneNumber: string, email: string) {
  //   this.contactList.push({fname, lname, phoneNumber, email});
  // }

  addContact(newContact:Contact) {
    this.contactList.push(newContact);
  }

  deleteContact(index: number) {
    this.contactList.splice(index, 1);
  }

  editContact(index: number, updatedContact: Contact) {
    this.contactList[index] = updatedContact;
  }

  setEditingContact(index:number,firstname:string,lastname:string,phone:string,emailaddress:string) {
    this.editingIndex = index;
    this.editingContact.fname = firstname;
    this.editingContact.lname = lastname;
    this.editingContact.phoneNumber = phone;
    this.editingContact.email = emailaddress;
  }

  getEditingContact():Contact {
    return this.editingContact;
  }

  getEditingIndex():number {
    return this.editingIndex;
  }
}
