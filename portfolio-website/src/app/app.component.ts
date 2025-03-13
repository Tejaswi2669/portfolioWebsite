import { Component } from '@angular/core';
import { AngularFireAnalytics } from '@angular/fire/compat/analytics';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio-website'; 


 // 1) A boolean that tracks whether the menu is open
 menuOpen: boolean = false;  

 // 2) A method that toggles the menu
 toggleMenu() {
   this.menuOpen = !this.menuOpen; 
 }

  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'it']);
    translate.setDefaultLang('en');
  }

  changeLanguage(event: any) {
    const selectedLanguage = (event.target as HTMLSelectElement).value!;

    this.translate.use(selectedLanguage);
    console.log(selectedLanguage);
  }



}