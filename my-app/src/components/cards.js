import React from "react";

const cards = () => {
  return (
    <div>
      <div className="card container">
        <div className="card">
          <div className=" card-body">
            <span className="card-num">1</span>
            <span className="subtitle">Breakfast</span>
            <h2 className="title">Maggi</h2>
            <span className="about">
              Maggi noodles are made from wheat flour, and are typically
              flavored with a variety of seasonings and spices, such as onion,
              garlic, cumin, and coriander. The noodles are cooked in boiling
              water for a few minutes, and the seasoning packet is mixed in to
              create a savory broth. Maggi noodles are often eaten as a quick
              and convenient meal, especially in countries where instant noodles
              are popular. They are also used as an ingredient in various
              dishes, such as soups, stir-fries, and salads.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default cards;
