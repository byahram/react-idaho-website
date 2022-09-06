// rfec
import React from "react";

function Slider(props) {
  return (
    <section id="sliderType" className={`slider__wrap ${props.fonts}`}>
      <h2 className="blind">슬라이드 유형</h2>
      <div className="slider__inner">
        <div className="slider">
          <div className="slider__img">
            <div className="desc">
              <span>Idaho</span>
              <h3>Bogus Basin</h3>
              <p>
                The Treasure Valley's year-round destination for mountain
                recreation, education, and community.
                <br />
                operated by the Bogus Basin Recreation Association
              </p>
              <div className="btn">
                <a href="/">VIEW MORE</a>
                <a href="/" className="black">
                  GO TO SITE
                </a>
              </div>
            </div>
          </div>
          <div className="slider__arrow">
            <a href="/" className="left">
              <span className="blind">이전 이미지</span>
            </a>
            <a href="/" className="right">
              <span className="blind">다음 이미지</span>
            </a>
          </div>
          <div className="slider__dot">
            <a href="/" className="dot active">
              <span className="blind">1</span>
            </a>
            <a href="/" className="dot">
              <span className="blind">2</span>
            </a>
            <a href="/" className="dot">
              <span className="blind">3</span>
            </a>
            <a href="/" className="play">
              <span className="blind">플레이</span>
            </a>
            <a href="/" className="stop">
              <span className="blind">정지</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Slider;
