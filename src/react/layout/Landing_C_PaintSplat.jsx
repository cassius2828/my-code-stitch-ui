const Landing_C_PaintSplat = () => {
  return (
    <section id="hero-1785">
      <div className="cs-container">
        <div className="cs-content">
          <span className="cs-topper">Best Gym Of The City For Fitness</span>
          <h1 className="cs-title">You Can Boost Your Strength</h1>
          <p className="cs-text">
            Develop confidence, composure under pressure and the discipline
            needed to be a champ. This is the club you’ve been looking for.
          </p>
          <div className="cs-button-group">
            <a href="" className="cs-button-solid cs-button1">
              Read More
            </a>
          </div>
        </div>
      </div>
      {/* <!-- Background Image --> */}
      <picture className="cs-background">
        <source
          media="(max-width: 600px)"
          srcset="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/gym-hero.png"
        />
        <source
          media="(min-width: 601px)"
          srcset="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/gym-hero.png"
        />
        <img
          loading="lazy"
          decoding="async"
          src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/gym-hero.png"
          alt="field"
          width="1920"
          height="1200"
          aria-hidden="true"
        />
      </picture>
      <img
        className="cs-graphic"
        src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Graphics/white-splatter2.svg"
        alt="graphic"
        height="161"
        width="1920"
        loading="lazy"
        decoding="async"
      />
      {/* <!--This is a dark version. Download the image and change the fill color to match the color of the section background below it--> */}
      <img
        className="cs-graphic cs-graphic-dark"
        src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Graphics/dark-mode-splatter2.svg"
        alt="graphic"
        height="161"
        width="1920"
        loading="lazy"
        decoding="async"
      />{" "}
      
    </section>
  );
};
export default Landing_C_PaintSplat;
