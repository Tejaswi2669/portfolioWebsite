import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: { title: string; description: string; technologies: string; }[] = [];
  constructor(private translate: TranslateService) {
    this.translate.onLangChange.subscribe(() => {
      this.loadProjects();
    });
    this.translate.get('certificates').subscribe(() => {
      this.loadProjects();
    });
  }
  loadProjects() {
  this.projects = [
    {
      title: this.translate.instant('ecommercePlatform.title'),
      description: this.translate.instant('ecommercePlatform.description'),
      technologies: this.translate.instant('ecommercePlatform.technologies'),
    },
    {
      title: this.translate.instant('portfolioWebsite.title'),
      description: this.translate.instant('portfolioWebsite.description'),
      technologies: this.translate.instant('portfolioWebsite.technologies'),
    },
    {
      title: this.translate.instant('astrologyApp.title'),
      description: this.translate.instant('astrologyApp.description'),
      technologies: this.translate.instant('astrologyApp.technologies'),
    },
    {
      title: this.translate.instant('bloodDonationSystem.title'),
      description: this.translate.instant('bloodDonationSystem.description'),
      technologies: this.translate.instant('bloodDonationSystem.technologies'),
    },
    {
      title: this.translate.instant('movieChatbot.title'),
      description: this.translate.instant('movieChatbot.description'),
      technologies: this.translate.instant('movieChatbot.technologies'),
    }
  ];
  }
  
}
