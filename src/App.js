import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import SidebarContainer from "./components/Sidebar/SidebarContainer";
import { Route } from "react-router-dom";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <SidebarContainer />
      <div className="app-wrapper-content">
        <Route path="/dialogs" render={() => <DialogsContainer />} />
        <Route path="/profile" render={() => <Profile />} />
        <Route path="/news" component={News} />
        <Route path="/music" component={Music} />
        <Route exact path="/settings" component={Settings} />
      </div>
    </div>
  );
};
export default App;
