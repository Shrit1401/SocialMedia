import React from 'react'
import { MoreVertical } from 'react-feather'
import './post.css'

export default function Post() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src="assets/person/5.jpeg"
              alt=""
            />
            <span className="postUsername">
              Aditya Balodi
            </span>
            <span className="postDate">9 december</span>
          </div>
          <div className="postTopRight">
            <MoreVertical />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">Hey it's my first post</span>
          <img className="postImg" src="assets/post/5.jpeg" alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="assets/like.png"alt="" />
            <span className="postLikeCounter">32 people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">9 comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}
