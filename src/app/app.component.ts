import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CustomRedirect';
  constructor(@Inject(DOCUMENT) private document: Document) { }
  goToUrl(): void {
    this.document.location.href = 'https://buildmymomentum.com';
  }
  ngOnInit(){
    this.goToUrl();
  }
}
