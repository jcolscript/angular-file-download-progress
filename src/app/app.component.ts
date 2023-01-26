import { Component, Inject } from '@angular/core';
import { DownloadService } from './download.service'
import { Download } from './download'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'
import { DOCUMENT } from '@angular/common'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  slides = 
    {name: 'Mobile Cross-Platform from a Progressive Perspective', url: 'https://nils-mehlhorn.de/slides/mobile_cp_progessive_mehlhorn_pottjs.pdf'}

  download$: Observable<Download>


  constructor(private downloads: DownloadService,
              @Inject(DOCUMENT) private document: Document) {}

  download({name, url}: {name: string, url: string}) {
    this.download$ = this.downloads.download(url, name)
  }
}
