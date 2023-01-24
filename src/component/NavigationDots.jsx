import React from "react";

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {["home", "about", "works", "skills", "testimonials", "contacts"].map(
        (item, index) => {
          return (
            <a
              href={`#${item}`}
              className="app__navigation-dot"
              style={active === item ? { backgroundColor: "#313BAC" } : {}}
              key={item + index}
            ></a>
          );
        }
      )}
    </div>
  );
};

export default NavigationDots;
