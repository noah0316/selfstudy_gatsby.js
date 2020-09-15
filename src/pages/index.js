import React from "react"
import { Link } from "gatsby"

export default function Home() {
  return (
    <>
      <Link to="/contact">Contact</Link>
      <div style={{ color: `purple` }}>
        <h1>Hello world!</h1>
        <p> What a world.</p>
        <img src="https://source.unsplash.com/random/400x200" alt="" />
      </div>
    </>
  )
}
