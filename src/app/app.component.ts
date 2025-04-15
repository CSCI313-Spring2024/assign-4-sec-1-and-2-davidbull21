import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Contact } from './model/contact';
import { ContactCardComponent } from './contact-card/contact-card.component';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ContactCardComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'assignment-4';
  contactService = inject(ContactService);
  contacts: Contact[] = this.contactService.getContactList();
}
