import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import { Link } from 'gatsby'
import '../styles/Secondbody.css'


export default function Secondbody({ children }) {
  return (
    <div>
        <div className="secondcontent">
        <div className="contentwrapper">
        <h4 className="">Who are we ?</h4>
        <div className="contentabout">
        <h2>Hey, We are SOZO PR</h2>
        <h4>an independent creative firm, obsessive about <br/>
            helping people with concepts that leaves<br/>
            them and their brand inspired.</h4>
        </div>
        <div className="aboutmore">
        <Link className="moretext"><h5>M O R E</h5></Link>   
        <h3 className="aboutustext">about us</h3> 
        </div>
        </div>
      </div>
        { children }
    </div>
  )
}
