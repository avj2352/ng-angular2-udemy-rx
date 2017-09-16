import {ParticipantModel} from '../model/participant-model';
import {ThreadModel} from '../model/thread-model';
import {MessageModel} from '../model/message-model';

export interface AllUserData{
    participants:ParticipantModel[];
    messages:MessageModel[];
    threads:ThreadModel[];
}//end:AllUserData