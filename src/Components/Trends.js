import React from "react";
import more_recomondations from "../assets/more-recomondations.png";

export const Trends = () => {

  const apidata=
    { 
      trendingText: 'Trending in India',
      hashtag: '#Chennai Rains',
      postCount: '2,500 posts'
    };
  
    const renderingdata = (apidata)=>{
      return (
        <a href="https://twitter.com/home">
        <div className="trendingfeed">
        <div className="element1"> <span>{apidata.trendingText}</span> </div>
        <div className="element2"> <span>{apidata.hashtag}</span> </div>
        <div className="element3"> <span>{apidata.postCount}</span> </div>
        </div>
        </a>
      );
    };
  return (
    <div className="Trends p-0 mt-4">
      <div>
        <h4>What's happening</h4>
      </div>
      {renderingdata(apidata)}
    
      {/* <a href="https://twitter.com/home">
        <div className="trendingfeed">
        <div className="element1"> <span>Trending in India</span> <img src={more_recomondations} alt="moreicon" /></div>
        <div className="element2"> <span>#Chennai Rains</span> </div>
        <div className="element3"> <span>2,500 posts</span> </div>
        </div>
      </a> */}
      
      {/* <a href="https://twitter.com/home">
      <div className="Trending">
        <div className="element1"> <span>Sports </span> <img src={more_recomondations} alt="moreicon" /></div>
        <div className="element2"> <span>Virat Kohli</span> </div>
        <div className="element3"> <span>Trending with #captain #GOAT</span> </div>
      </div>
      </a>

      <a href="https://twitter.com/home">
      <div className="Trending">
        <div className="element1"> <span>Politics</span> <img src={more_recomondations} alt="moreicon" /></div>
        <div className="element2"> <span>Modi</span> </div>
        <div className="element3"> <span>Trending with #BJP #Hindu</span> </div>
      </div>
      </a>
      <a href="https://twitter.com/home">
      <div className="Trending">
        <div className="element1"> <span>Entertainment</span> <img src={more_recomondations} alt="moreicon" /></div>
        <div className="element2"> <span>Ranveer</span> </div>
        <div className="element3"> <span>10k posts</span> </div>
      </div>
      </a>
       */}
      
      <a href="">
      < div className="showmore">
          <span> Show more</span>
      </div>
      </a>
     
     
    </div>
  );
};
