import { NgModule } from '@angular/core';
   import { BrowserModule } from '@angular/platform-browser';
   import { RouterModule, Routes } from '@angular/router';
   import { AppComponent } from './app.component';
   import { AboutMeComponent } from './about-me/about-me.component';
   import { ProjectsComponent } from './projects/projects.component';
   import { CertificatesComponent } from './certificates/certificates.component';
   import { EducationComponent } from './education/education.component';

   const routes: Routes = [
     { path: '', redirectTo: '/about', pathMatch: 'full' },
     { path: 'about', component: AboutMeComponent },
     { path: 'projects', component: ProjectsComponent },
     { path: 'certificates', component: CertificatesComponent },
     { path: 'education', component: EducationComponent }
   ];

   @NgModule({
     declarations: [
       AppComponent,
       AboutMeComponent,
       ProjectsComponent,
       CertificatesComponent,
       EducationComponent
     ],
     imports: [
       BrowserModule,
       RouterModule.forRoot(routes)
     ],
     providers: [],
     bootstrap: [AppComponent]
   })
   export class AppModule { }
   