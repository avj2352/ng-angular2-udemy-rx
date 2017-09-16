import {ParticipantModel} from '../../../shared/model/participant-model';
import {ThreadModel} from '../../../shared/model/thread-model';
import {MessageModel} from '../../../shared/model/message-model';

export interface StoreData{
    participants:{[key:number]:ParticipantModel}; //is a map, with key as number and value as ParticipantModel
    threads:{[key:number]:ThreadModel};
    messages:{[key:number]:MessageModel};
}//end:StoreData