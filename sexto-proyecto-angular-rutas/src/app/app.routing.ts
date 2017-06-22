import { Routes, RouterModule } from "@angular/router";

import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ProductosComponent } from './productos/productos.component';

const APP_ROUTE:Routes = [
  { path:"inicio", component:InicioComponent },
  { path:"nosotros", component: NosotrosComponent },
  { path:"productos", component: ProductosComponent }
];

export const myRoutes = RouterModule.forRoot(APP_ROUTE);