import React, { useReducer } from "react";
import Slide from "./Slide";
import PropTypes from "prop-types";

function mod(a, b) {
  return ((a % b) + b) % b;
}

let defaultState = {
  index: 0,
  goToSlide: null,
  prevPropsGoToSlide: 0,
  newSlide: false,
};

export default function Carousel({
  slides = [],
  offsetRadius = 2,
  animationConfig = { tension: 120, friction: 14 },
}) {
  const reducer = (prevState, action) => ({ ...prevState, ...action });
  const [state, dispatch] = useReducer(reducer, { ...defaultState });
  const modBySlidesLength = (index) => {
    return mod(index, slides.length);
  };

  const moveSlide = (direction) => {
    dispatch({
      index: modBySlidesLength(state.index + direction),
      goToSlide: null,
    });
  };

  function clampOffsetRadius(offsetRadius) {
    const upperBound = Math.floor((slides.length - 1) / 2);

    if (offsetRadius < 0) {
      return 0;
    }
    if (offsetRadius > upperBound) {
      return upperBound;
    }
    return offsetRadius;
  }

  function getPresentableSlides() {
    const { index } = state;
    offsetRadius = clampOffsetRadius(offsetRadius);
    const presentableSlides = new Array();

    for (let i = -offsetRadius; i < 1 + offsetRadius; i++) {
      presentableSlides.push(slides[modBySlidesLength(index + i)]);
    }
    return presentableSlides;
  }

  return (
      <div className="w-full h-full overflow-hidden">
        {getPresentableSlides().map((slide, presentableIndex) => (
          <Slide
            key={slide.key}
            content={slide.content}
            moveSlide={moveSlide}
            offsetRadius={clampOffsetRadius(offsetRadius)}
            index={presentableIndex}
            animationConfig={animationConfig}
          />
        ))}
      </div>
  );
}

Carousel.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.any,
      content: PropTypes.object,
    })
  ).isRequired,
  goToSlide: PropTypes.number,
  showNavigation: PropTypes.bool,
  offsetRadius: PropTypes.number,
  animationConfig: PropTypes.object,
};
