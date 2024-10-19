import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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