import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";

const ImgSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Carousel {...settings}>
      <Wrap>
        <a>
          <img src="/images/slider-scales.jpg" />
        </a>
      </Wrap>

      <Wrap>
        <a>
          <img src="/images/slider-scale.jpg" />
        </a>
      </Wrap>

      <Wrap>
        <a>
          <img src="/images/slider-badging.jpg" />
        </a>
      </Wrap>

      <Wrap>
        <a>
          <img src="/images/slider-badag.jpg" />
        </a>
      </Wrap>
    </Carousel>
  );
};

//customizing all the in built features of the carousel

const Carousel = styled(Slider)`
  padding: 2rem 0;

  & > button {
    cursor: pointer;
    width: 5vw;
    height: 100%;
    z-index: 1;
    opacity: 0;

    &:hover {
      transition: opacity 300ms ease;
      opacity: 1;
    }
  }

  ul li button {
    &::before {
      font-size: 15px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button::before {
    color: #f9f9f9;
  }

  .slick-list {
    overflow: initial;
  }

  .slick-prev {
    left: -50px;
  }

  .slick-next {
    right: -50px;
  }
`;

const Wrap = styled.div`
  border-radius: 8px;

  cursor: pointer;
  /* outline: 2px solid red; */

  padding: 5px;
  a {
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    img {
      width: 100%;
      object-fit: cover;
      border-radius: 8px;
    }
  }

  &:hover {
    border: 3px solid white;
    padding: 0;
    transition: all 500ms ease-in-out;
    transform: scale(1.02);
  }
`;

export default ImgSlider;
