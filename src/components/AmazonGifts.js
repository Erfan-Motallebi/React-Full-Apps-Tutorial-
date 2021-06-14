import React, { Fragment } from "react";

// CSS style files
import "../css/gifts.css";

// data file
import { giftItems } from "../scripts/giftItems";
/**
 *
 * @returns a single gift, better to say a static gift !!!
 */
// const giftItems = [
//   {
//     id: 1,
//     image:
//       "https://images-na.ssl-images-amazon.com/images/I/41xJWnJtbWL._AC_SX184_.jpg",
//     title: "Amazon.com Gift Card Balance Reload",
//     brand: "Amazon",
//     price: 50,
//   },
// ];

// const GiftLists = () => {

// }

/**
 *  @returns a dynamic gift list - easy to print different faces with only one component
 */

/**
 *
 * @param {*} props differnet types of controlling a prop
 * @summary Object Style controlling { gifts: { id, image, title, price, brand } } [ directly ]
 * @returns a component
 */

const GiftLists = ({ id, image, title, price, brand }) => {
  return (
    <section key={id}>
      <img src={image} alt="Amazon Gift Reload" />
      <div className="title">
        <p>{title}</p>
      </div>
      <hr />
      <p className="price">
        <sup>$ </sup>
        {price} <sup>00</sup>{" "}
      </p>
      <h3 className="brand">{brand}</h3>
    </section>
  );
};

const AmazonGifts = () => {
  return (
    <Fragment>
      <article>
        {/* <GiftList /> */}
        {/**
         * different types sending props to a component
         * Object Style / String Style / Spread Parameter Style
         */}

        {/* {giftItems.map((gift) => {
          return <GiftLists gifts={gift} />;
        })} */}

        {giftItems.map((gift) => {
          return <GiftLists {...gift} />;
        })}
      </article>
    </Fragment>
  );
};

export default AmazonGifts;
