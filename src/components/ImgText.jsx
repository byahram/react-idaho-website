import React from "react";

function ImgText(props) {
  return (
    <section
      id="imgTextType"
      className={`imgText__wrap ${props.skill[0]} ${props.skill[1]} ${props.skill[2]}`}
    >
      <h2 className="blind">이미지 텍스트 유형</h2>
      <div className="imgText__inner container">
        <div className="imgText__txt">
          <span className="small">EAT&DRINK</span>
          <h3 className="title">Did you know..?</h3>
          <p className="desc">
            Visit Idaho and discover exquisite dining experiences, award-winning
            wineries and incredible craft beers.
          </p>
          <ul className="list">
            <li>
              <a href="/">
                Idaho leads the nation in potato production producing nearly ⅓
                of all U.S. potatoes.
              </a>
            </li>
            <li>
              <a href="/">
                Huckleberries, Idaho’s state fruit, can be found in a wide
                variety of delicacies across the state from pies to ice cream to
                vodka.
              </a>
            </li>
            <li>
              <a href="/">
                One of Bear Island Brewing's uniquely Idaho brews is the Idaho
                Potato Ale, a balanced IPA made with Idaho Russets.
              </a>
            </li>
          </ul>
        </div>
        <div className="imgText__img img1">
          <a href="/">Boise Fry Company</a>
        </div>
        <div className="imgText__img img2">
          <a href="/" className="blue">
            Idaho Breweries
          </a>
        </div>
      </div>
    </section>
  );
}

export default ImgText;
