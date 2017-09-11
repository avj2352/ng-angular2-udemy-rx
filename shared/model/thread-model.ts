export interface ThreadModel {
    id:number;
    messageIdList: number[];
    pariticipantList:{[key:number]:number}; //This is how typescript Map is defined
}//end:interface-ThreadModel