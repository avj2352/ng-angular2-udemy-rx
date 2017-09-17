import {ApplicationState} from '../../store/application-state';
import {ThreadModel} from '../../../../shared/model/thread-model';
import * as _ from 'lodash';

export function mapStoreToUserName(state:ApplicationState):string{
    return state.storeData.participants[state.uiState.userId].name;
}//end:mapToUserName

export function mapStoreToUnreadMessageCounter(state:ApplicationState):number{
    const currentUserId = state.uiState.currentThreadId;
    //reduce function
    //takes two arguments - 1. is the reducer function definition
    //2. The initial value for the accumulator which is 0.
    return _.values<ThreadModel>(state.storeData.threads)
      .reduce(
        (acc,thread)=>{return acc + thread.pariticipantList[currentUserId];},3);    
}//end:mapStoreToUnreadMessageCounter