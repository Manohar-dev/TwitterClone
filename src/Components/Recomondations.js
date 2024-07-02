import React from "react";
import { Trends } from "./Trends";
import { Suggestions } from "./Suggestions";
import searchicon from "..//assets/search-icon.png";

const Recomondations = () => {
  return (<>
      <div className="Recomondations mt-1">
       <div className="searchbar"> 
        <div className="searchicon">
          <img src={searchicon}/>
        </div>
        <input name="searchbar" type="search" placeholder="Search"/>
       </div>
      <Trends/>
      <Suggestions/>
     </div>
    </>
  );
};

export default Recomondations;
