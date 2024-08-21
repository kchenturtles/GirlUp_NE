import SocialCard from "../components/SocialCard";
import lobbyday1 from "../images/lobbyday-1.jpg";
import { Helmet } from "react-helmet";

function Contact() {
    return (
      <div>
        <Helmet>
            <title>Contact | Girl Up New England Coalition</title>
        </Helmet>
        <div className="bg-[#ffd1dc] w-full flex items-center justify-center px-4 text-black overflow-hidden pb-20">
          <div>
          <h1 className="text-center py-20">Contact</h1>
          <div className="mx-auto flex flex-wrap gap-4 justify-center px-4">
            <SocialCard alt='Facebook' title="Facebook" text="Girl Up Boston Coalition"/>
            <SocialCard alt='Instagram' title="Instagram" text="@girlupnewengland"/>
            <SocialCard alt='Email' title="Email Us" text="girlupboston@gmail.com"/>
            <SocialCard alt='Twitter' title="Twitter" text="@GUBosCoalition"/>
          </div>
          </div>
        </div>
        <div className="bg-gradient-to-b from-[#FFF5EE] via bg-[#ffd1dc] to bg-[#ffd1dc]">
          <div className = "w-fit mx-auto py-20 grid">
            <div className="grid grid-cols-1 xl:grid-cols-2 bg-pink-100 shadow-lg">
              <img src={lobbyday1} alt="capital" height="auto" width="auto" className="max-w-96 m-8" />
              <div className="prose text-center xl:text-left">
                <h2>Join Us!</h2>
                <div>
                <label class="custom-field two"> Name:  
                 <input type="text" placeholder="&nbsp;"/>
                 <span class="placeholder">Your name</span>
                </label>
                </div>
                <div>
                <label class="custom-field two">Email:  
                 <input type="text" placeholder="&nbsp;"/>
                 <span class="placeholder">Enter email</span>
                </label>
                </div>
                <button class="p-2 bg-pink-400 rounded-lg hover:opacity-50 text-sm mt-5 mb-20">Subscribe to our email list!</button>
              </div>
            </div>
        </div>
      </div>
    </div>
    );
}

export default Contact;

