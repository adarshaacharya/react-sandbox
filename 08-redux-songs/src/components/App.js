import React from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';

const App = () => {
    return (
        <div className="ui container grid" style={{marginTop: 30}}>
            <div className="ui row">
                <div className="eight wide column">
                    <SongList />
                </div>

                <div className="eight wide column">
                    <SongDetail />
                </div>
            </div>
        </div>
    )
}


export default App; 