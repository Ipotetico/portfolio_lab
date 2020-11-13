import React from "react";

const WnaszejBazie = ({ showData }) => {
  return (
    <div className="center--container four--steps">
      {showData === 1 && (
        <p>
          W naszej bazie znajdziesz
          <br /> listę zweryfikowanych Fundacji, z którymi współpracujemy.
          <br />
          Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
        </p>
      )}

      {showData === 2 && (
        <p>
          NGO, amet consectetur adipisicing elit. Accusantium, vero maiores,
          <br />
          culpa quidem earum sed, quam quisquam voluptate recusandae distinctio
          doloribus accusamus rerum? <br />
          Praesentium magnam accusantium ducimus ipsam eligendi reiciendis.
        </p>
      )}

      {showData === 3 && (
        <p>
          Zbiórki, amet consectetur adipisicing elit. <br />
          Accusantium, vero maiores, culpa quidem earum sed, quam quisquam
          voluptate recusandae distinctio doloribus accusamus rerum? <br />
          Praesentium magnam accusantium ducimus ipsam eligendi reiciendis.
        </p>
      )}
    </div>
  );
};

export default WnaszejBazie;
