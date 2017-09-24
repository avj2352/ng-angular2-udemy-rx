import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Actions, Effect} from '@ngrx/effects'; //Actions from @ngrx/effects is different from  
import {Action} from '@ngrx/store'; // Action from @ngrx/store library
import {ThreadsService} from './../../services/threads.service';
import {LOAD_USER_THREADS_ACTION, USER_THREADS_LOADED_ACTION, UserThreadsLoadedAction} from './../actions/actions';

@Injectable()
export class LoadThreadEffectService {

  constructor(private actions$:Actions, private threadService:ThreadsService) {

   }//end:constructor

   @Effect() userThreads$: Observable<Action> = this.actions$
   .ofType(LOAD_USER_THREADS_ACTION)   
   .switchMap(() => this.threadService.loadUserThreads())   
   .map(allUserData => new UserThreadsLoadedAction(allUserData) );

}//end:class-LoadThreadEffectService
