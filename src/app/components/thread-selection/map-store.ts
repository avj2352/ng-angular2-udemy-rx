import {ApplicationState} from '../../store/application-state';
import {ThreadModel} from '../../../../shared/model/thread-model';
import {ThreadSummaryViewModel} from './view-model/thread-summary.vm';
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

export function mapStoreToThreadSummaries(state:ApplicationState):ThreadSummaryViewModel[]{
        const threads = _.values<ThreadModel>(state.storeData.threads);
        return threads.map(thread => {        
            const names = _.keys(thread.pariticipantList).map(participantId => state.storeData.participants[participantId].name);
            const lastMessageId = _.last(thread.messageIdList);
            const lastMessage = state.storeData.messages[lastMessageId];
            return {
                id:thread.id,
                participantNames:_.join(names,','),
                lastMessageText:lastMessage.text,
                timestamp:lastMessage.timestamp
              };
        });            
}//end:mapStoreToThreadSummaries