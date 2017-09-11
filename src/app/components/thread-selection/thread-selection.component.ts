import { Component, OnInit } from '@angular/core';
import { ThreadsService } from "app/services/threads.service";

@Component({
  selector: 'thread-selection-component',
  templateUrl: './thread-selection.component.html',
  styleUrls: ['./thread-selection.component.sass']
})
export class ThreadSelectionComponent implements OnInit {

  constructor(private threadService:ThreadsService) { 

  }//end:constructor

  ngOnInit() {
    //Call the REST API 
    this.threadService.loadUserThreads(); //loads all the threads associated to a given user
  }//end:ngOnInit

}
