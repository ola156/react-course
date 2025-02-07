import React from "react";

const Temp = ({ temp }) => {
  let temprature = "";

  if (temp < 15) {
    return (temprature = "It cold outside");
  } else if (temp >= 16 && temp <= 25) {
    return (temprature = "It nice outside");
  } else if (temp > 25) {
    return (temprature = "It hot outside");
  }

  return <div>{temprature}</div>;
};

export default Temp;
