const Landing_Split_Hero_Left_Dark = () => {
  return (
    <section id="hero-856">
      <div class="cs-container">
        <div class="cs-content">
          <span class="cs-topper">Modern and Professional</span>
          <h1 class="cs-title">Physical Therapy & Health and Wellness</h1>
          <p class="cs-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus
            unde id saepe quo. Est, ea! Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Id, provident? Lorem ipsum dolor sit amet
            consectetur adipisicing.
          </p>
          <a href="" class="cs-button-solid">
            Schedule An Appointment
          </a>
        </div>
        {/* <!--Hero Image--> */}
        <picture class="cs-picture">
          {/* <!--Mobile--> */}
          <source
            media="(max-width: 600px)"
            srcset="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images%2FPeople%2Ftherapy.jpg"
          />
          {/* <!--Tablet--> */}
          <source
            media="(min-width: 601px)"
            srcset="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images%2FPeople%2Ftherapy.jpg"
          />
          {/* <!--Desktop--> */}
          <source
            media="(min-width: 1024px)"
            srcset="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images%2FPeople%2Ftherapy.jpg"
          />
          <img
            aria-hidden="true"
            decoding="async"
            src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images%2FPeople%2Ftherapy.jpg"
            alt="therapy"
            width="570"
            height="701"
          />
        </picture>
      </div>
      {/* <!--Change the svg path fill color to whatever color the section below is so you can match it and create the illusion it is all one piece--> */}
      <svg
        class="cs-wave"
        width="1920"
        height="179"
        viewBox="0 0 1920 179"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1920 179V91.3463C1835.33 91.3463 1715.47 76.615 1549.2 32.9521C1299.48 -32.3214 1132.77 12.1006 947.32 61.5167C810.762 97.9044 664.042 137 466.533 137C331.607 137 256.468 123.447 188.082 111.113C130.974 100.812 78.5746 91.3609 0 91.3609V179H1920Z"
          fill="white"
        />
      </svg>
    </section>
  );
};
export default Landing_Split_Hero_Left_Dark;
