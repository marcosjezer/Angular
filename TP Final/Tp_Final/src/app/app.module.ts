import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { InicioComponent } from './inicio/inicio.component';
import { PieDePaginaComponent } from './pie-de-pagina/pie-de-pagina.component';
import { PrincipalComponent } from './principal/principal.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    InicioComponent,    
    PieDePaginaComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
