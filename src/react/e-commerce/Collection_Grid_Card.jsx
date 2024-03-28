const Collection_Grid_Card = () => {
  return (
    // <!--
    //     To add a 4th or 5th collection or more, copy and paste the cs-button and change it's data-filter to the next number, in this case it's 4. Do the same to the cs-listing and its data-category number. And that's it!
    // -->

    <section id="collection-1602">
      <div className="cs-container">
        <CollectionFilters />
        <Listing dataCategory="1" />
        <Listing dataCategory="2" />
        <Listing dataCategory="3" />
      </div>
    </section>
  );
};
export default Collection_Grid_Card;

///////////////////////////
// FILTERS
///////////////////////////
export const CollectionFilters = () => {
  return (
    <div className="cs-content">
      <h2 className="cs-title">New Collection</h2>
      <div className="cs-button-group">
        <button className="cs-button" data-filter="one">
          New Arrival
        </button>
        <button className="cs-button" data-filter="two">
          Top Rating
        </button>
        <button className="cs-button" data-filter="three">
          Best Seller
        </button>
      </div>
    </div>
  );
};

///////////////////////////
// LISTINGS
///////////////////////////
export const Listing = ({ dataCategory }) => {
  return (
    <div className="cs-listing" data-category={dataCategory}>
      <CollectionItem />
      <CollectionItem img="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/MISC/ecomm-alpaca.png" />
      <CollectionItem img={`https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/MISC/ecomm-hoodie.png`} />
      <CollectionItem img={`https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/MISC/ecomm-winter.png`} />
      <CollectionItem img={`https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/MISC/ecomm-round-neck.png`} />
      <CollectionItem img={`https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/MISC/ecomm-halter.png`} />
    </div>
  );
};

///////////////////////////
// COLLECTION ITEMS
///////////////////////////
export const CollectionItem = ({ link, img }) => {
  return (
    <div className="cs-item">
      <a href={link} className="cs-link">
        <div className="cs-picture-group">
          <ItemImage img={img} />
          <span className="cs-offer">-20%</span>
        </div>
        <Details />
      </a>
    </div>
  );
};

///////////////////////////
// ITEM IMAGE
///////////////////////////
export const ItemImage = ({
  img = "https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/MISC/ecomm-beanie.png",
}) => {
  return (
    <picture className="cs-picture">
      <source media="(max-width: 600px)" srcset={img} />
      <source media="(min-width: 601px)" srcset={img} />
      <img
        loading="lazy"
        decoding="async"
        src={img}
        alt="gallery"
        width="305"
        height="400"
      />
    </picture>
  );
};

///////////////////////////
// DETAILS
///////////////////////////
export const Details = ({
  stars = 5,
  price = "$7.00",
  wasPrice = "$12.00",
  itemName = "Blue Chunky Beanie",
  category = "Run, Dress",
}) => {
  return (
    <div className="cs-details">
      <span className="cs-category">{category}</span>
      <h3 className="cs-name">{itemName}</h3>
      <div className="cs-actions">
        <div className="cs-flex">
          <span className="cs-price">{price}</span>
          <span className="cs-was-price">{wasPrice}</span>
          <Stars stars={4} />
        </div>
        <BuyIcon />
      </div>
    </div>
  );
};

///////////////////////////
// ICONS
///////////////////////////
export const BuyIcon = () => {
  return (
    <button className="cs-buy">
      <img
        className="cs-basket"
        src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/ecomm-bag-icon.svg"
        alt="buy"
        height="24"
        width="24"
        loading="lazy"
        decoding="async"
      />
    </button>
  );
};

export const Star = ({ fill = "#ffbd59" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      zoomAndPan="magnify"
      viewBox="0 0 75 74.999997"
      height="40"
      width="40"
      preserveAspectRatio="xMidYMid meet"
      version="1.0"
      loading="lazy"
      decoding="async"
      alt="star"
    >
      <defs>
        <clipPath id="6fb07690b4">
          <path
            d="M 22.5 23.210938 L 52.5 23.210938 L 52.5 51.710938 L 22.5 51.710938 Z M 22.5 23.210938 "
            clip-rule="nonzero"
          />
        </clipPath>
      </defs>
      <g clip-path="url(#6fb07690b4)">
        <path
          fill={fill}
          d="M 37.539062 23.308594 L 42.160156 32.679688 L 52.5 34.179688 L 45.015625 41.480469 L 46.789062 51.777344 L 37.539062 46.914062 L 28.285156 51.777344 L 30.050781 41.480469 L 22.570312 34.179688 L 32.910156 32.679688 Z M 37.539062 23.308594 "
          fill-opacity="1"
          fill-rule="nonzero"
        />
        <path
          fill={fill}
          d="M 37.46875 23.21875 L 42.09375 32.589844 L 52.433594 34.089844 L 44.949219 41.390625 L 46.714844 51.6875 L 37.46875 46.824219 L 28.21875 51.6875 L 29.984375 41.390625 L 22.5 34.089844 L 32.839844 32.589844 Z M 37.46875 23.21875 "
          fill-opacity="1"
          fill-rule="nonzero"
        />
        <path
          fill={fill}
          d="M 37.46875 23.21875 L 42.09375 32.589844 L 52.433594 34.089844 L 44.949219 41.390625 L 46.714844 51.6875 L 37.46875 46.824219 L 28.21875 51.6875 L 29.984375 41.390625 L 22.5 34.089844 L 32.839844 32.589844 Z M 37.46875 23.21875 "
          fill-opacity="1"
          fill-rule="nonzero"
        />
        <path
          fill={fill}
          d="M 37.46875 23.21875 L 42.09375 32.589844 L 52.433594 34.089844 L 44.949219 41.390625 L 46.714844 51.6875 L 37.46875 46.824219 L 28.21875 51.6875 L 29.984375 41.390625 L 22.5 34.089844 L 32.839844 32.589844 Z M 37.46875 23.21875 "
          fill-opacity="1"
          fill-rule="nonzero"
        />
      </g>
    </svg>
  );
};

export const Stars = ({ stars }) => {
  const array = [1, 2, 3, 4, 5];
  return (
    <div className="cs-stars">
      {array.map((item) => {
        return <Star fill={item > stars ? `#808080` : `#ffbd59`} />;
      })}
    </div>
  );
};
