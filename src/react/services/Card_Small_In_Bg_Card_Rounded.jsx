const Card_Small_In_Bg_Card_Rounded = () => {
  return (
    <section id="services-448">
      <div className="cs-container">
        <div className="cs-content">
          <span className="cs-topper">Services</span>
          <h2 className="cs-title">Landscaping Services in Sometown, USA</h2>
          <p className="cs-text">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Amet minim
            mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
            officia consequat duis enim velit mollit.
          </p>
        </div>
        <ul className="cs-card-group">
          <li className="cs-item">
            <div className="cs-flex">
              <picture className="cs-wrapper">
                <img
                  className="cs-icon"
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                  src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Services/tree.svg"
                  alt="icon"
                  width="70"
                  height="70"
                />
              </picture>
              <h3 className="cs-h3">Service 1</h3>
              <p className="cs-item-text">
                Lorem ipsum dolor sit amet, consectetur.
              </p>
              <a href="" className="cs-link">
                Read More
              </a>
            </div>
            <picture className="cs-picture">
              <source
                media="(max-width: 600px)"
                srcset="https://csimg.nyc3.cdn.digitaloceanspaces.com/Services/leaf.jpg"
              />
              <source
                media="(min-width: 601px)"
                srcset="https://csimg.nyc3.cdn.digitaloceanspaces.com/Services/leaf.jpg"
              />
              <img
                aria-hidden="true"
                loading="lazy"
                decoding="async"
                src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Services/leaf.jpg"
                alt="leaf"
                width="345"
                height="428"
              />
            </picture>
          </li>
          <li className="cs-item">
            <div className="cs-flex">
              <picture className="cs-wrapper">
                <img
                  className="cs-icon"
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                  src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Services/truck.svg"
                  alt="icon"
                  width="70"
                  height="70"
                />
              </picture>
              <h3 className="cs-h3">Service 1</h3>
              <p className="cs-item-text">
                Lorem ipsum dolor sit amet, consectetur.
              </p>
              <a href="" className="cs-link">
                Read More
              </a>
            </div>
            <picture className="cs-picture">
              <source
                media="(max-width: 600px)"
                srcset="https://csimg.nyc3.cdn.digitaloceanspaces.com/Services/grass.jpg"
              />
              <source
                media="(min-width: 601px)"
                srcset="https://csimg.nyc3.cdn.digitaloceanspaces.com/Services/grass.jpg"
              />
              <img
                aria-hidden="true"
                loading="lazy"
                decoding="async"
                src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Services/grass.jpg"
                alt="grass"
                width="345"
                height="428"
              />
            </picture>
          </li>
          <li className="cs-item">
            <div className="cs-flex">
              <picture className="cs-wrapper">
                <img
                  className="cs-icon"
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                  src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Services/user.svg"
                  alt="icon"
                  width="70"
                  height="70"
                />
              </picture>
              <h3 className="cs-h3">Service 1</h3>
              <p className="cs-item-text">
                Lorem ipsum dolor sit amet, consectetur.
              </p>
              <a href="" className="cs-link">
                Read More
              </a>
            </div>
            <picture className="cs-picture">
              <source
                media="(max-width: 600px)"
                srcset="https://csimg.nyc3.cdn.digitaloceanspaces.com/Services/leaves.jpg"
              />
              <source
                media="(min-width: 601px)"
                srcset="https://csimg.nyc3.cdn.digitaloceanspaces.com/Services/leaves.jpg"
              />
              <img
                aria-hidden="true"
                loading="lazy"
                decoding="async"
                src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Services/leaves.jpg"
                alt="leaves"
                width="345"
                height="428"
              />
            </picture>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Card_Small_In_Bg_Card_Rounded;
