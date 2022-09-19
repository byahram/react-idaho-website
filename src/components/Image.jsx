import React from "react";

function ImageInfo(props) {
  return (
    <article className="image img1">
      <h3 className="image__title">{props.title}</h3>
      <p className="image__desc">{props.desc}</p>
      <a className="image__btn" href="/">
        {props.btn}
      </a>
    </article>
  );
}

const imageText = [
  {
    title: "Spirit of Boise Balloon",
    img: "img1",
    desc: "This annual event can be recognized as one of Boise’s final summer events. It will held this year from August 31st through September 4th.",
    btn: "view more",
  },
  {
    title: "Western Idaho Fair",
    img: "img2",
    desc: "This event is a celebration of agriculture, ranching, and life in the state of Idaho. Tickets are available Starting August 19, 2022.",
    btn: "view more",
  },
];

function Image(props) {
  return (
    <section
      id="imageType"
      className={`image__wrap ${props.skill[0]} ${props.skill[1]}`}
    >
      <div>
        <h2>2022 Upcoming Events in Idaho</h2>
        <p>
          Looking for things to do in Idaho? <br />
          Whether you're a local, new in town or just cruising through we've got
          loads of great tips and events.
        </p>
      </div>
      <div className="image__inner container">
        {imageText.map((txt) => (
          <ImageInfo
            key={txt.title}
            title={txt.title}
            desc={txt.desc}
            btn={txt.btn}
          />
        ))}
      </div>
    </section>
  );
}

export default Image;
