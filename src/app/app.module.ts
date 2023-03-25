import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { APLogoComponent } from './components/aplogo/aplogo.component';
import { BanerComponent } from './components/baner/baner.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { SkillsComponent } from './components/skills/skills.component';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    APLogoComponent,
    BanerComponent,
    AboutComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
