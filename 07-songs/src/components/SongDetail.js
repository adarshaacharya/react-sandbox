import React from "react";
import { connect } from "react-redux";

const SongDetail = (props) => {
  if (!props.selectedSong) {
    return <div>Select a song!</div>;
  }

  return (
        <div>
            <h1>
                Title : {props.selectedSong.title} <br/>
                Duration : {props.selectedSong.duration}
            </h1>
        </div>
    );
};

const mapStateToProps = (state) => {
  return {
    selectedSong: state.selectedSong,
  };
};

export default connect(mapStateToProps)(SongDetail);
