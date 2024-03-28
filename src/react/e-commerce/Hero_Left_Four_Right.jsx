const Hero_Left_Four_Right = () => {
  return (
    <section id="collection-1552">
      <div className="cs-container">
        <ul className="cs-card-group">
          <LeftImage
            link={`/`}
            title="Selected Woman's Wear"
            deal={`$20`}
            text="Special seasonal offer of the month"
            img={`https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/MISC/ecomm-womens-offer-m.png`}
          />
          <RightItem
            img={`https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/MISC/ecomm-offer-tshirts.png`}
          />
          <RightItem
            img={`https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/MISC/ecomm-offer-bags.png`}
          />
          <RightItem
            img={`https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/MISC/ecomm-offer-shoes.png`}
          />
          <RightItem
            img={`https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/MISC/ecomm-offer-accessories.png`}
          />
        </ul>
      </div>
    </section>
  );
};
export default Hero_Left_Four_Right;

export const RightItem = ({ img, link }) => {
  return (
    <li className="cs-item">
      {/* navlink */}
      <a className="cs-category" href="/">
        Accessories
      </a>
      <ItemImage img={img} />
    </li>
  );
};

export const ItemImage = ({ img }) => {
  return (
    <picture className="cs-background" aria-hidden="true">
      <source media="(max-width: 600px)" srcSet={img} />
      <source media="(min-width: 601px)" srcSet={img} />
      <img loading="lazy" decoding="async" src={img} width="365" height="201" />
    </picture>
  );
};

export const LeftImage = ({ img, link, title, deal, text }) => {
  return (
    <li className="cs-item cs-item-offer">
      <div className="cs-text-wrapper">
        <span className="cs-offer-tag">ONLY {deal}</span>
        <h3 className="cs-h3">{title}</h3>
        <span className="cs-item-text">{text}</span>
        {/* navlink */}
        <a className="cs-button-solid" href={link}>
          Shop Now
        </a>
        <ItemImage img={img} />
      </div>
    </li>
  );
};
