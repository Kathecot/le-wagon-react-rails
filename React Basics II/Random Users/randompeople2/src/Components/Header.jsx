import React from 'react'

const Header = ({ query, setQuery }) => {
  return (
    <nav className="navbar navbar-light bg-dark">
      <div className="container-fluid">
        <a href className="navbar-brand text-light">Navbar</a>
        <div>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Header
