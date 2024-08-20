import logo from '../logo.png';

function Footer () {
    return (
      <div className = "w-full h-fit bg-teal-100">
        <div className='container mx-auto flex justify-between items-center'>
            <img src={logo} alt="logo" width="80rem" className="d-inline-block align-center"/>
            <div>
                <div className = "text-lg">New England Coalition</div>
                <div className = "text-lg">Boston, MA</div>
            </div>
        </div>
      </div>
    );
}

export default Footer;