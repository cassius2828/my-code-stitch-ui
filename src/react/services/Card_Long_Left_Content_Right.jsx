const Card_Long_Left_Content_Right = () => {
  return (
    <section id="donations-1428">
      <div className="cs-container">
        <div className="cs-content">
          <span className="cs-topper">Popular Causes</span>
          <h2 className="cs-title">Find Our Popular Causes</h2>
          <p className="cs-text">
            Join the community to give education for the children and together
            make them educated for their lives. We help companies develop
            powerful corporate. Every man must decide whether he will walk in
            the light.
          </p>
          <a href="" className="cs-button-solid">
            View All Causes
          </a>
        </div>
        <ul className="cs-card-group">
          <li className="cs-item">
            <a href="" className="cs-link">
              <picture className="cs-picture" aria-hidden="true">
                <source
                  media="(max-width: 600px)"
                  srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Landscapes/factory.jpg"
                />
                <source
                  media="(min-width: 601px)"
                  srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Landscapes/factory.jpg"
                />
                <img
                  loading="lazy"
                  decoding="async"
                  src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Landscapes/factory.jpg"
                  alt="factory"
                  width="305"
                  height="240"
                />
              </picture>
              <div className="cs-flex">
                <h3 className="cs-h3">Reduce Air Pollution</h3>
                <p className="cs-item-text">
                  We help companies develop powerful corporate responsibility
                  and employee engagement.
                </p>
                <div className="cs-donations-flex">
                  <div className="cs-bar">
                    {/* <!--change the --progress number to match the percentage in cs-number--> */}
                    <div className="cs-progress" aria-hidden="true">
                      <span
                        className="cs-progress-bar"
                        // style="--progress: 65%"
                      ></span>
                    </div>
                  </div>
                </div>
                <div className="cs-number-group">
                  <span className="cs-raised">
                    <span className="cs-number">$5200 Raised Of $15000</span>
                  </span>
                  <span className="cs-percentage">65%</span>
                </div>
              </div>
            </a>
          </li>
          <li className="cs-item">
            <a href="" className="cs-link">
              <picture className="cs-picture" aria-hidden="true">
                <source
                  media="(max-width: 600px)"
                  srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Landscapes/table.jpg"
                />
                <source
                  media="(min-width: 601px)"
                  srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Landscapes/table.jpg"
                />
                <img
                  loading="lazy"
                  decoding="async"
                  src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Landscapes/table.jpg"
                  alt="desk"
                  width="305"
                  height="240"
                />
              </picture>
              <div className="cs-flex">
                <h3 className="cs-h3">Be Efficient In Energy Use</h3>
                <p className="cs-item-text">
                  We help companies develop powerful corporate responsibility
                  and employee engagement.
                </p>
                <div className="cs-donations-flex">
                  <div className="cs-bar">
                    {/* <!--change the --progress number to match the percentage in cs-number--> */}
                    <div className="cs-progress" aria-hidden="true">
                      <span
                        className="cs-progress-bar"
                        // style="--progress: 90%"
                      ></span>
                    </div>
                  </div>
                </div>
                <div className="cs-number-group">
                  <span className="cs-raised">
                    <span className="cs-number">$5200 Raised Of $15000</span>
                  </span>
                  <span className="cs-percentage">65%</span>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
      {/* <!--Stats Group--> */}
      <div className="cs-stats-container">
        <ul className="cs-stats-group">
          <li className="cs-stat">
            <picture className="cs-icon-wrapper">
              <img
                className="cs-icon"
                loading="lazy"
                decoding="async"
                src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/box-heart.svg"
                alt="icon"
                width="48"
                height="48"
              />
            </picture>
            <div className="cs-info">
              <span className="cs-stat-number">78k+</span>
              <span className="cs-desc">Raised by 6,388 people in 7 days</span>
            </div>
          </li>
          <li className="cs-stat">
            <picture className="cs-icon-wrapper">
              <img
                className="cs-icon"
                loading="lazy"
                decoding="async"
                src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/hands.svg"
                alt="icon"
                width="48"
                height="48"
              />
            </picture>
            <div className="cs-info">
              <span className="cs-stat-number">8M+</span>
              <span className="cs-desc">
                People got your support in 5 years
              </span>
            </div>
          </li>
        </ul>
      </div>
      {/* <!-- Background Graphic --> */}
      <picture className="cs-background">
        <img
          src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Graphics/waves5.svg"
          alt="waves"
        />
      </picture>
    </section>
  );
};
export default Card_Long_Left_Content_Right;
