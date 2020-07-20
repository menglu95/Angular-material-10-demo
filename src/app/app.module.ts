import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatButtonModule } from '@angular/material/button';
import { MaterialModule } from './material/material.module';
import { ToggleBtnComponent } from './toggle-btn/toggle-btn.component';
import { TypographyComponent } from './typography/typography.component';
import { BtnComponent } from './btn/btn.component';
import { IconTestComponent } from './icon-test/icon-test.component';

@NgModule({
  declarations: [
    AppComponent,
    ToggleBtnComponent,
    TypographyComponent,
    BtnComponent,
    IconTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // MatButtonModule
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
