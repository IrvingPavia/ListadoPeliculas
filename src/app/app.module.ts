import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';

//SERVICES
import { AppService } from './services/app.services';

//COMPONENTES
import { AppComponent } from './app.component';
import { ListadoComponent } from './components/listado/listado.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';

//RUTAS
import { APP_ROUTES } from './app.routes';


//IMPORTS
import { 
  IgxButtonModule, 
  IgxIconModule, 
  IgxNavbarModule,
  IgxLayoutModule,
  IgxDialogModule,
  IgxCardModule } 
from "igniteui-angular";

@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    PeliculaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxButtonModule,
		IgxIconModule,
    IgxLayoutModule,
    IgxDialogModule,
    IgxCardModule,
    IgxNavbarModule,
    HttpClientModule,
    RouterModule.forRoot( APP_ROUTES, { useHash: true } )
  ],
  providers: [
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
