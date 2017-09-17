import {Action} from '@ngrx/store';
import * as _ from 'lodash';
//Custom components
import {ApplicationState} from './../application-state';
import {LoadUserThreadsAction, LOAD_USER_THREADS_ACTION} from './../actions/actions';

//Our first reducer function
export function storeReducer(state:ApplicationState, action:Action):ApplicationState{
    switch(action.type){
        case LOAD_USER_THREADS_ACTION:
            return handleLoadUserThreadsAction(state,action);            
        default:
            return state;
    }
}//end:storeReducer

//inbuilt function
function handleLoadUserThreadsAction(state:ApplicationState, action:LoadUserThreadsAction):ApplicationState{
    const userData = action.payload;
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