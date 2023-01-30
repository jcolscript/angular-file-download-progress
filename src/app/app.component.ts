import { Component, Inject } from '@angular/core';
import { DownloadService } from './download.service';
import { Download } from './download.util';
import { Observable } from 'rxjs';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  sample = {
    name: 'Lorem Picsum - Random Image (1.1 MB)',
    url: 'https://fastly.picsum.photos/id/123/5000/5000.jpg?hmac=P_xEz3-Ftb0rSf8nzpuLPUCZOCiksBlqvQyh8Pwkvhc',
  };

  download$: Observable<Download>;

  constructor(
    private downloads: DownloadService,
    @Inject(DOCUMENT) private document: Document
  ) {}

  download({ name, url }: { name: string; url: string }) {
    this.download$ = this.downloads.download(url, name);
  }
}
