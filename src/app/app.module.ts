import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ActivitiesComponent } from './activitites/activities.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChannelsComponent } from './channels/channels.component';
import { DocumentsComponent } from './documents/documents.component';
import { PeoplesComponent } from './peoples/peoples.component';
import { VideosComponent } from './videos/videos.component';

@NgModule({
  declarations: [
    AppComponent,
    ActivitiesComponent,
    ChannelsComponent,
    PeoplesComponent,
    DocumentsComponent,
    VideosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
