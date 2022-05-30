import React from 'react'
import './rightbar.css'

export default function Rightbar() {
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img src="assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birhday today.
          </span>
        </div>
        <img className="rightbarAd" src="assets/ad.png" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>

        <ul className="rightbarFriendList">

        <li className="rightbarFriend">
          <div className="rightbarProfileImgContainer">
            <img className="rightbarProfileImg" src="assets/person/4.jpeg" alt="" />
            <span className="rightbarOnline"></span>
          </div>
          <span className="rightbarUsername">Sam Mercy</span>
        </li>

        <li className="rightbarFriend">
          <div className="rightbarProfileImgContainer">
            <img className="rightbarProfileImg" src="assets/person/4.jpeg" alt="" />
            <span className="rightbarOnline"></span>
          </div>
          <span className="rightbarUsername">Sam Mercy</span>
        </li>

        <li className="rightbarFriend">
          <div className="rightbarProfileImgContainer">
            <img className="rightbarProfileImg" src="assets/person/4.jpeg" alt="" />
            <span className="rightbarOnline"></span>
          </div>
          <span className="rightbarUsername">Sam Mercy</span>
        </li>
        </ul>
      </div>
    </div>
  )
}
