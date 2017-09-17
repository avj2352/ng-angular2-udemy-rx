import { Component, OnInit } from '@angular/core';
import { ThreadsService } from "app/services/threads.service";
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {ApplicationState} from '../../store/application-state';
import {LoadUserThreadsAction} from '../../store/actions/actions';

@Component({
  selector: 'thread-selection-component',
  templateUrl: './thread-selection.component.html',
  styleUrls: ['./thread-selection.component.scss']
})
export class ThreadSelectionComponent implements OnInit {

  userName$: Observable<string>;

  constructor(
    private threadService:ThreadsService,
    private store:Store<ApplicationState>
  ) { 

    // STEP1: You can assign username this way
    // store
    // .skip(1)
    // .subscribe(
    //   res => {
    //     this.userName = res.storeData.participants[1].name;
    //   }
    // );//end:subscribe

    // STEP2: Or you can assign username this way
    this.userName$ = store.skip(1).map(this.mapStateToUserName);
  }//end:constructor

  
  ngOnInit() {
    //Call the REST API - subscribe is similar to .then()
    //We are issuing a command for the store object to modify itself, so other parts of the page will receive the same data
    this.threadService.loadUserThreads()
    .subscribe(allUserData => {  this.store.dispatch(new LoadUserThreadsAction(allUserData));
    });
    ; //loads all the threads associated to a given user
  }//end:ngOnInit

  mapStateToUserName(state:ApplicationState):string{
    return state.storeData.participants[state.uiState.userId].name;
  }//end:mapToUserName

}//end:class-ThreadSelectionComponent
