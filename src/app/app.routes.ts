import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactCardComponent } from './contact-card/contact-card.component';
import { ContactFormEditingComponent } from './contact-form-editing/contact-form-editing.component';

export const routes: Routes = [
    {
        path: '',
        component: ContactCardComponent,
        title: 'Home'
    },
    {
        path: 'add',
        component: ContactFormComponent,
        title: 'Add Contact'
    },
    {
        path: 'edit',
        component: ContactFormEditingComponent,
        title: 'Edit Contact'
    }
];
