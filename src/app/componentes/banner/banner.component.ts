import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  background: string = '';
  query: string = '';

  ngOnInit() {
  }

  searchQueryHandler(event: any) {
    event.preventDefault();

    if (this.query.length > 0) {
    }
  }
}
