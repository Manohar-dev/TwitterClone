import React from "react";
import { Trends } from "./Trends";
import { Suggestions } from "./Suggestions";
import searchicon from "..//assets/search-icon.png";
import { Stack } from "react-bootstrap";

const Recomondations = () => {
  return (
    <Stack className="Recomondations mt-1">
      <Stack className="searchbar" direction="horizontal">
        <div className="searchicon">
          <img src={searchicon}/>
        </div>
        <input name="searchbar" type="search" placeholder="Search"/>
      </Stack>
      <Trends/>
      <Suggestions/>
    </Stack>
  );
};

export default Recomondations;
