import React, { useState } from "react";
import twittericon from "../assets/Twitter X.png";

export const Suggestions = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [onClickedFollow, setOnClickedFollow] = useState(false);

  const handleclick = (e) => {
    setOnClickedFollow(!onClickedFollow);
    e.preventDefault();
  };

  const handleHover = () => {
    setTimeout(() => {
      setIsHovered(true);
    }, 600);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setIsHovered(false);
    }, 600);
  };

  // const profile_card = (props) => (
  //   <Card {...props}>
  //     <Card.Body>
  //       Elon Musk <br />
  //       @elonmusk
  //     </Card.Body>
  //   </Card>
  // );

  return (
    <div className="Suggestions p-0 mt-4">
      <div>
        <h4>Who to follow</h4>
      </div>

      <a href="">
        <div className="whotofollow">
          {/* <div className="profile_image"> */}
            {/* <OverlayTrigger placement="top-start" overlay={profile_card}>
              <img
                src={twittericon}
                alt="profilepic"
                onMouseEnter={handleHover}
                onMouseLeave={handleMouseLeave}
              />
            </OverlayTrigger> */}
          {/* </div> */}
            
          {/* <div className="followprofile">
            <div className="profile_details">
              <OverlayTrigger placement="top-start" overlay={profile_card}>
                <span className="span1">Elon Musk</span> 
              </OverlayTrigger>
              <br/>
              <OverlayTrigger placement="top-start" overlay={profile_card}>
                <span className="span2">@elonmusk</span>
              </OverlayTrigger>
            </div> */}

            <div>
              <a
                href=""
                onClick={handleclick}
                className={onClickedFollow ? "followingbutton" : "followbutton"}
              >
                {onClickedFollow ? (
                  <div className="followingspan">
                    <span>Following</span>
                  </div>
                ) : (
                  <div className="followspan">
                    <span>Follow</span>
                  </div>
                )}
              </a>
            </div>
          </div>
        
      </a>

      <a href="">
        <div className="showmore">
          <span> Show more</span>
        </div>
      </a>
    </div>
  );
};
