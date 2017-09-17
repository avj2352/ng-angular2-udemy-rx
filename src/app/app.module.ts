import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {StoreModule} from '@ngrx/store';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//Custom Components/Services
import { AppComponent } from './app.component';
import { UserSelectionComponent } from './components/user-selection/user-selection.component';
import { MessageSelectionComponent } from './components/message-selection/message-selection.component';
import { ThreadSelectionComponent } from './components/thread-selection/thread-selection.component';
import { ThreadListComponent } from './components/thread-list/thread-list.component';
import { MessageListComponent } from './components/message-list/message-list.component';
import { HeaderComponent } from './components/header-component/header-component.component';
import { ThreadsService } from 'app/services/threads.service';

// Initial Store values
import {INITIAL_APPLICATION_STATE} from './store/application-state';
//Implement reducers
import * as reducerFunctions from './store/reducers/storeReducer';

@NgModule({
  declarations: [
    AppComponent,
    UserSelectionComponent,
    MessageSelectionComponent,
    ThreadSelectionComponent,
    ThreadListComponent,
    MessageListComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    StoreModule.provideStore(reducerFunctions.storeReducer,INITIAL_APPLICATION_STATE)
  ],
  providers: [
    ThreadsService    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
