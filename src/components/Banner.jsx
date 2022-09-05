import React from "react";

function Banner(props) {
  return (
    <section
      id="bannerType"
      className={`banner__wrap ${props.skill[0]} ${props.skill[1]}`}
    >
      <h2 className="blind">배너 영역</h2>
      <div className="banner__inner">
        <h3 className="title">WELCOME TO IDAHO</h3>
        <p className="desc">
          You can get more information via following page:
          <a href="https://visitidaho.org/" title="유튜브 페이지 이동">
            https://visitidaho.org/
          </a>
        </p>
      </div>
    </section>
  );
}

export default Banner;
