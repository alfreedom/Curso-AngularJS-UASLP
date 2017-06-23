import { Routes, RouterModule } from "@angular/router";

import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ProductosComponent } from './productos/productos.component';
import { EmpleadoComponent } from "./empleado/empleado.component";
import { ContactoComponent } from "./contacto/contacto.component";

const APP_ROUTE:Routes = [
  { path:"inicio", component:InicioComponent },
  { path:"nosotros", component: NosotrosComponent },
  { path:"productos", component: ProductosComponent },
  { path:"empleado/:id", component: EmpleadoComponent },
  { path:"contacto", component: ContactoComponent }
];

export const myRoutes = RouterModule.forRoot(APP_ROUTE);