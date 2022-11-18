import React from "react";

const Rating = ({ rate }) => {
  return (
    <div>
      {rate?.map((item, i) => {
        return (
          <div key={i}>
            <h3>{item.Source}</h3>
            <h3>{item.Value}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Rating;
