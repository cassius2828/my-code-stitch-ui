const Banner_Logo_Left = () => {
  return (
    <section id="services-1121">
      <div className="cs-container">
        <ul className="cs-card-group">
          <li className="cs-item">
            <div className="cs-image-group">
              <img
                className="cs-icon"
                loading="lazy"
                decoding="async"
                src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/charity-yellow1.svg"
                alt="icon"
                width="48"
                height="48"
              />
              {/* <!--If you want to remove this background shape, add a background color to the cs-image-group so it will look good. Otherwise remove the height an width from that group so there's no extra space around the icon--> */}
              <img
                className="cs-graphic"
                loading="lazy"
                decoding="async"
                src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/grey-shape.svg"
                alt="shape"
                width="48"
                height="48"
              />
            </div>
            <div className="cs-flex">
              <h2 className="cs-h2">Become a Volunteer</h2>
              <p className="cs-item-text">
                We help companies develop powerful corporate social
                responsibility
              </p>
            </div>
          </li>
          <li className="cs-item">
            <div className="cs-image-group">
              <img
                className="cs-icon"
                loading="lazy"
                decoding="async"
                src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/charity-yellow2.svg"
                alt="icon"
                width="48"
                height="48"
              />
              <img
                className="cs-graphic"
                loading="lazy"
                decoding="async"
                src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/grey-shape.svg"
                alt="shape"
                width="48"
                height="48"
              />
            </div>
            <div className="cs-flex">
              <h2 className="cs-h2">Quick Fundraise</h2>
              <p className="cs-item-text">
                We help companies develop powerful corporate social
                responsibility
              </p>
            </div>
          </li>
          <li className="cs-item">
            <div className="cs-image-group">
              <img
                className="cs-icon"
                loading="lazy"
                decoding="async"
                src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/charity-yellow3.svg"
                alt="icon"
                width="48"
                height="48"
              />
              <img
                className="cs-graphic"
                loading="lazy"
                decoding="async"
                src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/grey-shape.svg"
                alt="shape"
                width="48"
                height="48"
              />
            </div>
            <div className="cs-flex">
              <h2 className="cs-h2">Start Donating</h2>
              <p className="cs-item-text">
                We help companies develop powerful corporate social
                responsibility
              </p>
            </div>
          </li>
        </ul>
      </div>
      {/* <!--SVG Waves--> */}
      <img
        className="cs-waves"
        src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/charity-waves.svg"
        alt="waves"
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        width="1920"
        height="616"
      />
    </section>
  );
};
export default Banner_Logo_Left;
