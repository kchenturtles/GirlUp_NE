function Profile({bio, image, name, role}) {
    return (
      <div className="w-56">
        <img src={image} alt="Profile" className="rounded-full img-fluid square-cropped-image w-15 border-4 border-pink-300 mx-auto" />
        <div className="text-center font-bold text-xl mt-2">{name}</div>
        <div className="text-center italic">{role}</div>
        <div className="text-center">{bio}</div>
      </div>
    );
}

export default Profile;