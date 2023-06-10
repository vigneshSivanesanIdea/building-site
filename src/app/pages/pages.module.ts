import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { ProjectComponent } from './project/project.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from '../footer/footer.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    HomeComponent,
    ServicesComponent,
    ProjectComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MatIconModule
  ]
})
export class PagesModule { }
