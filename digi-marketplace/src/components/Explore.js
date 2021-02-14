import React from "react";
import "./Explore.css";
import ExploreCard from "./inner-component/ExploreCard";

function Explore() {
  return (
    <div className="explore">
      <h2 className="explore__heading">Explore</h2>
      <div className="explore__components">
        <ExploreCard
          img="/icon_tech.png"
          head="Applicant Tracking"
          desc="To use the icons for free please insert the link somewhere on the pageTo use the icons for free please"
        />
        <ExploreCard
          img="/crm.png"
          head="CRM Software"
          desc="To use the icons for free please insert the link somewhere on the pageTo use the icons for free please"
        />
        <ExploreCard
          img="/ecommmerce.png"
          head="eCommerce Software"
          desc="To use the icons for free please insert the link somewhere on the pageTo use the icons for free please"
        />
        <ExploreCard
          img="/ux.png"
          head="UX Software"
          desc="To use the icons for free please insert the link somewhere on the pageTo use the icons for free please"
        />
      </div>
      <div className="explore__components">
        <ExploreCard
          img="/game.png"
          head="Game Dev"
          desc="To use the icons for free please insert the link somewhere on the pageTo use the icons for free please"
        />
        <ExploreCard
          img="/email.png"
          head="Email Security"
          desc="To use the icons for free please insert the link somewhere on the pageTo use the icons for free please"
        />
        <ExploreCard
          img="/fitness.png"
          head="Fitness Software"
          desc="To use the icons for free please insert the link somewhere on the pageTo use the icons for free please"
        />
        <ExploreCard
          img="/ems.png"
          head="EMS Software"
          desc="To use the icons for free please insert the link somewhere on the pageTo use the icons for free please"
        />
      </div>
    </div>
  );
}

export default Explore;
