import { IoClose, IoMenu } from 'react-icons/io5';
import logo from '../logo.png';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Nav () {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <div className = "w-full h-fit">
        <div className='bg-[#ffd1dc] h-24 w-full flex items-center px-4 text-black overflow-hidden fixed top-0 z-10 shadow-md'>
            <div className = 'container px-20 flex justify-between items-center mx-auto'>
                <a href="/"><div className = 'flex justify-center items-center w-fit gap-4'><img
                    alt=""
                    src={logo}
                    width="80rem"
                    className="d-inline-block align-center"
                />
                <div className='font-logo font-medium' >New England Coalition</div>
                </div>
                </a>
            {/* <img src aria-controls="navbar-nav" /> */}
            <div className = "flex justify-between items-center gap-16 text-lg collapse xl:visible">
                <NavLink to="/" className="hover:underline" activeClassName="active">Home</NavLink>
                <NavLink to="/about" className="hover:underline" activeClassName="active">About</NavLink>
                <NavLink to="/board" className="hover:underline" activeClassName="active">Executive Board</NavLink>
                {/* <NavLink to="/events" className="hover:underline" activeClassName="active">Events</NavLink> */}
                {/* <NavLink to="/blog" className="hover:underline" activeClassName="active">Blog</NavLink> */}
                <NavLink to="/contact" className="hover:underline" activeClassName="active">Contact</NavLink>
            </div>
            <div className = "visible xl:collapse absolute right-10 top-50%">
                <div className={`transition-transform duration-300 ${showMenu ? 'rotate-180' : ''}`}>
                { showMenu ? <IoClose size={40} onClick = {() => setShowMenu(!showMenu)}/> : <IoMenu size={40} onClick = {() => setShowMenu(!showMenu)}/> }
                </div>
            </div>
        </div>  
      </div>    
      <div className = {`fixed right-0 top-20 bg-[#D8BFD8] text-black text-lg p-10 pr-20 shadow-lg transition-all duration-600 ${showMenu ? "visible opacity-100" : "collapse opacity-0"} xl:collapse`}>
                <div className = "block">
                    <div className = "mb-4"><Link to="/" className="hover:underline">Home</Link></div>
                    <div className = "mb-4"><Link to="/about" className="hover:underline">About</Link></div>
                    <div className = "mb-4"><Link to="/board" className="hover:underline">Executive Board</Link></div>
                    {/* <div className = "mb-4"><NavLink href="/events" className="hover:underline" activeClassName="active">Events</NavLink></div> */}
                    {/* <div className = "mb-4"><NavLink href="/blog" className="hover:underline" activeClassName="active">Blog</NavLink></div> */}
                    <div><Link to="/contact" className="hover:underline">Contact</Link></div>
                </div>
            </div>
      </div>
    );
}

export default Nav;