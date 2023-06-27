import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent }   from './app.component';

import { MessageModule } from 'primeng/message';
import { TabMenuModule } from 'primeng/tabmenu';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MessageModule,
    TabMenuModule,
    RouterModule.forRoot([
				{path:'',component: AppComponent},
		])
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
