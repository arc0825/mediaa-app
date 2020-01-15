import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './header/home-page/home-page.component';
import { AboutUsComponent } from './header/about-us/about-us.component';



const routes: Routes = [
  {path:'',component:HomePageComponent},
  
  {path:'about-us', component:AboutUsComponent},
  {path:'gallery',   loadChildren:'./header/gallery/gallery.module#GalleryModule'},
  
  {path:'**', component:HomePageComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
