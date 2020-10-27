import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material Modules
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';

// Components
import { PrimitiveInputComponent } from './components/primitive-input/primitive-input.component';
import { ObjectInputComponent } from './components/object-input/object-input.component';
import { ServiceNoInputComponent } from './components/service-no-input/service-no-input.component';
import { HighlightCheckDirective } from './directives/highlight-check.directive';

@NgModule({
  declarations: [
    AppComponent,
    PrimitiveInputComponent,
    ObjectInputComponent,
    ServiceNoInputComponent,
    HighlightCheckDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
