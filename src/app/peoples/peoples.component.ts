import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-peoples',
  templateUrl: './peoples.component.html',
  styleUrls: ['./peoples.component.scss'],
})
export class PeoplesComponent implements OnInit {
  peoples: any[];
  default: 'https://bootstrap.news/source/img8.jpg';
  ngOnInit(): void {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then((json: any[]) => {
        json = json.slice(0, 7);
        console.log(json);
        this.peoples = json;
      });
  }
}
