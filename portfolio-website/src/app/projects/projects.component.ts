import { Component, ElementRef, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: {
    title: string;
    description: string;
    technologies: string;
    image: string;
  }[] = [];

  @ViewChild('detailsRef') detailsElement!: ElementRef<HTMLDivElement>;
  // Track the currently selected (clicked) project
  selectedProject: {
    title: string;
    description: string;
    technologies: string;
    image: string;
  } | null = null;

  constructor(private translate: TranslateService) {
    // Subscribe to language change events, reload projects
    this.translate.onLangChange.subscribe(() => {
      this.loadProjects();
    });
    // Also handle immediate load or after certain translations
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
        image: 'assets/images/Ecommerce.jpg'
      },
      {
        title: this.translate.instant('portfolioWebsite.title'),
        description: this.translate.instant('portfolioWebsite.description'),
        technologies: this.translate.instant('portfolioWebsite.technologies'),
        image: 'assets/images/portfolio.jpg'
      },
      {
        title: this.translate.instant('astrologyApp.title'),
        description: this.translate.instant('astrologyApp.description'),
        technologies: this.translate.instant('astrologyApp.technologies'),
        image: 'assets/images/astrology.jpg'
      },
      {
        title: this.translate.instant('bloodDonationSystem.title'),
        description: this.translate.instant('bloodDonationSystem.description'),
        technologies: this.translate.instant('bloodDonationSystem.technologies'),
        image: 'assets/images/blood_donation.jpg'
      },
      {
        title: this.translate.instant('movieChatbot.title'),
        description: this.translate.instant('movieChatbot.description'),
        technologies: this.translate.instant('movieChatbot.technologies'),
        image: 'assets/images/movie_chatbot.jpg'
      }
    ];
  }

  // Called when a user clicks on a project card
  onProjectClick(project: {
    title: string;
    description: string;
    technologies: string;
    image: string;
  }) {
    this.selectedProject = project;

    setTimeout(() => {
      this.detailsElement?.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }, 0);
  }
}
