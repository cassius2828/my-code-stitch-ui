import { useState } from "react";

const Accordion_Right_Img_Left = () => {
  const [num, setNum] = useState(null);

  const onItemToggle = (itemNum) => {
    if (num === itemNum) {
      setNum(null);
    } else {
      setNum(itemNum);
    }
  };
  return (
    <section id="services-1666">
      <div className="cs-container">
        <div className="cs-image-group">
          <picture className="cs-picture">
            {/* <!--Mobile Image--> */}
            <source
              media="(max-width: 600px)"
              srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/people-standing.jpeg"
            />
            {/* <!--Tablet and above Image--> */}
            <source
              media="(min-width: 601px)"
              srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/people-standing.jpeg"
            />
            <img
              loading="lazy"
              decoding="async"
              src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/people-standing.jpeg"
              alt="people standing"
              width="605"
              height="690"
            />
          </picture>
          {/* <!--SVG Graphic--> */}
          <img
            className="cs-floater"
            src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Graphics/white-swirl.svg"
            alt="graphic"
            loading="lazy"
            decoding="async"
            height="710"
            aria-hidden="true"
            width="690"
          />
        </div>
        <div className="cs-content">
          <span className="cs-topper">Our Courses</span>
          <h2 className="cs-title">
            Stitch Center for Process Safety Training
          </h2>
          <p className="cs-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
            accusantium fuga dolore nulla provident inventore possimus,
            incidunt, tenetur voluptate laudantium consequuntur commodi. In
            perferendis quod, non ad veniam similique assumenda deleniti nobis
            quaerat ipsum cum! Velit provident eligendi cumque excepturi!
          </p>
          <ul className="cs-faq-group">
            <AccordionItem
              handleItemToggle={onItemToggle}
              active={num === "1" ? true : false}
              num="1"
              title="On Demand E-Training"
            />
            <AccordionItem
              handleItemToggle={onItemToggle}
              active={num === "2" ? true : false}
              num="2"
              title="Hybrid e-Training"
              icon="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/calendar-gold.svg"
            />
            <AccordionItem
              handleItemToggle={onItemToggle}
              active={num === "3" ? true : false}
              num="3"
              title="Live Instructor E-Training"
              icon="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/map-pin-gold.svg"
            />
            <AccordionItem
              handleItemToggle={onItemToggle}
              active={num === "4" ? true : false}
              num="4"
              title="On-site Classroom Training"
              icon="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/map-pin-gold-2.svg"
            />
          </ul>
          <a href="" className="cs-button-solid">
            View All Courses
          </a>
        </div>
      </div>
    </section>
  );
};
export default Accordion_Right_Img_Left;

export const AccordionItem = ({
  text = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod sapiente
placeat enim molestias quam, illum ullam ipsa repellat, necessitatibus
quis cumque voluptatum nesciunt. Quia possimus est in recusandae saepe
nostrum.`,
  title = `This is a title`,
  icon = `https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/computer-gold.svg`,
  num,
  active,
  handleItemToggle,
}) => {
  return (
    <li className={active ? "cs-faq-item active" : "cs-faq-item"}>
      <button className="cs-button">
        <img
          className="cs-icon"
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          src={icon}
          alt="icon"
          width="32"
          height="32"
        />
        <span className="cs-button-text">{title}</span>
        <span
          onClick={() => handleItemToggle(num)}
          className="cs-indicator"
          aria-hidden="true"
        ></span>
      </button>
      {active && <p className="cs-item-p">{text}</p> }
    </li>
  );
};
