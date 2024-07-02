import React from 'react'
import kick_butowski from "../assets/kick_butowski.png";
import reply from "../assets/reply_tweets.png";
import retweet from "../assets/retweet_tweets.png";
import like from "../assets/like_tweets.png";
import view from "../assets/view_tweets.png";
import bookmark from "../assets/boomark_tweets.png";
import share from "../assets/share_tweets.png";

export const Post = (props) => {
  
    return (
    <div className="user_tweet">
    <div className="user_tweet_profilepic">
      <a href="">
        <img src={kick_butowski} alt="pro" />
      </a>
    </div>
    <div className="user_tweet_container">
      <div className="profile_details_row">
        <a href="" className="span1">
          {props.userprofilename}
        </a>
        <span className="span2">@{props.username}</span>
        <span className="span3">&#183;</span>
        <a href="" className="span4">
          <time>{props.postedtime}</time>
        </a>
      </div>
      <div className="tweet_content_row">
        <p>
        {props.tweetcontent}
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
  )
}

