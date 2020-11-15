import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule  } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';
import { ProfileService } from './profile.service';
import { from } from 'rxjs';
import { FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProfileService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
