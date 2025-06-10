import { Routes } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {LandingPageComponent} from './features/landing-page/landing-page.component';
import {HomePageComponent} from './features/landing-page/home/home-page/home-page.component';
import {CategoryComponent} from './features/landing-page/category/category/category.component';
import {AuthorsComponent} from './features/landing-page/authors/authors/authors.component';
import {AdminPageComponent} from './components/admin-page/admin-page.component';

export const routes: Routes = [
  {
    path: '',
    component:LoginComponent
  },
  {
    path: 'landing',
    component:LandingPageComponent,
    children: [
      {
        path: '',
        component: HomePageComponent
      },
      {
        path: 'category/:id',
        component: CategoryComponent
      },
      {
        path: 'authors/:id',
        component: AuthorsComponent
      }
    ]
  },
  {
    path: 'admin',
    component:AdminPageComponent
  },
];
