import { IoMailOpen } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoTwitter } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaNewspaper } from "react-icons/fa";

function getLogoColors() {
    return {
        Facebook: '#3B5998',
        Instagram: '#E1306C',
        Twitter: '#1DA1F2',
        Email: 'purple',
        Newsletter: '#FF69B4'
    }
}

function getLinks() {
    return {
        Facebook: 'https://www.facebook.com/GirlUpBoston/',
        Instagram: 'https://www.instagram.com/girlupnewengland/',
        Twitter: 'https://x.com/guboscoalition',
        Email: 'mailto:girlupboston@gmail.com',
        Newsletter: 'https://actionnetwork.org/forms/join-our-email-list-75'
    }
}

function SocialCard({ size, iconSize, alt, text, title }) {
    const color = getLogoColors()[alt];
    const link = getLinks()[alt];
    
    return (
        <a href={link}>
        <div className='rounded-full h-16 w-16 flex items-center justify-center mx-auto hover:opacity-50' style={{ backgroundColor: color, maxHeight: size, maxWidth: size }}>
            {alt === 'Facebook' && <FaFacebookF size={iconSize} color="white"/>}
            {alt === 'Instagram' && <IoLogoInstagram size={iconSize} color="white"/>}
            {alt === 'Email' && <IoMailOpen size={iconSize} color="white"/>}
            {alt === 'Twitter' && <IoLogoTwitter size={iconSize} color="white"/>}
            {alt === 'Newsletter' && <FaNewspaper size={iconSize} color="white"/>}
        </div>
        <div className="text-center font-bold">{title}</div>
        <p className="text-center">{text}</p>
        </a>
    );
}

export default SocialCard;