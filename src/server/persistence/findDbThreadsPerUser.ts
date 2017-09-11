

import {ThreadModel} from "../../../shared/model/thread-model";
import {dbThreads} from "../db-data";
import * as _ from 'lodash';

export function findDbThreadsPerUser(participantId:number) {

    const allThreads: ThreadModel[] = _.values<ThreadModel>(dbThreads);


    return _.filter(allThreads, thread =>
        _.includes( _.keys(thread.pariticipantList), participantId.toString() )
    )

}