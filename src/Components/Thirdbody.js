import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import '../styles/Thirdbody.css'

export default function Thirdbody({ children }) {
  return (
    <div>
      <div className="thirdcontent">
        <StaticImage className="exploreimagesone" src="../images/homePageimages/Image-5.png"/>
        <StaticImage className="exploreimagestwo" src="../images/homePageimages/Image-2.png"/>
        <StaticImage className="exploreimagesthree" src="../images/homePageimages/Image-3.png"/>
        <StaticImage className="exploreimages" src="../images/homePageimages/Image-4.png"/>
      </div>
      { children }
    </div>
  )
}
