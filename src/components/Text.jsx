import React from "react";

function Text(props) {
  return (
    <section
      id="textType"
      className={`text__wrap ${props.skill[0]} ${props.skill[1]}`}
    >
      <span>If you plan to visit Idaho,</span>
      <h2 className="mb70">TRAVEL TIPS</h2>
      <div className="text__inner container">
        <div className="text t1">
          <h3 className="text__title">Outdoors</h3>
          <p className="text__desc">
            If you crave the great outdoors, Idaho is the place for you! Hike,
            bike and paddle your way across Idaho’s spectacular landscapes and
            waterways.
          </p>
          <a className="text__btn" href="/">
            more
          </a>
        </div>
        <div className="text t2">
          <h3 className="text__title">Family Fun</h3>
          <p className="text__desc">
            Need some inspiration for your next family trip? Check out these
            travel tips and discover family adventures fit for both kids and
            kids at heart.
          </p>
          <a className="text__btn" href="/">
            more
          </a>
        </div>
        <div className="text t3">
          <h3 className="text__title">Seasonal</h3>
          <p className="text__desc">
            Whether you’re embarking on an unforgettable summer whitewater trip,
            cruising the road in search of stunning fall foliage or shredding
            some fresh powder at one of the state’s 18 ski resorts, Idaho has an
            adventure for you no matter the season.
          </p>
          <a className="text__btn" href="/">
            more
          </a>
        </div>
        <div className="text t4">
          <h3 className="text__title">Arts & Culture</h3>
          <p className="text__desc">
            Visit Idaho and discover a rich and diverse arts & culture scene.
            Explore art museums, saunter through historical sites, sample Basque
            culture, or grab a seat to enjoy live music and theater
            performances.
          </p>
          <a className="text__btn" href="/">
            more
          </a>
        </div>
        <div className="text t5">
          <h3 className="text__title">Itineraries</h3>
          <p className="text__desc">
            Whether you’re an outdoor adventurer or a culinary crusader, find an
            itinerary that best fits your vacation plans.
          </p>
          <a className="text__btn" href="/">
            more
          </a>
        </div>
        <div className="text t6">
          <h3 className="text__title">Outdoors</h3>
          <p className="text__desc">
            If you crave the great outdoors, Idaho is the place for you! Hike,
            bike and paddle your way across Idaho’s spectacular landscapes and
            waterways.
          </p>
          <a className="text__btn" href="/">
            more
          </a>
        </div>
      </div>
    </section>
  );
}

export default Text;
