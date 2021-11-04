import { Component } from '@angular/core';
import { activities } from '../shared/data-json/data-json';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss'],
})
export class ActivitiesComponent {
  activities = activities;
}
