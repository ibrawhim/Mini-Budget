import React from 'react'

let bgNavbar = {
  backgroundColor: '#6b533b'
}

const Navbar = () => {
  return (
    <>

<nav className="navbar" style={bgNavbar}>
  <div className="container-fluid">
    <a className="navbar-brand fw-semibold text-light" href="#" >Mini Budget</a>
  </div>
</nav>
    </>
  )
}

export default Navbar