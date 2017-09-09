import { Component } from '@angular/core';
import { UserSelectionComponent } from './components/user-selection/user-selection.component';
import { MessageSelectionComponent } from './components/message-selection/message-selection.component';
import { ThreadSelectionComponent } from './components/thread-selection/thread-selection.component';
import { ThreadListComponent } from './components/thread-list/thread-list.component';
import { MessageListComponent } from './components/message-list/message-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';
  simpleMethod = ()=>{
    let myObj:{name:String} = {name:'Pramod'}; //NOTE in Typescript, we can assign even the datatype as a custom object    
    
  }//end:simpleMethod
}//end:class-AppComponent
