import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  educationData: {
    degree: string;
    college?: string;
    location?: string;
    yearsAttended?: string;
    focusAreas?: string;
    thesis?: string;
    image?: string;   // For background image
  }[] = [];

  constructor(private translate: TranslateService) {
    this.translate.onLangChange.subscribe(() => {
      this.loadEducation();
    });
    // Force an initial load
    this.translate.get('education').subscribe(() => {
      this.loadEducation();
    });
  }

  loadEducation() {
    this.educationData = [
      {
        degree: this.translate.instant('education.btech.degree'),
        college: this.translate.instant('education.btech.college'),
        location: this.translate.instant('education.btech.location'),
        yearsAttended: this.translate.instant('education.btech.yearsAttended'),
        focusAreas: this.translate.instant('education.btech.focusAreas'),
        thesis: this.translate.instant('education.btech.thesis'),
        image: 'assets/images/VVIT.jpg'
      },
      {
        degree: this.translate.instant('education.juniorCollege.degree'),
        location: this.translate.instant('education.juniorCollege.location'),
        image: 'assets/images/InterCollege.jpg'
      },
      {
        degree: this.translate.instant('education.highSchool.degree'),
        location: this.translate.instant('education.highSchool.location'),
        image: 'assets/images/school.png'
      }
    ];
  }
}
