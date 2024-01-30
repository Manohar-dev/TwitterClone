import React from "react";
import timeline_settings from "../assets/Settings Icon Main-Nav.png";
import kick_butowski from "../assets/kick_butowski.png";
import reply from "../assets/reply_tweets.png";
import retweet from "../assets/retweet_tweets.png";
import like from "../assets/like_tweets.png";
import view from "../assets/view_tweets.png";
import bookmark from "../assets/boomark_tweets.png";
import share from "../assets/share_tweets.png";

export default function UserFeed() {
  return (
    <>
      <div className="UserFeed">
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
          <div className="user_tweet">
            <div className="user_tweet_profilepic">
              <a href="">
                <img src={kick_butowski} alt="pro" />
              </a>
            </div>

            <div className="user_tweet_container">
              <div className="profile_details_row">
                <a href="" className="span1">
                  Kick
                </a>
                <span className="span2">@Kick_butowski</span>
                <span className="span3">&#183;</span>
                <a href="" className="span4">
                  <time>5h</time>
                </a>
              </div>
              <div className="tweet_content_row">
                <p>
                  People keep messaging me about all the pawns I stole. <br />
                  <br />
                  First of all this is not forbidden by the rules and secondly,
                  mind your own business.
                </p>
              </div>
              <div className="engagement_actions_row">
                <ul>
                  <li>
                    <div className="comments_tweets">
                      <img src={reply} alt="reply_icon" />
                      <span>10K</span>
                    </div>
                  </li>

                  <li>
                    <div className="retweet_tweets">
                      <img src={retweet} alt="retweet_icon" />
                      <span>120</span>
                    </div>
                  </li> 

                  <li>
                    <div className="like_tweets">
                      <img src={like} alt="like_icon" />
                      <span>45K</span>
                    </div>
                  </li>

                  <li>
                    <div className="comments_tweets">
                      <img src={view} alt="view_icon" />
                      <span>120K</span>
                    </div>
                  </li>
                </ul>

                  <div className="boomark_tweets">
                    <img src={bookmark} alt="bookmark" />
                  </div>
                  <div className="share_tweets">
                    <img src={share} alt="share" />
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
