import { LeftImage } from "../e-commerce/Hero_Left_Four_Right";

const Landing_Hero_Left_Two_Right = () => {
  return (
    <section id="hero-1589">
      <div className="cs-container">
        <ul className="cs-card-group">
          <Hero_Left_Image
            img={`https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/ecommerce/watch-m.png`}
            num={"1"}
          />

          <Two_Right_Images
            num="2"
            img={`https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/ecommerce/stool.png`}
          />
          <Two_Right_Images
            num="3"
            img={`https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/ecommerce/table.png`}
          />
        </ul>
      </div>
    </section>
  );
};
export default Landing_Hero_Left_Two_Right;

export const Two_Right_Images = ({ num, img, link = "/" }) => {
  return (
    <li className={`cs-item cs-item${num}`}>
      <div className="cs-flex">
        <h3 className="cs-h3">Up to 45% Off on All Tablewear</h3>
        <a href={link} className="cs-button-solid">
          Shop Now
        </a>
      </div>
      <div className="cs-image-group">
        <Picture img={img} />
      </div>
    </li>
  );
};

export const Hero_Left_Image = ({ num, img, link = "/" }) => {
  return (
    <li className={`cs-item cs-item${num}`}>
      <div className="cs-content">
        <h1 className="cs-title">Stitch Smart Watches Collection</h1>
        <p className="cs-text">
          Explore our exquisite watch collection, where timepieces become
          timeless treasures. From classic elegance to modern innovation, our
          curated selection offers something for every style and occasion.
        </p>
        <a href={link} className="cs-button-solid">
          Shop Now
        </a>
      </div>
      <Picture hero img={img} />
    </li>
  );
};

export const Picture = ({ img, hero }) => {
  return (
    <picture className={hero ? `cs-background` : `cs-picture`}>
      {/* <!--Mobile Image--> */}
      <source media="(max-width: 600px)" srcSet={img} />
      {/* <!--Tablet and above Image--> */}
      <source media="(min-width: 601px)" srcSet={img} />
      <img
        loading="lazy"
        decoding="async"
        src={img}
        alt="kids"
        width="220"
        height="220"
        aria-hidden="true"
      />
    </picture>
  );
};
