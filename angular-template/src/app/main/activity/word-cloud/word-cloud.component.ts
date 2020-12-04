import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CloudData, CloudOptions } from 'angular-tag-cloud-module';

@Component({
  selector: 'app-word-cloud',
  templateUrl: './word-cloud.component.html',
  styleUrls: ['./word-cloud.component.scss']
})
export class WordCloudComponent implements OnInit, OnChanges {

  constructor() { }

  @Input() data2: any;
  options: CloudOptions = {
    // if width is between 0 and 1 it will be set to the width of the upper element multiplied by the value
    width: 478,
    // if height is between 0 and 1 it will be set to the height of the upper element multiplied by the value
    height: 200,
    overflow: false,
  };

  data: any[] = [
    /* {text: 'test', weight: 1 },
    {text: 'test2', weight: 2},
    {text: 'test3', weight: 3},
    {text: 'test4', weight: 3},
    {text: 'test5', weight: 2},
    {text: 'test6', weight: 2},
    {text: 'test7', weight: 4},
    {text: 'test8', weight: 4}, */
  ];
  show = false;
  ngOnInit() {

  }
  ngOnChanges() {
    const data = Object.entries(this.data2);
    data.forEach((element: any) => {
      const obj = {text: element[0], weight: Math.round(element[1])};
      this.data.push(obj);
    });
    this.show = true;
    console.log(this.data);
    /* this.data.forEach(val => {
      val.
    }); */
  }
}
