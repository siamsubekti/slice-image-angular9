import { Component } from '@angular/core';
import { videos } from '../shared/data-json/data-json';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss'],
})
export class VideosComponent {
  videos = videos;
}
