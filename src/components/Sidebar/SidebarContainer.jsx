import React from "react";
import {
  updateCommentCreator,
  sendCommentCreator
} from "../../redux/sidebar-reducer";
import Sidebar from "./Sidebar";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    sidebar: state.sidebar
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    onchangecomment: (comment) => {
      dispatch(updateCommentCreator(comment));
    },
    onSendComment: () => {
      dispatch(sendCommentCreator());
    }
  };
};

const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar);
export default SidebarContainer;
