import React, { Component } from "react";
import { connect } from "react-redux"; //
import { selectSong } from "../actions";

class SongList extends Component {
  handleClick = (song) => {
    this.props.selectSong(song);
  };
  renderList() {
    return this.props.songs.map((song) => {
      return ( 
        <div className="item" key={song.title}>
          <div className="right floatedcontent">
            <button
              className="ui primary button"
              onClick={() => this.handleClick(song)}
            >
              Select
            </button>
          </div>

          <div className="content">{song.title} </div>
        </div>
      );
    });
  }

  render() {
    // console.log(this.props.selectSong)
    return <div className="ui  divided list">{this.renderList()}</div>;
  }
}

// Take data inside reducerStore and change into props
const mapStateToProps = (state) => {
  return { songs: state.songs }; // return obj that is going to show as props in App component
};

export default connect(mapStateToProps, {
  selectSong: selectSong,
})(SongList); // we want list of son gs out of redux store(from the  provider)

// LIKE BOLER_PLATE
