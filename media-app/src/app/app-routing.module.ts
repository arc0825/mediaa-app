import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './header/home-page/home-page.component';
import { AboutUsComponent } from './header/about-us/about-us.component';
import { GalleryComponent } from './header/gallery/gallery.component';
import { GalleryModule } from './header/gallery/gallery.module';


const routes: Routes = [
  {path:'',component:HomePageComponent},
  // {path:'home', component:HomePageComponent},
  {path:'about-us', component:AboutUsComponent},
  {path:'gallery', component:GalleryComponent},
  // {path:'login', component:LoginComponent},
  {path:'**', component:HomePageComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes), GalleryModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
