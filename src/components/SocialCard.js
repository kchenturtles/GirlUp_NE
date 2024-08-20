import { IoMailOpen } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoTwitter } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";

function getLogoColors() {
    return {
        Facebook: '#3B5998',
        Instagram: '#E1306C',
        Twitter: '#1DA1F2',
        Email: '#D8BFD8',
    }
}

function SocialCard({ src, alt, text, title }) {
    const color = getLogoColors()[alt];
    
    return (
        <div>
        <div className={`rounded-full h-16 w-16 flex items-center justify-center mx-auto`} style={{ backgroundColor: color }}>
            {alt === 'Facebook' && <FaFacebookF size={40} color="white"/>}
            {alt === 'Instagram' && <IoLogoInstagram size={40} color="white"/>}
            {alt === 'Email' && <IoMailOpen size={40} color="white"/>}
            {alt === 'Twitter' && <IoLogoTwitter size={40} color="white"/>}
        </div>
        <div className="text-center font-bold">{title}</div>
        <p className="text-center">{text}</p>
        </div>
    );
}

export default SocialCard;