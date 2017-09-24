import { Component, OnInit, Input } from '@angular/core';
import {ThreadSummaryViewModel} from './../thread-selection/view-model/thread-summary.vm';

@Component({
  selector: 'thread-list-component',
  templateUrl: './thread-list.component.html',
  styleUrls: ['./thread-list.component.scss']
})
export class ThreadListComponent implements OnInit {

  @Input()
  threads:ThreadSummaryViewModel[];

  constructor() { }

  ngOnInit() {
  }

}
