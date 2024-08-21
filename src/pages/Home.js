import ImageSlideshow from "../components/ImageSlideshow";
import { Helmet } from "react-helmet";

function Home() {
    return (
      <div className = "h-fit">
        <Helmet>
            <title>Home | Girl Up New England Coalition</title>
        </Helmet>
        <ImageSlideshow />
        <div className = "bg-gradient-to-b from-[#FFF5EE] via bg-[#ffd1dc] to bg-[#ffd1dc] pb-24">
        <h1 className = "py-10 pt-20">Home</h1>
        <div className="container prose-container">
            <h2>Welcome to the Girl Up New England Coalition!</h2>
            <div className="prose">We are the coalition of 90+ Girl Up clubs and campuses in New England. Learn more about our executive board, our events, and how we take action for gender equality across New England!</div>
            <div className="prose">No matter their background, girls have the power to transform themselves, their communities, and the world around them. Girl Up is a global movement of empowered young women leaders who defend gender equality. For those who stand with us in this movement, there is no rest until we achieve equal rights for every girl. Because when girls rise, we all rise. Learn more about Girl Up here: <a href="GirlUp.org">GirlUp.org</a></div>
        </div>
        </div>
      </div>
    );
}

export default Home;