import _ from "lodash";

import jsonPlaceholder from "../apis/jsonPlaceholder";


export const fetchPostsAndUsers = () => {
  return async (dispatch, getState) => {
    await dispatch(fetchPosts());

    const userIds =  _.uniq(_.map(getState().posts, 'userId'));

    userIds.forEach(id => dispatch(fetchUser(id)));
  };
};


//action creator which gets dispatch & goes to reducer
export const fetchPosts = () => {
  return async (dispatch) => {
    const response = await jsonPlaceholder.get("/posts"); // posts is endpoint

    dispatch({
      type: "FETCH_POSTS",
      payload: response.data,
    });
  };
};

// throws the action and then go(dispatch) to the reducer for checking type of action and return data

export const fetchUser = (id) => {
  return async (dispatch) => {

    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({
      type: "FETCH_USER",
      payload: response.data,
    });
  };
};





// MEMOIZED VERSION OF ABLOVE CODE !!!

// export const fetchUser = (id) => {
//   return (dispatch) => {
//     _fetchUser(id, dispatch);
//   };
// };

// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);

//   dispatch({
//     type: "FETCH_USER",
//     payload: response.data,
//   });
// });
