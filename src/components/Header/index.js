// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <ul className="header-items">
    <Link to="/" className="li-item">
      <li>Home</li>
    </Link>
    <Link to="/about" className="li-item">
      <li>About</li>
    </Link>
  </ul>
)

export default Header
