import React from "react";
import timeline_settings from "../assets/Settings Icon Main-Nav.png";
import {Post}  from "../features/Post";

export default function UserFeed() {
  
  return (
    <div class="ml-60 UserFeed">
      <div className="Main_nav">
        <ul>
          <li>
            <a href=" ">
              <div className="feed_lists_btn">
                <span>For you</span>
              </div>
            </a>
          </li>
          <li>
            <a href=" ">
              <div className="feed_lists_btn">
                <span>Following</span>
              </div>
            </a>
          </li>

          <li>
            <a href=" ">
              <div className="feed_lists_btn">
                <span>Entertainment</span>
              </div>
            </a>
          </li>

          <li>
            <a href=" ">
              <div className="feed_lists_btn">
                <span>Sports</span>
              </div>
            </a>
          </li>

          <li>
            <a href=" ">
              <div className="feed_lists_btn">
                <span>Politics</span>
              </div>
            </a>
          </li>
        </ul>

        <a href=" " className="timeline-settings">
          <div>
            <img src={timeline_settings} />
          </div>
        </a>
      </div>

      <div className="tweets_feed">
       <Post/>
      </div>
    </div>
  );
}
