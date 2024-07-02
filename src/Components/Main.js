import React from "react";
import SideNav from "./SideNav";
import Recomondations from "./Recomondations";
import UserFeed from "./UserFeed";

const Main = () => {
  return (
    <div class="flex">
        <SideNav />
        <UserFeed />
        <Recomondations />
    </div>
  );
};
export default Main;
