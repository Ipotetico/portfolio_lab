import React from "react";

const MenuItem = ({ name, clasa, linkTo, func }) => {
  return (
    <>
      <a onClick={func} className={clasa} href={linkTo}>
        {name}
      </a>
    </>
  );
};

export default MenuItem;
