import { Helmet } from "react-helmet";
import Profile from "../components/Profile";
import bella from "../images/headshots/BellaTaveras.jpg";
import cynthia from "../images/headshots/CynthiaMedina.jpg";
import elise from "../images/headshots/EliseWilson.png";
import elizabeth from "../images/headshots/ElizabethDaCunha.png";
import emily from "../images/headshots/EmilyWhitney.jpg";
import eva from "../images/headshots/EvaGrzegorczyk.jpg";
import farrah from "../images/headshots/FarrahZerola.jpg";
import danielle from "../images/headshots/DanielleM.png";
import jubi from "../images/headshots/JubiO.jpg";
import kendree from "../images/headshots/KendreeChen.jpg";
import palak from "../images/headshots/PalakYadav.png";
import savannah from "../images/headshots/SavannahWick.jpg";

const boardMembers = [
  {
    name: 'Jordan',
    role: 'Co-President',
    bio: '   ',
    image: 'https://via.placeholder.com/150'
  },
  {
    name: 'Caroline',
    role: 'Co-President',
    bio: '   ',
    image: 'https://via.placeholder.com/150'
  },
  {
    name: 'Eva',
    role: 'Advocacy Committee',
    bio: 'Hi! My name is Eva and this will be my second year on the Girl Up New England Executive Board. I’m 18 years old and an incoming freshman at Boston College double majoring in neuroscience and english. I’m originally from Boston, and love to spend my time listening to music, thrifting, going to restaurants, and hanging out with my friends. I am so excited to continue working on the board this year!',
    image: eva
  },
  {
    name: 'Danielle',
    role: 'Advocacy Committee',
    bio: 'My name is Danielle and I am a senior at UMass Amherst! I’m currently 21 years old from southern MA. I founded Girl Up UMass in 2022 alongside serving on the Coalition’s Advocacy committee last year. One fun fact about me is I own an axolotl, who just turned 5 this year!',
    image: danielle
  },
  {
    name: 'Cynthia',
    role: 'Advocacy Committee',
    bio: 'Hi! My name is Cynthia and I’m a current freshman at Yale College. I am from Florida but my family currently resides in Mexico. Throughout my time with Girl Up, I have been involved as a 2023-2024 Global Teen Advisor and as a 2x USA Summit leader. My time at Girl Up is inspired by my past work in Florida and national activism as a Latine leader. Beyond my personal experiences with Girl Up, I’m eager to pursue and progress myself as a human rights activist. I am continuously left in awe by the work of Girl Up leaders worldwide and I am beyond excited to work with those of my new home region this fall. I am honored and humbled by the work of all leaders in the New England Coalition. Please do not hesitate to reach out! I am always open to conversation :)',
    image: cynthia
  },
  {
    name: 'Elizabeth',
    role: 'STEM Committee',
    bio: 'Hello! My name is Elizabeth. I am 18 years old and live in Fairhaven, MA. But, I will now be living in Cambridge as I am about to enter my first year at Harvard University!! A fun fact about me is that I love to play pickleball with my friends! I first became involved with Girl Up through its STEM for Social Good initiative, and started a Girl Up chapter at my high school. Last year, I became a member of the Girl Up New England Coalition STEM Committee, and am so grateful to be apart of this group again <33',
    image: elizabeth
  },
  {
    name: 'Kendree',
    role: 'STEM Committee',
    bio: 'Hi! My name is Kendree and I am from Massachusetts. I am a senior at Boston University Academy, which is a high school affiliated with Boston University. I have previously started a Girl Up Club and I also love advocating for STEM diversity as president of the nonprofit organization The Greater Boston STEM Program, and as captain of my FIRST robotics team, the Lobstah Bots. In my free time, I enjoy coding websites, crocheting, baking, and gardening. I’m very excited to join the executive board as a STEM committee member!',
    image: kendree
  },
  {
    name: 'Emily',
    role: 'STEM Committee',
    bio: 'Hi everyone! My name is Emily, and I’m from Sharon, Massachusetts. I’m 18 years old, and I will be a freshman at Smith College this year. I’m excited to be a part of this board for my fourth year with Girl Up! A fun fact about me is that my favorite shows are Anne With an E and Gilmore Girls!',
    image: emily
  },
  {
    name: 'Elise',
    role: 'Community Service Committee',
    bio: 'Hello! My name is Elise (she/her), I am 19 years old and a rising junior at Wellesley College majoring in Political Science and Women’s & Gender Studies. I am from Suwanee, GA, a suburb in the northeastern part of Metro Atlanta, so I have definitely had to adjust to the cold Boston winters! Some fun facts about me are that I enjoy learning about interior design and architecture, I am an avid Sims 4 builder, I love to ice skate, and my favorite dish is jollof rice- not surprising since my dad is from Accra, Ghana! This will be my second year on the Girl Up New England Executive Board, and I am extremely excited to continue being a part of this wonderful community of gender justice leaders! Last year, I was a member of the Advocacy Committee where I contributed to research on gender-related policy and helped plan and moderate educational panels on economic justice. This year, I am so happy to serve as Team Captain for the Community Service Committee! I am super passionate about gender equity, particularly issues concerning gender disparities in public health such as period poverty and healthcare access, and Girl Up has given me the voice to further advocate for those most vulnerable in our society. I am so honored to be a part of the Girl Up community and work with like-minded leaders in advocating for inclusive gender justice in all aspects of life!',
    image: elise
  },
  {
    name: 'Farrah',
    role: 'Community Service Committee',
    bio: 'Hi! My name is Farrah and I’m a senior at Weston High School. I joined Girl Up my freshman year, was the treasurer my sophomore and junior years, and I am now the co-president. I am thrilled to take on this larger role to change the lives of more women and make a lasting impact. I have a passion for community service and established and run a 501(c)(3) nonprofit to improve the lives of those with mental and physical disabilities, so I am very excited to utilize what I have learned on the community service committee!',
    image: farrah
  },
  {
    name: 'Jubi',
    role: 'Community Service Committee',
    bio: 'Hi everyone! My name is Jubi! I am eighteen years old and a freshman at Harvard from Canton, Massachusetts. I have been involved with the Girl Up New England Coalition for the past three years. I also served as a Girl Up Teen Advisor from 2022 to 2023. A fun fact about me is that I am the youngest of five daughters!',
    image: jubi
  },
  {
    name: 'Savannah',
    role: 'Regional Engagement Committee',
    bio: 'Hi, I’m Savannah and I’m going to be a senior at Natick High this year! I was an Executive Board member last year and am on the board of my school’s Girl Up club as well. A fun fact about me is that I have a black belt in martial arts!',
    image: savannah
  },
  {
    name: 'Palak',
    role: 'Regional Engagement Committee',
    bio: 'My name is Palak (she/her) and I am a senior at the Massachusetts Academy of Math and Science! I’m 17 years old and currently live in Medway, MA. I am thrilled and grateful to join Girl Up, and uplift unsung voices in our community to push for institutional changes and equity for all. Outside of bridging my interests in STEM and policy, I enjoy experimenting with new recipes, such as making matcha and pasta from scratch!',
    image: palak
  },
  {
    name: 'Bella',
    role: 'Regional Engagement Committee',
    bio: 'Hi! My name is Bella; I am 16 and from New Hampshire! I am a rising junior at Nashua High School North, and I currently serve as the secretary of my school’s Girl Up Club and run the club instagram. I have helped organize some amazing events and fundraisers to support our club. I’m really excited and can’t wait to be a part of all the great things the Coalition does this year. A fun fact about me is that I am a field hockey player!',
    image: bella
  },
]

function Board() {
    return (
      <div className = "bg-gradient-to-b from-[#FFF5EE] via bg-[#ffd1dc] to bg-[#ffd1dc] pb-24">
        <Helmet>
            <title>Executive Board | Girl Up New England Coalition</title>
        </Helmet>
        <h1 className = "py-20">Executive Board</h1>
        <div className="container max-w-[72rem] mx-auto flex flex-wrap gap-16 justify-center">
        {boardMembers.map((member) => {
          return (<Profile name={member.name} role={member.role} bio={member.bio} image={member.image} />)
        }) }
        </div>
      </div>
    );
}

export default Board;