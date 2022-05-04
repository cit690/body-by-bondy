import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = (props) => {
  return ( 
    <nav>
      <Link to="/" style={{height: '100%'}}><img className='logo' src="../BBB_white.png" alt="" /></Link>
      <div className='page-links'>
        <p><Link to="/our-story" style={{ color: 'white', textDecoration: 'none' }}>Our Story</Link></p>
        <p><Link to="/faq" style={{ color: 'white', textDecoration: 'none' }}>FAQ</Link></p>
        <p><Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link></p>
      </div>
    </nav>
   );
}
 
export default NavBar;