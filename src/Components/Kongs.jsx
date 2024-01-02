import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import React, { useEffect } from "react";

import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import kongone from "../Assets/Images/kong-img-1.png";
import kongtwo from "../Assets/Images/kong-1.png";
import kongtwot from "../Assets/Images/kong-2.png";
import kongthree from "../Assets/Images/kong-3.png";
import kongfour from "../Assets/Images/kong-4.png";
import kongfive from "../Assets/Images/kong-5.png";
import kongtwo_r from "../Assets/Images/kong-r-1.png";
import kongtwot_r from "../Assets/Images/kong-r-2.png";
import kongthree_r from "../Assets/Images/konh-r-3.png";
import kongfour_r from "../Assets/Images/kong-r-4.png";
import kongfive_r from "../Assets/Images/kong-r-5.png";
{
  /* <img
className=" kong-12 position-absolute kong_border kong_wh"
src={kongtwot}
alt="#"  data-aos="flip-left"
    data-aos-duration="2000"
/> */
}

const Kongs = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  var up_kong = {
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    cssEase: "linear",
    pauseOnHover: false,
    speed: 2500,
    autoplaySpeed: 0,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
          dots: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
    ],
  };
  var down_kong = {
    dots: false,
    arrows: false,
    rtl: true,
    pauseOnHover:true,
    autoplay: true,
    infinite: true,
    cssEase: "linear",
    pauseOnHover: false,
    speed: 2500,
    autoplaySpeed: 0,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
          dots: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
    ],
  };
  return (
    <section className="py-5 bg-clr mt_2 position-relative overflow-hidden ">
      <Container className="mb-md-5  pb-md-5">
        <div className="d-xl-block d-none pt-5 small-images">
          <img
            className="left1 position-absolute kong_border kong_wh"
            src={kongtwo}
            alt="kongs"
          />
          <img
            className="left2 position-absolute kong_border kong_wh"
            src={kongtwot}
            alt="kongs"
          />
          <img
            className="left3 position-absolute kong_border kong_wh"
            src={kongthree}
            alt="kongs"
          />
          <img
            className="left4 position-absolute kong_border kong_wh"
            src={kongfour}
            alt="kongs"
          />
          <img
            className="left5 position-absolute kong_border kong_wh"
            src={kongfive}
            alt="kongs"
          />
          <img
            className="right1 position-absolute kong_border kong_wh"
            src={kongtwo_r}
            alt="kongs"
          />
          <img
            className="right2 position-absolute kong_border kong_wh"
            src={kongtwot_r}
            alt="kongs"
          />
          <img
            className="right3 position-absolute kong_border kong_wh"
            src={kongthree_r}
            alt="kongs"
          />
          <img
            className="right4 position-absolute kong_border kong_wh"
            src={kongfour_r}
            alt="kongs"
          />
          <img
            className="right5 position-absolute kong_border kong_wh"
            src={kongfive_r}
            alt="kongs"
          />
        </div>
        <div className="mb-md-5 pb-lg-5">
          <h2
            className="white-F fs-xxl m-0  fw-normal text-center ff-azo m-0 pb-4 "
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            THE KONGS
          </h2>
          <Slider {...up_kong} className="d-xl-none  mb_65 d-block">
            <div>
              <img
                className=" kong_border w-xl-100"
                src={kongtwo}
                alt="kongs"
              />
            </div>
            <div>
              <img
                className=" kong_border w-xl-100"
                src={kongtwot}
                alt="kongs"
              />
            </div>
            <div>
              <img
                className=" kong_border w-xl-100"
                src={kongthree}
                alt="kongs"
              />
            </div>
            <div>
              <img
                className=" kong_border w-xl-100"
                src={kongfour}
                alt="kongs"
              />
            </div>
            <div>
              <img
                className=" kong_border w-xl-100"
                src={kongfive}
                alt="kongs"
              />
            </div>
          </Slider>
          <div
            id="big-image"
            className="d-flex  justify-content-center align-items-center mb-xl-5 pb-xl-5 position-relative z-1"
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
            <img className="w--100" src={kongone} alt="kong" />
            <span className="kongselips position-absolute "></span>
            <div className="kong_ellipse"></div>
          </div>
        </div>

        <Slider {...down_kong} className="d-xl-none d-block gap-2">
          <div>
            <img
              className=" kong_border w-xl-100 "
              src={kongtwo_r}
              alt="kongs"
            />
          </div>
          <div>
            <img
              className=" kong_border w-xl-100 "
              src={kongtwot_r}
              alt="kongs"
            />
          </div>
          <div>
            <img
              className=" kong_border w-xl-100 "
              src={kongthree_r}
              alt="kongs"
            />
          </div>
          <div>
            <img
              className=" kong_border w-xl-100 "
              src={kongfour_r}
              alt="kongs"
            />
          </div>
          <div>
            <img
              className=" kong_border w-xl-100 "
              src={kongfive_r}
              alt="kongs"
            />
          </div>
        </Slider>
      </Container>
    </section>
  );
};

export default Kongs;
