import {Action} from '@ngrx/store';
import {Actions} from '@ngrx/effects';
import * as _ from 'lodash';
//Custom components
import {ApplicationState} from './../application-state';
import {LoadUserThreadsAction, UserThreadsLoadedAction, LOAD_USER_THREADS_ACTION, USER_THREADS_LOADED_ACTION} from './../actions/actions';

//Our first reducer function
export function storeReducer(state:ApplicationState, action:Action):ApplicationState{
    switch(action.type){        
        case USER_THREADS_LOADED_ACTION:
            return handleUserThreadsLoadedAction(state,<any>action);             
        default:
            return state;
    }
}//end:storeReducer

//inbuilt function
function handleUserThreadsLoadedAction(state:ApplicationState, action:UserThreadsLoadedAction):ApplicationState{
    const userData = action.payload;
    // const currentUserId = state.uiState.currentThreadId;
    //Create a clone using Typescript
    const newState:ApplicationState = Object.assign({},state);
    //Just an awesome one liner for using lodash to create a map.
    newState.storeData = {
        participants: _.keyBy(action.payload.participants,'id'),
        messages: _.keyBy(action.payload.messages,'id'),
        threads:_.keyBy(action.payload.threads,'id')
    };
    newState.uiState = {
        userId:action.payload.participants[0].id,
        currentThreadId:action.payload.threads[0].id
    };    
    return newState;
}//end:handleLoadUserThreadsAction