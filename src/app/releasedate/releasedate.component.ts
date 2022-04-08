import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'releasedate',
  templateUrl: './releasedate.component.html',
  styleUrls: ['./releasedate.component.scss']
})
export class ReleasedateComponent implements OnInit {
  // isReleased is true, then the date is past
  // isReleased is false, then the date is in the future
  // @Input() isReleased:boolean = true;
  @Input() isItFuture: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
