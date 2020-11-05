import React from "react";

const Info = ({ span, info, link }) => {
  return (
    <div className="info">
      <div className="achtung">!</div>
      <p>
        <span>{span}</span>
        <br />
        {info}
        <a href="http://" target="_blank" rel="noopener noreferrer">
          {link}
        </a>
      </p>
    </div>
  );
};

export default Info;
