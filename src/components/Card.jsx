// Composants
import Heading from "./Heading";
import Pictures from "./Pictures";
import Description from "./Description";
// Pictures component
import blogImage from "../assets/images/blogImage.png";
import gregHooper from "../assets/images/greg.svg";
// CSS avec bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Card.css"

// Components :
// Picture
// Heading
// Description

function Card() {
  return (
    <main>
      <div className="p-3 bg-light w-50">
        <Pictures pic1={blogImage} className="blog-image" />
        <div className="blog-informations">
          <Heading contentH2="Learning" className="blog-type" />
          <p className="blog-published">Published 21 Dec 2023</p>
          <Heading contentH1="HTML & CSS foundations" />
          <Description
            content="These languages are the backbone of every website, defining structure,
      content, and presentation."
            className="blog-description"
          />
        </div>
        <div className="profile">
          <Pictures pic2={gregHooper} className="greg-hooper" />
          <p className="profile-name">Greg Hooper</p>
        </div>
      </div>
    </main>
  );
}

export default Card;
