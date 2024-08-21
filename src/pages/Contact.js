import SocialCard from "../components/SocialCard";
import lobbyday1 from "../images/lobbyday-1.jpg";
import { Helmet } from "react-helmet";
import { useState } from "react";

function Contact() {
   const [message, setMessage] = useState('');
   
    return (
      <div>
        <Helmet>
            <title>Contact | Girl Up New England Coalition</title>
        </Helmet>
        <div className="bg-[#ffd1dc] w-full flex items-center justify-center px-4 text-black overflow-hidden pb-20">
          <div>
          <h1 className="text-center py-20">Contact</h1>
          <div className="mx-auto flex flex-wrap gap-8 justify-center px-4">
            <SocialCard alt='Facebook' title="Facebook" text="Girl Up Boston Coalition" size="" iconSize="40"/>
            <SocialCard alt='Instagram' title="Instagram" text="@girlupnewengland" size="" iconSize="40"/>
            <SocialCard alt='Email' title="Email Us" text="girlupboston@gmail.com" size="" iconSize="40"/>
            <SocialCard alt='Twitter' title="Twitter" text="@GUBosCoalition" size="" iconSize="40"/>
            <SocialCard alt='Newsletter' title="Newsletter" text="Join our email list!" size="" iconSize="40"/>
          </div>
          </div>
        </div>
        <div className="bg-gradient-to-b from-[#FFF5EE] via bg-[#ffd1dc] to bg-[#ffd1dc]">
          <div className = "w-fit mx-auto py-20 grid">
            <div className="grid grid-cols-1 xl:grid-cols-2 bg-pink-100 shadow-lg items-center">
              <img src={lobbyday1} alt="capital" height="auto" width="auto" className="max-w-96 m-8" />
              <div className="prose text-center xl:text-left">
                <h3>Leave A Comment</h3>
                <div>
                <label class="custom-field two">  
                 <input type="text" placeholder="&nbsp;"/>
                 <span class="placeholder">Name</span>
                </label>
                </div>
                <div>
                <label class="custom-field two">  
                 <input type="text" placeholder="&nbsp;"/>
                 <span class="placeholder">Email</span>
                </label>
                </div>
                <div>
                <div class="custom-field two">  
                 <textarea rows="5" cols="50" placeholder="&nbsp;"/>
                 <span class="placeholder">Message</span>
                </div>
                </div>
                <button class="p-2 bg-pink-300 rounded-sm hover:opacity-50 text-sm mt-2 mb-16 w-[350px]" onClick = {() => setMessage('Message sent!')}>Post Comment</button>
                <div>{message}</div>
              </div>
            </div>
        </div>
      </div>
    </div>
    );
}

export default Contact;

