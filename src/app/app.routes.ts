import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { ContactoComponent } from './shared/contacto/contacto.component';
import { HomeComponent } from './shared/home/home.component';
import { AboutComponent } from './shared/about/about.component';


export const routes: Routes = [
    { path: 'Home', component: HomeComponent },
    { path: 'Contacto', component:ContactoComponent },
    { path: 'About', component:AboutComponent },
    { path: '', redirectTo: '/Home', pathMatch: 'full'},
    { path: '**', redirectTo: '/Home'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule],
})

export class AppRoutingModule{}
