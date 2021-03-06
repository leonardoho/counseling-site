import React from "react"
import { Link } from "gatsby"

import Layout from "../layout"
import Image from "../image"
import SEO from "../seo"
import backgroundImage from "../../images/tutor1.jpg"

import './style.scss'


const HomepageCard = () => (
  <div className='card'>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default HomepageCard
