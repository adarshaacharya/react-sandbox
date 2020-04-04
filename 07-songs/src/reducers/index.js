import { combineReducers } from 'redux';

// returns list of songs
const songReducer = () => {
  return [
    { title: "No Scrubs", duration: "4:05" },
    { title: "Summer of 68", duration: "2:35" },
    { title: "Backstreet Boys", duration: "5:05" },
    { title: "Champions", duration: "6:10" }
  ];
};


const selectedSongReducer = (selectedSong=null, action) => {
    if(action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};



export default combineReducers({
    songs : songReducer,
    selectedSong : selectedSongReducer
});