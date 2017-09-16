import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {ApplicationState} from '../../store/application-state';

@Component({
  selector: 'message-selection-component',
  templateUrl: './message-selection.component.html',
  styleUrls: ['./message-selection.component.sass']
})
export class MessageSelectionComponent implements OnInit {

  constructor(
    private store:Store<ApplicationState>
  ) {
    store.subscribe(
      res => {console.log('Message section received: ', res);}
    );

   }//end:constructor

  ngOnInit() {
  }

}
