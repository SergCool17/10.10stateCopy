import React from "react";
import MyPosts from "./MyPosts";

import {
  addPostActionCreator,
  updateNewPostTextActionCreator
} from "../../../redux/profile-reducer";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    onAddPost: () => {
      dispatch(addPostActionCreator());
    },
    onPostChange: (text) => {
      dispatch(updateNewPostTextActionCreator(text));
    }
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;
