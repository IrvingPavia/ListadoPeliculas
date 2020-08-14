import { Routes } from '@angular/router';

import { ListadoComponent } from './components/listado/listado.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';

export const APP_ROUTES: Routes = [
    { path: 'listado', component: ListadoComponent },
    { path: 'pelicula/:movieId', component: PeliculaComponent },
    { path: '', pathMatch: 'full', redirectTo: 'listado' },
    { path: '**', pathMatch: 'full', redirectTo: 'listado' }
];
