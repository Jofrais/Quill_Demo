import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {QuillModule} from "ngx-quill";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import BlotFormatter from "quill-blot-formatter";
import Quill from "quill";
import CustomImage from "../CustomImage";
Quill.register('formats/image', CustomImage);
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    QuillModule.forRoot({
      customModules: [{
        path: 'modules/blotFormatter',
        implementation: BlotFormatter
      }],
    }),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
