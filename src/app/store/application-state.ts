import {UIState} from './ui-state';
import {StoreData} from './store-data';

export interface ApplicationState{
    uiState:UIState;
    storeData:StoreData;
}//end:ApplicationState