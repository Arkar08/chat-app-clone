import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { SingleLayoutComponent } from './layout/single-layout/single-layout.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './layout/home/home.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/auth/login',
    pathMatch:'full'
  },
  {
    path:'auth/login',
    component:LoginComponent
  },
  {
    path:"auth/signup",
    component:SignupComponent
  },
  {
    path:'',
    component:SingleLayoutComponent,
    children:[
      {
        path:'home',
        component:HomeComponent
      }
    ]
  },
  {
    path:"**",
    component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
