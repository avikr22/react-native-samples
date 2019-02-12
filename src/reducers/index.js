import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';

export default combineReducers({
    //single key of libraries that will return an empty array rit now 
    libraries: LibraryReducer
})