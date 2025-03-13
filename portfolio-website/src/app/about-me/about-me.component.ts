import { Component, OnInit } from '@angular/core';
import { AngularFireAnalytics } from '@angular/fire/compat/analytics';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  expandedSectionId: number | null = null;

  sections = [
    {
      id: 1,
      titleKey: 'CAREER_JOURNEY_TITLE',
      paragraphKeys: ['CAREER_JOURNEY_CONTENT', 'ORACLE_EXPERIENCE']
    },
    {
      id: 2,
      titleKey: 'FREELANCING_TITLE',
      paragraphKeys: ['FREELANCING_CONTENT']
    },
    {
      id: 3,
      titleKey: 'PROFESSIONAL_SUMMARY_TITLE',
      paragraphKeys: [
        'PROFESSIONAL_SUMMARY_CONTENT',
        'TCS_EXPERIENCE',
        'ORACLE_EXPERIENCE_DURATION',
        'JOB_SEEKING'
      ]
    }
  ];

  constructor(private analytics: AngularFireAnalytics) {}

  ngOnInit(): void {}

  toggleSection(sectionId: number) {
    // If the same section is clicked again, collapse it. Otherwise, open it.
    this.expandedSectionId = (this.expandedSectionId === sectionId) ? null : sectionId;
  }

  logEvent() {
    // Fire analytics event on resume download
    this.analytics.logEvent('button_click', { name: 'download_resume' });
  }
}
