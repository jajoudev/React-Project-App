import gregHooper from "../assets/images/greg.svg";
import Heading from "./Heading";
import Picture from "./Picture";
import Description from "./Description";

// Components :
// Picture
// Heading
// Description

function Card() {
  return (
    <main>
      <div className="blog-wrapper">
        <Picture />
        <Heading content="Learning" />
        <div className="blog-informations"></div>
        <p className="blog-published">Published 21 Dec 2023</p>
        <h1 className="blog-main-title">HTML & CSS foundations</h1>
        <Description />
        <div className="profile">
          <img src={gregHooper} alt="greg hooper"></img>
          <p className="profile-name">Greg Hooper</p>
        </div>
      </div>
    </main>
  );
}

export default Card;
