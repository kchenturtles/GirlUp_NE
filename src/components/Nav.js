import { IoClose, IoMenu } from 'react-icons/io5';
import logo from '../logo.png';
import { useState } from 'react';

function Nav () {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <div className = "w-full h-fit">
        <div className='bg-pink-400 h-24 w-full flex items-center px-4 text-black overflow-hidden fixed top-0 z-10 shadow-md'>
            <div className = 'container px-20 flex justify-between items-center mx-auto'>
                <div className = 'flex justify-center items-center w-fit gap-4'><img
                    alt=""
                    src={logo}
                    width="80rem"
                    className="d-inline-block align-center"
                />
                <div className='font-logo font-medium' >New England Coalition</div>
                </div>
            {/* <img src aria-controls="navbar-nav" /> */}
            <div className = "flex justify-between items-center gap-16 text-lg collapse xl:visible">
                <a href="/" className="hover:underline">Home</a>
                <a href="/about" className="hover:underline">About</a>
                <a href="/board" className="hover:underline">Executive Board</a>
                <a href="/events" className="hover:underline">Events</a>
                <a href="/blog" className="hover:underline">Blog</a>
                <a href="/contact" className="hover:underline">Contact</a>
            </div>
            <div className = "visible xl:collapse absolute right-10 top-50%">
                <div className={`transition-transform duration-300 ${showMenu ? 'rotate-180' : ''}`}>
                { showMenu ? <IoClose size={40} onClick = {() => setShowMenu(!showMenu)}/> : <IoMenu size={40} onClick = {() => setShowMenu(!showMenu)}/> }
                </div>
            </div>
        </div>  
      </div>    
      <div className = {`fixed right-0 top-20 bg-purple-400 text-black text-lg p-10 pr-20 shadow-lg transition-all duration-600 ${showMenu ? "visible opacity-100" : "collapse opacity-0"} xl:collapse`}>
                <div className = "block">
                    <div className = "mb-4"><a href="/" className="hover:underline">Home</a></div>
                    <div className = "mb-4"><a href="/about" className="hover:underline">About</a></div>
                    <div className = "mb-4"><a href="/board" className="hover:underline">Executive Board</a></div>
                    <div className = "mb-4"><a href="/events" className="hover:underline">Events</a></div>
                    <div className = "mb-4"><a href="/blog" className="hover:underline">Blog</a></div>
                    <div><a href="/contact" className="hover:underline">Contact</a></div>
                </div>
            </div>
      </div>
    );
}

export default Nav;