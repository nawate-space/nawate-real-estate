import React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "./PreviewCompatibleImage";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import styled from "styled-components";
import media from "styled-media-query";

const params = {
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
            <ImageBlock>
              <PreviewCompatibleImage imageInfo={item} />
            </ImageBlock>
          </div>
        </section>
      </div>
    ))}
  </Swiper>
);

const ImageBlock = styled.div`
  display: inline-block;
  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    width: 300px;
  `}

  ${media.greaterThan("medium")`
    /* screen width is greater than 1170px (large) */
    width: 500px;
  `}
`;

ImageSwiper.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
};

export default ImageSwiper;
