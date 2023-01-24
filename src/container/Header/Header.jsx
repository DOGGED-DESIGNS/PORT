import { easeOut, motion } from "framer-motion";
import React from "react";

import { MotionWrap, AppWrap } from "../../wrapper";
import images from "../../constants/images";

import "./header.scss";

const Header = () => {
  const scaleVarients = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="app__header app_flex">
      <motion.div
        className="app__header-info"
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.7 }}
      >
        <div className=" app__header-badge ">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, i am</p>
              <h1 className="head-text">Uzoechi</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text">Web Developer</p>
            <p className="p-text">Freelancer</p>
            <p className="p-text">UI/UX Designer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="app__header-img"
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
      >
        <img src={images.profile} alt="profile_bg" />
        <motion.img
          src={images.circle}
          className="overlay_circle"
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </motion.div>

      <motion.div
        className="app__header-circles"
        variant={scaleVarients}
        whileInView={scaleVarients.whileInView}
      >
        {[images.flutter, images.redux, images.sass].map((circle, index) => {
          return (
            <div className="circle-cmp app__flex" key={index}>
              <img src={circle} alt="circles" />
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
