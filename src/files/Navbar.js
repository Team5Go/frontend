import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { FaBars, FaTimes} from 'react-icons/fa'
import {BiFoodMenu} from 'react-icons/bi'
import '../App.css'

const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const[color, setColor] = useState(false)
        const changeColor = () => {
            if(window.scrollY >=100) {
                setColor(true)
            } else {
                setColor(false)
            }
        }

        window.addEventListener('scroll', changeColor)


  return (
      <div className={color ? 'header header-bg' : 'header' }>
        <Link className='icon' to='/'>
        <BiFoodMenu size={40} style={{marginLeft: '4px'}} />
        </Link>

        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li>
                <Link to ='/'>Home</Link>
            </li>

            <li>
                <Link to ='/reservation'>Reservation</Link>
            </li>

            <li>
                <Link to ='/menu'>Menu</Link>
            </li>

            <li>
                <Link to ='/about'>About</Link>
            </li>

            <li>
                <Link to ='/contact'>Contact</Link>
            </li>
        </ul>

        <div className='hamburger' onClick={handleClick}>
            {click ? (<FaTimes size={25} style ={{color: 'black'}} />) : (<FaBars size={25} style ={{color: 'black'}}/>)}
        </div>

      </div>
  )
};

export default Navbar;
