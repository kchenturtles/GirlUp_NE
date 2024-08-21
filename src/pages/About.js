import React from "react";
import { Helmet } from "react-helmet";
import capital from "../images/capital.jpg";
import congressional from "../images/congressional.jpeg";

function About() {
    return (
      <div className = "bg-gradient-to-b from-[#FFF5EE] via bg-[#ffd1dc] to bg-[#ffd1dc] pb-24">
        <Helmet> 
            <title>About | Girl Up New England Coalition</title>
        </Helmet>
        <h1 className = "py-10 pt-20">About</h1>
        <div className="container prose-container">
            <h2>Welcome to the Girl Up New England Coalition!</h2>
            <div className="prose">The Girl Up Boston Coalition is a group of Girl Up clubs and campuses in the Greater Boston area.</div>
            <div className="prose">No matter their background, girls have the power to transform themselves, their communities, and the world around them. Girl Up is a global movement of empowered young women leaders who defend gender equality. Through leadership development training, Girl Up gives girls the resources and platform to start a movement for social change wherever they are. For those who stand with us in this movement, there is no rest until we achieve equal rights for every girl. Because when girls rise, we all rise.</div>
            <div className="prose">Girl Up was founded by the United Nations Foundation in 2010, and continues to work across a global community of partners to achieve gender equality worldwide. Girl Up works in six focus countries, Guatemala, Ethiopia, Liberia, India, Uganda, and Malawi, to empower girls and ensure they have things like lanterns, bikes, and birth certificates.</div>
            <div className="prose">The Coalition consists of our Co-Presidents and Executive Board members from across New England who work together to organize Girl Up events, lead actions for gender equality, and support Girl Up clubs in the region.</div>
            <div className="prose">The New England Coalition organizes an annual New England Girl Up Summit in the spring, bringing together hundreds of girls from across New England to be inspired by local women leaders and hone concrete skills in advocacy and fundraising. In the past, we have had workshops, panels, and keynote speakers who have included Representative Liz Miranda and state Senator Diana DiZoglio, and videos from leaders including Senator Elizabeth Warren. The coalition has also organized events ranging from a Global 5K around the Charles River as well as Advocacy and STEM bootcamps to annual Soirées and feminine hygiene product drives for women in need.</div>
        </div>
        <div className="container prose-container">
            <img src={congressional} className="w-full" alt="Capital Building"/>
        </div>
        <div className="container prose-container">
            <h2>Our Mission</h2>
            <div className="prose">When looking at how we could make the greatest impact for girls in developing countries, Girl Up has identified the following five areas as critical areas for support:</div>  
            <ul>
                <li><strong>Education: </strong>Helping girls go to school and stay in school</li>
                <li><strong>Health: </strong>Ensuring access to health and nutrition information</li>
                <li><strong>Safety: </strong>Preventing and protecting from all gender-based violence</li>
                <li><strong>Leadership: </strong>Ensuring access to skills-building workshops and opportunities</li>
                <li><strong>Documentation: </strong>Ensuring all girls are counted by receiving birth documentation and data on girls</li>
            </ul>
            <div className="prose">As the New England Coalition Executive Board, we have identified four focuses for our work in supporting and mobilizing girls in advocating for these areas of impact in the New England region:</div>
            <ul>
                <li><strong>Women in STEM</strong></li>
                <li><strong>Regional Engagement</strong></li>
                <li><strong>Advocacy</strong></li>
                <li><strong>Community Service</strong></li>
            </ul>
        </div>
        <div className="container prose-container">
            <h2>Girls As Advocates</h2>
            <div className="prose">Girl Up is a borderless movement, with nearly half a million supporters and advocates from around the world. Our unique leadership training and skill development has created a generation of current and future girl leaders; leaders who have helped Girl Up raise millions of dollars for United Nations programs, lobbied members of Congress to stop child marriage and ensure that girls are registered at birth, and have showed their schools, friends and communities the true power of girls.</div>  
        </div>
        <div className="container prose-container">
            <img src={capital} className="w-full" alt="Capital Building"/>
        </div>
        <div className="container prose-container">
            <h2>Our Impact</h2>
            <div className="prose">Since 2010, Girl Up has partnered with the United Nations to fund programs that give girls an equal chance for education, health, social and economic opportunities, and a life free from violence.</div>
            <div className="prose">To date, Girl Up has supported over 300,000 girls in 155+ countries through:</div>
            <ul>
              <li><strong>Joint UN Programs that comprehensively support girls</strong><br/>Girl Up has invested in joint UN programs in Liberia, Guatemala, Ethiopia and Malawi since our launch in 2010. These comprehensive programs focus on education, health, safety, leadership and being counted. They combine the efforts of multiple UN agencies including UNICEF, UN Women, UNESCO and WHO to work to address as many possible barriers for girls.</li>
              <li><strong>UNHCR’s efforts to educate refugee girls</strong><br/>In Ethiopia and Uganda, Girl Up partners with UNHCR to ensure girls in refugee camps have equal access to quality education from primary school through secondary school, focusing on access to materials, improved school facilities, quality teachers and integrated learning opportunities like girls clubs.</li>
              <li><strong>UNFPA’s efforts to prevent child marriage and teenage pregnancy</strong><br/>In India and Guatemala, Girl Up partners with UNFPA to prevent child marriage and provide girls with skills and assets needed to improve their lives and end their families cycle of poverty. Peer educators lead girls clubs, providing a safe space for girls to learn about nutrition, money management and negotiating for their rights.</li>
            </ul>
            <div className="prose">As we increase our impact over the coming years, Girl Up is committed to doing our part to achieve the Sustainable Development Goals. Specifically, we will work in partnership with the UN to make progress towards Goals 4 and 5 by 2030.</div>
        </div>
        </div>
    );
}

export default About;