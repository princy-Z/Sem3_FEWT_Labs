import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <div>
      <nav>
          <Link to="/">Home</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/about">About Us</Link>
          <Link to="/service">Service</Link>
          <Link to="/info">About Us</Link>
      </nav>
    </div>

    <div>
      <Outlet/>
    </div>

    <div>
      <footer>
        &copy; MY website
      </footer>
    </div>
    </>
  )
}

export default Layout
