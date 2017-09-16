import {ParticipantModel} from '../../../shared/model/participant-model';
import {ThreadModel} from '../../../shared/model/thread-model';
import {MessageModel} from '../../../shared/model/message-model';

export interface StoreData{
    participants:{[key:number]:ParticipantModel};
    threads:{[key:number]:ThreadModel};
    messages:{[key:number]:MessageModel};
}//end:StoreData

// A Great place to define the initial state of the interface is right next to it
// We will create empty maps in the initial_store_data state
export const INITIAL_STORE_DATA:StoreData = {
    participants:{},
    threads:{},
    messages:{}
};//endL