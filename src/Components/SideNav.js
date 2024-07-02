import React from "react";
import twitter_icon from "../assets/Twitter X.png";
import notification from "../assets/Notification.png";
import messages from "../assets/Messages.png";
import lists from "../assets/Lists.png";
import bookmark from "../assets/Bookmark.png";
import more from "../assets/More.png";
import profile from "../assets/Profile.png";
import gunther from "../assets/gunther.png";

const SideNav = () => {
  return (
    <div className="SideNav">
      <div className="SideNav_Logo">
        <a href="https://twitter.com/home">
          <img src={twitter_icon} className="align-items-start" />
        </a>
      </div>

      <ul>
        <li>
          <a href="https://twitter.com/home">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="30"
              width="30"
              viewBox="0 0 576 512"
            >
              <path
                d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9
         40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
              />
            </svg>
            <span id="Home_button"> Home</span>
          </a>
        </li>

        <li>
          <a href="https://twitter.com/home">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 50 50"
            >
              <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"></path>
            </svg>
            <span>Explore</span>
          </a>
        </li>

        <li>
          <a href="https://twitter.com/home">
            <img src={notification} width="30" height="30" />
            <span>Notifications</span>
          </a>
        </li>

        <li>
          <a href="https://twitter.com/home">
            <img src={messages} width="30" height="30" />
            <span>Messages</span>
          </a>
        </li>
        {/* 
        <li>
        <a href="https://twitter.com/home">
        <img src={lists} width="30" height="30"/>
        <span>Lists</span></a>  
        </li>

        <li>
        <a href="https://twitter.com/home">
        <img src={bookmark} width="30" height="30"/>
        <span>Bookmarks</span></a>  
        </li> */}

        <li>
          <a href="https://twitter.com/home">
            <img src={profile} width="30" height="30" />
            <span>Profile</span>
          </a>
        </li>

        <li>
          <a href="https://twitter.com/home">
            <img src={more} width="30" height="30" />
            <span>More</span>
          </a>
        </li>
      </ul>

      <a href="" className="SideNav_post">
        <span>Post</span>
      </a>

      <div className="SideNav_profile">
        <a href="">
          <div className="SideNav_profile_pic">
            <img src={gunther} alt="profile_pic" />
          </div>

          <div className="SideNav_profile_details">
            <span className="span1">Gunther </span>
            <br />
            <span className="span2">@Gunther_butowski</span>
          </div>
        </a>
      </div>
    </div>
  );
};
export default SideNav;
