import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { AdminComponent } from './pages/admin/admin.component';

export const routes: Routes = [
    {
        path:'',
        component: HomeComponent
    },
    {
        path:'about',
        component: AboutusComponent
    },
    {
        path:'admin',
        component: AdminComponent
    }
];
