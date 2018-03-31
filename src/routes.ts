import { Routes } from '@angular/router';
import { ActivityListComponent } from './app/activity-list/activity-list.component';
import {MapComponent} from './app/map/map.component';
import { LoginComponent } from './app/login/login.component';

export const appRoutes: Routes = [
    {path: 'runs', component: ActivityListComponent},
    {path: 'run/:id', component: MapComponent },
    {path: 'login', component: LoginComponent},
    {path: '', redirectTo: '/login', pathMatch: 'full'}

];
