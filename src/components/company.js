import { themeContext } from "../context/themeContext";
import { useContext, useState } from "react";
import pod from "../assets/logos/pod.svg";
import scoot from "../assets/logos/scoot.svg";
import typemaster from "../assets/logos/typemaster.svg";
import vector from "../assets/logos/vector.svg";
import blogr from "../assets/logos/blogr.svg";
import coffeeroasters from "../assets/logos/coffeeroasters.svg";
import crowdfund from "../assets/logos/crowdfund.svg";
import creative from "../assets/logos/creative.svg";
import maker from "../assets/logos/maker.svg";
import officelite from "../assets/logos/officelite.svg";
import pomodoro from "../assets/logos/pomodoro.svg";
import mastercraft from "../assets/logos/mastercraft.svg";

const imageMap = {
  pod,
  scoot,
  typemaster,
  vector,
  blogr,
  coffeeroasters,
  crowdfund,
  creative,
  maker,
  officelite,
  pomodoro,
  mastercraft,
};

const Company = ({ data }) => {
  const {
    company,
    logo,
    position,
    postedAt,
    contract,
    location,
    logoBackground,
  } = data;

  //   const image = require(logo);
  //   console.log(image);

  return (
    <div className="job-wrapper">
      <div className="logo-wrapper" style={{ background: logoBackground }}>
        <img
          className="company-logo"
          src={imageMap[company.replace(" ", "").toLowerCase()]}
          width={80}
        />
      </div>
      <div className="details-wrapper">
        <h3 className="posted">
          {postedAt}. {contract}
        </h3>
        <h2 className="job-title">{position}</h2>
        <h3 className="company-name">{company}</h3>
      </div>

      <div className="location-wrapper">
        <h3>
          <a href="#">{location}</a>
        </h3>
      </div>
    </div>
  );
};

export default Company;
