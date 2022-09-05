import React from "react";
import hotSpring from "../assets/img/id-hot-spring.jpg";
import roadTrip from "../assets/img/idaho-road.jpg";
import statePark from "../assets/img/id-yellow-stone-park.jpg";

function Card(props) {
  return (
    <section
      id="cardType"
      className={`card__wrap ${props.skill[0]} ${props.skill[1]}`}
    >
      <h2>THINGS TO DO</h2>
      <p>
        Family vacation or romantic getaway, thrill-seeker or art buff…
        <br />
        there’s an adventure for you to discover in Idaho.
      </p>
      <div className="card__inner container">
        <article className="card">
          <figure className="card__header">
            <img src={hotSpring} alt="hot spring" />
          </figure>
          <div className="card__body">
            <h3 className="tit">HOT SPRING</h3>
            <p className="desc">
              you’ll find Idaho’s beloved hot springs waiting to wash away your
              stress. For an alternative soaking experience, visit any of the
              more developed hot springs spots for a soak with modern amenities.
            </p>
            <a
              className="btn"
              href="https://visitidaho.org/things-to-do/hot-springs/"
            >
              view more
              <span aria-hidden="true">
                <svg
                  width="52"
                  height="8"
                  viewBox="0 0 52 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M51.3536 4.35355C51.5488 4.15829 51.5488 3.84171 51.3536 3.64645L48.1716 0.464466C47.9763 0.269204 47.6597 0.269204 47.4645 0.464466C47.2692 0.659728 47.2692 0.976311 47.4645 1.17157L50.2929 4L47.4645 6.82843C47.2692 7.02369 47.2692 7.34027 47.4645 7.53553C47.6597 7.7308 47.9763 7.7308 48.1716 7.53553L51.3536 4.35355ZM0 4.5H51V3.5H0V4.5Z"
                    fill="#5B5B5B"
                  />
                </svg>
              </span>
            </a>
          </div>
        </article>
        <article className="card">
          <figure className="card__header">
            <img src={statePark} alt="state park" />
          </figure>
          <div className="card__body">
            <h3 className="tit">STATE PARK</h3>
            <p className="desc">
              From pristine lakes to sky-piercing mountains, Idaho’s state parks
              offer an impressive variety of terrain and beauty. Whether you’re
              hiking beneath towering ponderosa pines or embarking on a
              historical journey, there’s plenty to discover.
            </p>
            <a
              className="btn"
              href="https://visitidaho.org/things-to-do/state-parks/"
            >
              view more
              <span aria-hidden="true">
                <svg
                  width="52"
                  height="8"
                  viewBox="0 0 52 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M51.3536 4.35355C51.5488 4.15829 51.5488 3.84171 51.3536 3.64645L48.1716 0.464466C47.9763 0.269204 47.6597 0.269204 47.4645 0.464466C47.2692 0.659728 47.2692 0.976311 47.4645 1.17157L50.2929 4L47.4645 6.82843C47.2692 7.02369 47.2692 7.34027 47.4645 7.53553C47.6597 7.7308 47.9763 7.7308 48.1716 7.53553L51.3536 4.35355ZM0 4.5H51V3.5H0V4.5Z"
                    fill="#5B5B5B"
                  />
                </svg>
              </span>
            </a>
          </div>
        </article>
        <article className="card">
          <figure className="card__header">
            <img src={roadTrip} alt="road trip" />
          </figure>
          <div className="card__body">
            <h3 className="tit">ROAD TRIP</h3>
            <p className="desc">
              In Idaho, taking the road less traveled is one of the best ways to
              explore the state. And with 31 unique scenic byways, there are
              plenty of opportunities to stop off for an adventure.
            </p>
            <a
              className="btn"
              href="https://visitidaho.org/things-to-do/road-trips/"
            >
              view more
              <span aria-hidden="true">
                <svg
                  width="52"
                  height="8"
                  viewBox="0 0 52 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M51.3536 4.35355C51.5488 4.15829 51.5488 3.84171 51.3536 3.64645L48.1716 0.464466C47.9763 0.269204 47.6597 0.269204 47.4645 0.464466C47.2692 0.659728 47.2692 0.976311 47.4645 1.17157L50.2929 4L47.4645 6.82843C47.2692 7.02369 47.2692 7.34027 47.4645 7.53553C47.6597 7.7308 47.9763 7.7308 48.1716 7.53553L51.3536 4.35355ZM0 4.5H51V3.5H0V4.5Z"
                    fill="#5B5B5B"
                  />
                </svg>
              </span>
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Card;
