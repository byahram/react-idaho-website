import React from "react";

function Image(props) {
  return (
    <section
      id="imageType"
      className={`image__wrap ${props.skill[0]} ${props.skill[1]}`}
    >
      <h2>2022 Upcoming Events in Idaho</h2>
      <p>
        Looking for things to do in Idaho? <br />
        Whether you're a local, new in town or just cruising through we've got
        loads of great tips and events.
      </p>
      <div className="image__inner container">
        <article className="image img1">
          <h3 className="image__title">Spirit of Boise Balloon</h3>
          <p className="image__desc">
            This annual event can be recognized as one of Boise’s final summer
            events. It will held this year from August 31st through September
            4th.
          </p>
          <a className="image__btn" href="/">
            view more
          </a>
        </article>
        <article className="image img2">
          <h3 className="image__title">Western Idaho Fair</h3>
          <p className="image__desc">
            This event is a celebration of agriculture, ranching, and life in
            the state of Idaho. Tickets are available Starting August 19, 2022.
          </p>
          <a className="image__btn yellow" href="/">
            view more
          </a>
        </article>
      </div>
    </section>
  );
}

export default Image;
