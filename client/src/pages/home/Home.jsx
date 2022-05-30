import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import "./home.css"
import Topbar from '../../components/topbar/Topbar'

export default function Home() {
  return (
    <>
    <Topbar />

    <div className="homeContainer">
      <Sidebar />
      <Feed />
      <Rightbar />
    </div>
    </>

  )
}
