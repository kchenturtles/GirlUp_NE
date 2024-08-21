import { Helmet } from "react-helmet";
import Profile from "../components/Profile";

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
    bio: '   ',
    image: 'https://via.placeholder.com/150'
  },
  {
    name: 'Danielle',
    role: 'Advocacy Committee',
    bio: '   ',
    image: 'https://via.placeholder.com/150'
  },
  {
    name: 'Cynthia',
    role: 'Advocacy Committee',
    bio: '   ',
    image: 'https://via.placeholder.com/150'
  },
  {
    name: 'Elizabeth',
    role: 'STEM Committee',
    bio: '   ',
    image: 'https://via.placeholder.com/150'
  },
  {
    name: 'Kendree',
    role: 'STEM Committee',
    bio: '   ',
    image: 'https://via.placeholder.com/150'
  },
  {
    name: 'Emily',
    role: 'STEM Committee',
    bio: '   ',
    image: 'https://via.placeholder.com/150'
  },
  {
    name: 'Elise',
    role: 'Community Service Committee',
    bio: '   ',
    image: 'https://via.placeholder.com/150'
  },
  {
    name: 'Farrah',
    role: 'Community Service Committee',
    bio: '   ',
    image: 'https://via.placeholder.com/150'
  },
  {
    name: 'Jubi',
    role: 'Community Service Committee',
    bio: '   ',
    image: 'https://via.placeholder.com/150'
  },
  {
    name: 'Savannah',
    role: 'Regional Engagement Committee',
    bio: '   ',
    image: 'https://via.placeholder.com/150'
  },
  {
    name: 'Palak',
    role: 'Regional Engagement Committee',
    bio: '   ',
    image: 'https://via.placeholder.com/150'
  },
  {
    name: 'Bella',
    role: 'Regional Engagement Committee',
    bio: '   ',
    image: 'https://via.placeholder.com/150'
  },
]

function Board() {
    return (
      <div className = "bg-gradient-to-b from-[#FFF5EE] via bg-[#ffd1dc] to bg-[#ffd1dc] pb-24">
        <Helmet>
            <title>Executive Board | Girl Up New England Coalition</title>
        </Helmet>
        <h1 className = "py-20">Executive Board</h1>
        <div className="container max-w-[64rem] mx-auto flex flex-wrap gap-8 justify-center">
        {boardMembers.map((member) => {
          return (<Profile name={member.name} role={member.role} bio={member.bio} image={member.image} />)
        }) }
        </div>
      </div>
    );
}

export default Board;