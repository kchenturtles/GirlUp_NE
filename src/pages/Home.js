import ImageSlideshow from "../components/ImageSlideshow";

function Home() {
    return (
      <div className = "h-fit">
        <ImageSlideshow />
        <div className = "bg-gradient-to-t from-pink-100 via pink-300 to pink-900">
        <h1 className = "my-20">Home</h1>
        <div className="container mx-auto text-2xl pb-20 px-48">
            <strong>Welcome to the Girl Up New England Coalition!</strong>
            <div className="mt-10">We are the coalition of 90+ Girl Up clubs and campuses in New England. Learn more about our executive board, our events, and how we take action for gender equality across New England!</div>
            <div className="mt-10">No matter their background, girls have the power to transform themselves, their communities, and the world around them. Girl Up is a global movement of empowered young women leaders who defend gender equality. For those who stand with us in this movement, there is no rest until we achieve equal rights for every girl. Because when girls rise, we all rise. Learn more about Girl Up here: <a href="GirlUp.org">GirlUp.org</a></div>
        </div>
        </div>
      </div>
    );
}

export default Home;