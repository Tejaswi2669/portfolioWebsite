import { Component, OnInit } from '@angular/core';
import { AngularFireAnalytics } from '@angular/fire/compat/analytics';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

 

  ngOnInit(): void {
  }

  constructor(private analytics: AngularFireAnalytics) {}

  logEvent() {
    this.analytics.logEvent('button_click', { name: 'download_resume' });
  }
}
