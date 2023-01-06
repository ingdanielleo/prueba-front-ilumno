import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NewsComponent } from './pages/news/news.component';
import { RegisterComponent } from './pages/register/register.component';

// Modulos



const routes: Routes = [

  { path: 'home', component: HomeComponent, data: { titulo: 'Home' }},
  { path: 'registro', component: RegisterComponent, data: { titulo: 'Home' }},
  { path: 'noticias/:id_news', component: NewsComponent, data: { titulo: 'Home' }},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent },
];



@NgModule({
  imports: [
    RouterModule.forRoot( routes,{ useHash: true } ),
    ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
