import React from "react";

import { NavLink } from "react-router-dom";

import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://twitter.com/Dogged_Tech" target="_blank">
          <BsTwitter />
        </a>
      </div>
      <div>
        <a
          href="https://web.facebook.com/search/top?q=dogged_designs"
          target="_blank"
        >
          <FaFacebookF />
        </a>
      </div>
      <div>
        <a href="https://www.instagram.com/dogged_designs/" target="_blank">
          <BsInstagram />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
