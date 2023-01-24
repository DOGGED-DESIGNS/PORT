import React from "react";

import { motion } from "framer-motion";

import { useState, useEffect } from "react";

import images from "../../constants/images";

import { MotionWrap, AppWrap } from "../../wrapper";

import "./about.scss";

import { urlFor, client } from "../../client";

const About = () => {
  const [about, setAbout] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbout(data);
    });
  }, []);

  return (
    <div>
      <h2 className="head-text">
        {" "}
        i know that <span>Good Design</span>
        <br />
        means <span>Good Business</span>{" "}
      </h2>

      <div className="app__profiles">
        {about.map((about, index) => {
          return (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: "tween" }}
              className="app__profile-item"
              key={index}
            >
              <img src={urlFor(about.imgUrl)} alt={about.title} />
              <h2 className="bold-text" style={{ marginTop: "20px" }}>
                {about.title}
              </h2>
              <p className="p-text" style={{ marginTop: "10px" }}>
                {about.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
