import { Component, OnInit } from '@angular/core';
import { ThreadsService } from "app/services/threads.service";
import {Store} from '@ngrx/store';
import {ApplicationState} from '../../store/application-state';
import {LoadUserThreadsAction} from '../../store/actions/actions';

@Component({
  selector: 'thread-selection-component',
  templateUrl: './thread-selection.component.html',
  styleUrls: ['./thread-selection.component.sass']
})
export class ThreadSelectionComponent implements OnInit {

  constructor(
    private threadService:ThreadsService,
    private store:Store<ApplicationState>
  ) { 

    store.subscribe(
      res => {
        console.log('Response from Store Observable is: ', res);
      }
    );//end:subscribe

  }//end:constructor

  ngOnInit() {
    //Call the REST API - subscribe is similar to .then()
    //We are issuing a command for the store object to modify itself, so other parts of the page will receive the same data
    this.threadService.loadUserThreads()
    .subscribe(allUserData => {  this.store.dispatch(new LoadUserThreadsAction(allUserData));
    });
    ; //loads all the threads associated to a given user
  }//end:ngOnInit

}
