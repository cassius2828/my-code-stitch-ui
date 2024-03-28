const Discount_Middle_Filled_Bg = () => {
  return (
    <section id="featured-1551">
      <div className="cs-container">
        <ul className="cs-card-group">
          <CategoryItem
            img={`https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/MISC/ecomm-cat-three.png`}
            offerTag={true}
          />
          <ItemOffer
            img={`https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/MISC/camp-base-logo-black-text.svg`}
            discount={`20`}
          />
          <CategoryItem
            offer={true}
            img={`https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/MISC/ecomm-cat-four.png`}
            title={`Beach & Watersports`}
          />
          <CategoryItem
            img={`https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/MISC/ecomm-cat-one.png`}
            title={`The Beginners Guide To Camping`}
          />
          <CategoryItem
            img={`https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/MISC/ecomm-cat-two.png`}
            title={`Go Make The Most of It The Perfect Picnic`}
          />
        </ul>
      </div>
    </section>
  );
};
export default Discount_Middle_Filled_Bg;

export const CategoryImage = ({ img }) => {
  return (
    <picture className="cs-background">
      <source media="(max-width: 600px)" srcSet={img} />
      <source media="(min-width: 601px)" srcSet={img} />
      <img
        loading="lazy"
        decoding="async"
        src={img}
        width="365"
        height="201"
        aria-hidden="true"
      />
    </picture>
  );
};

export const CategoryItem = ({
  img,
  title,
  link = "/",
  linkTitle = "Explore Now",
  offer,
  offerTag,
}) => {
  return (
    <li className="cs-item">
      {offer && (
        <div class="cs-text-wrapper">
          <span class="cs-offer-label">Sale 20% off</span>
        </div>
      )}
      {offerTag && (
        <>
          <span class="cs-offer-tag">ONLY $20</span>
          <div class="cs-text-wrapper">
            <h3 class="cs-h3">Selected Tents</h3>
            <p class="cs-item-text">Special seasonal offer of the month</p>
          </div>
        </>
      )}
      <h3 className="cs-h3">{title}</h3>
      <a className="cs-link" href={link}>
        {linkTitle}
      </a>
      <CategoryImage img={img} />
    </li>
  );
};

export const ItemOffer = ({ img, discount }) => {
  return (
    <li class="cs-item cs-item-offer">
      <div class="cs-offer-wrapper">
        <img
          class="cs-logo"
          src={img}
          alt="logo"
          width="162"
          height="94"
          loading="lazy"
          decoding="async"
        />
        <h3 class="cs-h3">Sale {discount}% Off</h3>
      </div>
    </li>
  );
};
