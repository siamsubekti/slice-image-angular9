import { Component } from '@angular/core';
import { channels } from '../shared/data-json/data-json';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.scss'],
})
export class ChannelsComponent {
  channels = channels;
}
