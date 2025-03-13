import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent {
  // Now includes an image field
  certificates: {
    title: string;
    description: string;
    link: string;
    image: string;    
  }[] = [];

  constructor(private translate: TranslateService) {
    this.translate.onLangChange.subscribe(() => {
      this.loadCertificates();
    });
    this.translate.get('certificates').subscribe(() => {
      this.loadCertificates();
    });
  }

  loadCertificates() {
    this.certificates = [
      {
        title: this.translate.instant('certificates.angular.title'),
        description: this.translate.instant('certificates.angular.description'),
        link: 'https://www.linkedin.com/learning/certificates/5ea82ab4ca38c445a4a72242f3f841d51cd74921cd0688895f68b151e52ef1b6',
        image: 'assets/images/Angular.jpeg'    // <-- example image path
      },
      {
        title: this.translate.instant('certificates.powerBI.title'),
        description: this.translate.instant('certificates.powerBI.description'),
        link: 'https://www.linkedin.com/learning/certificates/d571ce221ff6e07fd8dc642428b4600376117019c89188374b633aa2edfb7ae6',
        image: 'assets/images/Powerbi.jpeg'
      },
      {
        title: this.translate.instant('certificates.sqlAdvanced.title'),
        description: this.translate.instant('certificates.sqlAdvanced.description'),
        link: 'https://www.hackerrank.com/certificates/e550d72f7283',
        image: 'assets/images/SQL-Advanced.png'
      },
      {
        title: this.translate.instant('certificates.sqlIntermediate.title'),
        description: this.translate.instant('certificates.sqlIntermediate.description'),
        link: 'https://www.hackerrank.com/certificates/35d2e7f0700b',
        image: 'assets/images/SQL-Intermediate.png'
      }
    ];
  }
}
