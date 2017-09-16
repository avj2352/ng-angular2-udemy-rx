export interface UIState {
    userId:number;
    currentThreadId:number;
}//end:interface-UIState

// A Great place to start the initial UI state is right next to the interface

export const INITIAL_UI_STATE:UIState = {
    userId:undefined,
    currentThreadId:undefined
};//end:INITIAL_UI_STATE