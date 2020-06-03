import React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "./PreviewCompatibleImage";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";

const params = {
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
};

const ImageSwiper = ({ gridItems }) => (
  <Swiper {...params}>
    {gridItems.map((item) => (
      <div key={item.text}>
        <section className="section">
          <div className="has-text-centered">
            <div
              style={{
                width: "500px",
                display: "inline-block",
              }}
            >
              <PreviewCompatibleImage imageInfo={item} />
            </div>
          </div>
        </section>
      </div>
    ))}
  </Swiper>
);

ImageSwiper.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
};

export default ImageSwiper;
