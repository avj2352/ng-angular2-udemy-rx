import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import * as _ from 'lodash';
//Custom Components
import {ThreadModel} from '../../../../shared/model/thread-model';
import { ThreadsService } from "app/services/threads.service";
import {ApplicationState} from '../../store/application-state';
import {LoadUserThreadsAction} from '../../store/actions/actions';
import {ThreadSummaryViewModel} from './view-model/thread-summary.vm';
import * as MapStoreFunctionModule from './map-store';

@Component({
  selector: 'thread-selection-component',
  templateUrl: './thread-selection.component.html',
  styleUrls: ['./thread-selection.component.scss']
})
export class ThreadSelectionComponent implements OnInit {

  userName$: Observable<string>;
  unreadMessageCounter$:Observable<number>;
  threadSummaries$:Observable<ThreadSummaryViewModel[]>;

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
    this.userName$ = store.skip(1).map(MapStoreFunctionModule.mapStoreToUserName);
    this.unreadMessageCounter$ = store.skip(1).map(MapStoreFunctionModule.mapStoreToUnreadMessageCounter);
    //select function - providing a function/expresison to store to transform the applicationState to view model
    this.threadSummaries$ = store.select(
      state=>{
      const threads = _.values<ThreadModel>(state.storeData.threads);
      return threads.map(thread => {
      debugger;
      const names = _.keys(thread.pariticipantList).map(participantId => state.storeData.participants[participantId].name);
      const lastMessageId = _.last(thread.messageIdList);
      return {
          id:thread.id,
          participantNames:_.join(names,','),
          lastMessageText:state.storeData.messages[lastMessageId].text
        };
      });
    }
  );
  }//end:constructor

  
  ngOnInit() {
    //Call the REST API - subscribe is similar to .then()
    //We are issuing a command for the store object to modify itself, so other parts of the page will receive the same data
    this.threadService.loadUserThreads()
    .subscribe(allUserData => {  this.store.dispatch(new LoadUserThreadsAction(allUserData));
    });
    ; //loads all the threads associated to a given user
  }//end:ngOnInit



}//end:class-ThreadSelectionComponent
