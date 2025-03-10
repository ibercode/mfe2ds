import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFeature3Module } from './my-feature3/my-feature3.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, MyFeature3Module],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}