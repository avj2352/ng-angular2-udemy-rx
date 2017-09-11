
import {Application,Request,Response} from 'express';
import {AllUserData} from "../../../shared/dao/all-user-data";
import {findDbThreadsPerUser} from "../persistence/findDbThreadsPerUser";
import * as _ from 'lodash';
import {dbMessages, dbParticipants} from "../db-data";
import {ParticipantModel} from '../../../shared/model/participant-model';
import {MessageModel} from "../../../shared/model/message-model";

export function apiGetUserThreads(app:Application) {

    app.route('/api/threads').get((req: Request, res: Response) => {

        const participantId = 1;

        const threadsPerUser = findDbThreadsPerUser(participantId);

        let messages: MessageModel[] = [],
            participantIds: string[] = [];

        threadsPerUser.forEach(thread => {

            const threadMessages: MessageModel[] = _.filter(dbMessages, (message:any) => message.threadId == thread.id);

            messages = messages.concat(threadMessages);

            participantIds  = participantIds.concat(_.keys(thread.pariticipantList));

        });

        const participants = _.uniq(participantIds.map(participantId => dbParticipants[participantId]));

        const response = {
            participants,
            messages,threads: threadsPerUser};

        res.status(200).json(response);

    });


}