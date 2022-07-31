import React from "react";

export const ColorfulMessage = (props) => {
  const { color, children } = props;
  const contentLedyStyle = {
    color,
    fontSize: "25px"
  };

  return <p style={contentLedyStyle}>{children}</p>;
};
