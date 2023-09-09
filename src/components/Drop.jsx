import React from "react";
import { useNavigate } from "react-router-dom";

const Drop = ({ imageUrl, title }) => {
  return (
    <div className={"flex items-center"}>
      <img
        src={imageUrl}
        style={{
          width: "25px",
          height: "25px",
          objectFit: "contain",
          marginLeft: "10px",
          userSelect: "none",
        }}
        alt=''
      />
      <h3 className='m-3 cursor-pointer select-none'>{title}</h3>
    </div>
  );
};

export default Drop;
