import React from "react";
import s from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={s.header}>
      <div className={s.logo}>
        <p> BCOOL </p>
      </div>
      <div className={s.pageName}>Profile Page</div>
      <textarea className={s.search} placeholder="Search friends" />
      <div className={s.searchFriends}>Find Friends</div>
      <div className={s.nav_menu}>
        <a href="/smile">smile</a>
        <a href="/msg">msg</a>
        <a href="/news">news</a>
        <a href="/ava">miniAva+Name+status</a>
      </div>
    </header>
  );
};
export default Header;
