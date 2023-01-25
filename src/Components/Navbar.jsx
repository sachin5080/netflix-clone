import React, { useState } from 'react'
import "./Navbar.scss"

export default function Navbar() {
  const [isScrolled, setIsScrolled]= useState(false);
window.onscroll= () => {
  setIsScrolled(window.pageYOffset===0 ? false : true)
  return () => (window.onscroll= null);
};
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="netflixlogo" />
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and popular</span>
          <span>My list</span>
          </div>
          <div className="right">
          <i className="bi bi-search"></i>
          <span> KID </span>
          <i className="bi bi-bell-fill" ></i>
          <img src="https://i.tribune.com.pk/media/images/1947471-thomas-1554890232/1947471-thomas-1554890232.png" alt="profilepic" />
          <div className="profile">
          <i className="bi bi-caret-down-fill" ></i>
          <div className="options">
            <span>Settings</span>
            <span>Logout</span>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}
