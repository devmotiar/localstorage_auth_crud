import { Routes } from '@angular/router';
import { LayoutComponent } from './shared/layout/layout.component';
import { DashbordComponent } from './pages/dashbord/dashbord.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { CreateComponent } from './pages/crud/create/create.component';
import { ReadComponent } from './pages/crud/read/read.component';
import { IndexComponent } from './pages/crud/index/index.component';
import { EditComponent } from './pages/crud/edit/edit.component';

export const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent },
            { path: 'dashboard', component: DashbordComponent },
            { path: 'crud/create', component: CreateComponent },
            { path: 'crud/index', component: IndexComponent },
            { path: 'crud/read', component: ReadComponent },
            { path: 'crud/edit/:id', component: EditComponent }

        ]
    }
];
