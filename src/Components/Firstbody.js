import React from 'react'
// import Navbar from './Navbar'
import '../styles/Firstbody.css'
import { StaticImage } from "gatsby-plugin-image"

export default function Firstbody({ children }) {
  return (
    <div>
        <div className="topbody">
        <div className="companylogo">
          <StaticImage src="../images/homePageimages/Original.png"/>
        </div>
        <div className="topbox">
            <p className="content">CHECK OUT</p>
            <StaticImage className="topArrow" src="../images/homePageimages/Arrow Right White.png" />
        </div>
        <div className="toptextwrapper">
        <div className="toptextone">
            <h1 className="textone">Together, we <br/>think big</h1>
        </div>
            <h3 className="texttwo">Know<br/>Our<br/>Story</h3>
        </div>
        <h5 className="textthree">M&nbsp;&nbsp; E&nbsp;&nbsp; E&nbsp;&nbsp; T&nbsp;&nbsp;&nbsp;&nbsp;T &nbsp;&nbsp;H&nbsp;&nbsp; E<br/>I&nbsp;&nbsp; N&nbsp;&nbsp; F&nbsp;&nbsp; L&nbsp;&nbsp; U &nbsp;&nbsp;E&nbsp;&nbsp; N&nbsp;&nbsp; C &nbsp;&nbsp;E&nbsp;&nbsp; R</h5>
        <div>
          </div>
      </div>
        { children }
    </div>
  )
}
