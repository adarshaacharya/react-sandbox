import { combineReducers } from "redux";

import songReducer from './songReducer';
import selectedSongReducer from './selectSongReducer';

const allReducers =  combineReducers({
  songs: songReducer,
  selectedSong: selectedSongReducer,
});


export default allReducers;