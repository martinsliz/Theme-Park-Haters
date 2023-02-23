import { Link } from 'react-router-dom'
import '../styles/Nav.css'

const Nav = () => {
  return (
    <header>
      <nav>
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/about">
          About
        </Link>
        {/* //sad */}
      </nav>
    </header>
  )
}

export default Nav
