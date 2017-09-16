import {UIState,INITIAL_UI_STATE} from './ui-state';
import {StoreData, INITIAL_STORE_DATA} from './store-data';

export interface ApplicationState{
    uiState:UIState;
    storeData:StoreData;
}//end:ApplicationState

//NOTE: A Great place to start the initial application state of the project

export const INITIAL_APPLICATION_STATE:ApplicationState = {
    uiState:INITIAL_UI_STATE,
    storeData: INITIAL_STORE_DATA
};//end:INITIAL_APPLICATION_STATE