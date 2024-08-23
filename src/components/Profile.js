import React, { useState } from 'react';
import { IoCloseOutline } from 'react-icons/io5';

function Profile({bio, image, name, role}) {
  const [showBio, setShowBio] = useState(false);

    return (
      <div className="w-56">
        <div className={`${showBio ? "" : "hidden h-0 overflow-hidden collapse"} transform-all fixed top-[12.5%] left-1/2 z-10 w-96 h-96 bg-pink-300 rounded-lg shadow-sm`} style={{transform: "translate(-50%, 50%)"}}>
          <button className="absolute z-11 top-1 right-2 p-2" onClick={() => setShowBio(false)}><IoCloseOutline size={30} /></button>
          <div className="mx-auto p-8 my-auto h-96 overflow-y-auto w-[105%] overflow-x-hidden pr-12" style={{scrollbarColor: "#ec008c #F9A8D4", scrollbarGutter: "unset"}}>{bio}</div>
        </div>
        <img src={image} alt="Profile" height="100rem" width="100rem" className="rounded-lg border-4 w-56 h-56 border-pink-300 mx-auto overflow-hidden object-cover" />
        <div className="text-center font-bold text-xl mt-2">{name}</div>
        <div className="text-center italic">{role}</div>
        <div className="w-fit mx-auto mt-2">
          <button onClick={() => setShowBio(true)} className="w-fit mx-auto p-2 rounded-xl bg-pink-300 hover:opacity-75 text-sm">Show Bio</button>
       </div>
      </div>
    );
}

export default Profile;