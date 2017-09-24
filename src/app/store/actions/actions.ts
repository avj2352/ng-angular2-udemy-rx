import {Action} from '@ngrx/store';
import {Actions} from '@ngrx/effects';
import {AllUserData} from '../../../../shared/dao/all-user-data';

export const USER_THREADS_LOADED_ACTION = 'USER_THREADS_LOADED_ACTION';
export const LOAD_USER_THREADS_ACTION = 'LOAD_USER_THREADS_ACTION';

export class LoadUserThreadsAction implements Action{
    type = LOAD_USER_THREADS_ACTION;    
}//end:class-LoadUserThreadsAction

export class UserThreadsLoadedAction implements Action {
    type = USER_THREADS_LOADED_ACTION;
    constructor(public payload?:AllUserData){
        
    }//end:constructor
    
}//end:class-UserThreadsLoadedAction