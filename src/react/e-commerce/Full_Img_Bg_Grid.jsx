const Full_Img_Bg_Grid = () => {
  return (
    <section id="collection-1553">
      <ul className="cs-container">
        <CollectionItem
          img={`https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/MISC/offer-card-bridal.png`}
        />
        <CollectionItem
          img={`https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/MISC/offer-card-winter.png`}
        />
        <CollectionItem
          img={`https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/MISC/offer-card-mens.png`}
        />
        <CollectionItem
          img={`https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/MISC/offer-card-office.png`}
        />
      </ul>
    </section>
  );
};
export default Full_Img_Bg_Grid;

export const ItemImage = ({
  img = "https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/MISC/offer-card-bridal.png",
}) => {
  return <ItemImage img={img} />;
};

export const CollectionItem = ({ img, title = "Collection Name Here" }) => {
  return (
    // when i click the box i want to be taken to a new link
    <li
      onClick={console.log("replace this with a NavLink Component")}
      className="cs-item"
    >
      <h3 className="cs-h3">{title}</h3>
      <h3 className="cs-h3-shop">shop now</h3>
      <picture className="cs-picture" aria-hidden="true">
        <source media="(max-width: 600px)" srcSet={img} />
        <source media="(min-width: 601px)" srcSet={img} />
        <img
          loading="lazy"
          decoding="async"
          src={img}
          width="365"
          height="201"
        />
      </picture>
    </li>
  );
};
