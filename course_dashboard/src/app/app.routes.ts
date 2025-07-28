import { Routes } from '@angular/router';
import { DashboardComponent } from './views/dashboard/dashboard.component';

export const routes: Routes = [
    {
        path : '',
        redirectTo : '/dashboard',
        pathMatch : 'full'
    },
    {
        path : "dashboard",
        component : DashboardComponent
    },
    {
        path : "my-courses",
        loadComponent : () => 
            import('./views/my-course/my-course.component').then(m => m.MyCourseComponent)
    },
    {
        path : "settings",
        loadComponent : () => 
            import('./views/setting/setting.component').then(m => m.SettingComponent)
    }
];
