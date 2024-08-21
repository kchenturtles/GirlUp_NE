import logo from '../logo.png';
import SocialCard from './SocialCard';
import { Link } from 'react-router-dom';

function Footer () {
    return (
      <div>
      <div className = "w-full h-fit bg-[#D8BFD8] p-12">
        <div className='container mx-auto max-w-[48rem] flex flex-wrap justify-center lg:justify-between items-center gap-8'>
            <img src={logo} alt="logo" width="80rem" className="d-inline-block align-center"/>
            <div className="text-center text-lg">
              <div className="mx-auto flex gap-4 justify-center px-4">
                <SocialCard alt='Facebook' title="" text="" size="3rem" iconSize="25"/>
                <SocialCard alt='Instagram' title="" text="" size="3rem" iconSize="25"/>
                <SocialCard alt='Email' title="" text="" size="3rem" iconSize="25"/>
                <SocialCard alt='Twitter' title="" text="" size="3rem" iconSize="25"/>
                <SocialCard alt='Newsletter' title="" text="" size="3rem" iconSize="25"/>
              </div>
              <div className="mt-2">Girl Up New England Coalition</div>
              <div>Boston, MA</div>
            </div>
            <div className = "block text-lg">
              <div className = "mb-1"><Link to="/" className="hover:underline">Home</Link></div>
              <div className = "mb-1"><Link to="/about" className="hover:underline">About</Link></div>
              <div className = "mb-1"><Link to="/board" className="hover:underline">Executive Board</Link></div>
              {/* <div className = "mb-4"><NavLink href="/events" className="hover:underline" activeClassName="active">Events</NavLink></div> */}
              {/* <div className = "mb-4"><NavLink href="/blog" className="hover:underline" activeClassName="active">Blog</NavLink></div> */}
              <div><Link to="/contact" className="hover:underline">Contact</Link></div>
           </div>
        </div>
      </div>
      <div className="w-full bg-[#D8BFD8] text-center p-2">Copyright © 2024 The Girl Up New England Coalition. All rights reserved.</div>
      </div>
    );
}

export default Footer;