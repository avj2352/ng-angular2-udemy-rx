export interface MessageModel{
    id:number;
    threadId:number; //Each message will belong to a particular thread
    participantId:number;
    text:string;
    timestamp:number;
}//end:interface-MessageModel