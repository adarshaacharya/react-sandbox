import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchUser } from "../actions";

class UserHeader extends Component {
  // componentDidMount() {
  //   this.props.fetchUser(this.props.userId); // action creator
  // }

  render() {
    const user = this.props.user;
    if (!user) {
      return null;
    }

    return <div className="header">{user.name}</div>;
  }
}

// Mapp state from reducer
const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find((user) => user.id === ownProps.userId) };
}; // compare userId from array of users(api) and props userId


// optimized
export default connect(mapStateToProps)(UserHeader);



// OG !!
// export default connect(mapStateToProps, {
//   fetchUser: fetchUser, // map actions
// })(UserHeader);
