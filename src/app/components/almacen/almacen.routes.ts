import { Routes } from '@angular/router';
import { AgregarComponent } from './agregar/agregar.component';
import { ModificarComponent } from './modificar/modificar.component';

export const ALMACEN_ROUTES: Routes = [
    {path: 'producto', component: AgregarComponent},
    {path: 'producto/:id', component: AgregarComponent},
    {path: 'productos', component: ModificarComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'producto/nuevo'}
];
