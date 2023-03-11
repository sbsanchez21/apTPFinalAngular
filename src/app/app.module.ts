import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PruebaComponent } from './components/prueba/prueba.component';
import { ProjectComponent } from './components/project/project.component';
import { Prueba3Component } from './components/prueba3/prueba3.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ExperienciaComponent,
    EducacionComponent,
    EncabezadoComponent,
    AcercaDeComponent,
    PruebaComponent,
    ProjectComponent,
    Prueba3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //para databinding
    HttpClientModule //para servicio httpclient
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
