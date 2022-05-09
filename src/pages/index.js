import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from 'gatsby'
import "../styles/homePage.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Firstbody from "../components/Firstbody"
import Secondbody from "../components/Secondbody"
import Thirdbody from "../components/Thirdbody"
// import {Row} from 'react-bootstrap'

export default function Home() {
  return <div className="body">
      <Firstbody/>
      <Secondbody/>
      <Thirdbody/>
      <div className="fourthcontent"></div>
      <div className="fifthcontent"></div>
      <div className="fourthcontent"></div>
  </div>
}