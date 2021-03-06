import { Routes } from "@angular/router";
import { EstadisticaComponent } from "../ingreso-egreso/estadistica/estadistica.component";
import { Component } from '@angular/core';
import { IngresoEgresoComponent } from "../ingreso-egreso/ingreso-egreso.component";
import { DetalleComponent } from "../ingreso-egreso/detalle/detalle.component";


export const dashboardRoutes: Routes = [
  {
    path:'',
    component: EstadisticaComponent
  },
  {
    path:'inputs-Outputs',
    component: IngresoEgresoComponent
  },
  {
    path:'details',
    component:DetalleComponent
  }
]
