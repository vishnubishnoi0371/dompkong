import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
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

const Kongs = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <div className="bg-clr mt_2 min_vh_150 pt-3 position-relative">
      <div className="d-none d-lg-block overflow-hidden">
        <img
          className=" kong-11 position-absolute kong_border kong_wh"
          src={kongtwo}
          alt="#" data-aos="flip-left"
              data-aos-duration="2000"
        />
        <img
          className=" kong-12 position-absolute kong_border kong_wh"
          src={kongtwot}
          alt="#"  data-aos="flip-left"
              data-aos-duration="2000"
        />
        <img
          className=" kong-13 position-absolute kong_border kong_wh"
          src={kongthree}
          alt="#"  data-aos="flip-left"
              data-aos-duration="2000"
        />
        <img
          className=" kong-14 position-absolute kong_border kong_wh"
          src={kongfour}
          alt="#"  data-aos="flip-left"
              data-aos-duration="2000"
        />
        <img
          className=" kong-15 position-absolute kong_border kong_wh"
          src={kongfive}
          alt="#"  data-aos="flip-left"
              data-aos-duration="2000"
        />
      </div>
      <p className="fs-xxl fw-normal ff-azo white-F text-center mb-0 lh-108">
        THE KONGS
      </p>
      <div  data-aos="zoom-in"
              data-aos-duration="2000" className="d-flex justify-content-center position-relative align-items-center">
        <img className="large_kong z-1" src={kongone} alt="#" />
        <span className="kong_bg_sh  position-absolute"></span>
      </div>
      <div className="d-none d-lg-block overflow-hidden">
        <img
          className="kong-21 position-absolute kong_border kong_wh"
          src={kongtwo_r}
          alt="#"  data-aos="flip-left"
              data-aos-duration="2000"
        />
        <img
          className=" kong-22 position-absolute kong_border kong_wh"
          src={kongtwot_r}
          alt="#"  data-aos="flip-left"
              data-aos-duration="2000"
        />
        <img
          className=" kong-23 position-absolute kong_border kong_wh"
          src={kongthree_r}
          alt="#"  data-aos="flip-left"
              data-aos-duration="2000"
        />
        <img
          className=" kong-24 position-absolute kong_border kong_wh"
          src={kongfour_r}
          alt="#"  data-aos="flip-left"
              data-aos-duration="2000"
        />
        <img
          className=" kong-25 position-absolute kong_border kong_wh"
          src={kongfive_r}
          alt="#"  data-aos="flip-left"
              data-aos-duration="2000"
        />
      </div>

      <Container className=" d-block d-lg-none overflow-hidden">
        <Row className=" align-items-cenetr">
          <Col md={3} sm={4} className=" col-6 pt-3">
            <img
              className="w-100 kong_border"
              src={kongtwo}
              alt="#"
             data-aos="flip-left"
              data-aos-duration="2000"
            />
          </Col>
          <Col md={3} sm={4} className=" col-6 pt-3">
            <img
              className="w-100 kong_border"
              src={kongtwot}
              alt="#"
             data-aos="flip-left"
              data-aos-duration="2000"
            />
          </Col>
          <Col md={3} sm={4} className=" col-6 pt-3">
            <img
              className="w-100 kong_border"
              src={kongthree}
              alt="#"
             data-aos="flip-left"
              data-aos-duration="2000"
            />
          </Col>
          <Col md={3} sm={4} className=" col-6 pt-3">
            <img
              className="w-100 kong_border"
              src={kongfour}
              alt="#"
             data-aos="flip-left"
              data-aos-duration="2000"
            />
          </Col>
          <Col md={3} sm={4} className=" col-6 pt-3">
            <img
              className="w-100 kong_border"
              src={kongfive}
              alt="#"
             data-aos="flip-left"
              data-aos-duration="2000"
            />
          </Col>
          <Col md={3} sm={4} className=" col-6 pt-3">
            <img
              className="w-100 kong_border"
              src={kongtwo_r}
              alt="#"
             data-aos="flip-left"
              data-aos-duration="2000"
            />
          </Col>
          <Col md={3} sm={4} className=" col-6 pt-3">
            <img
              className="w-100 kong_border"
              src={kongtwot_r}
              alt="#"
             data-aos="flip-left"
              data-aos-duration="2000"
            />
          </Col>
          <Col md={3} sm={4} className=" col-6 pt-3">
            <img
              className="w-100 kong_border"
              src={kongthree_r}
              alt="#"
             data-aos="flip-left"
              data-aos-duration="2000"
            />
          </Col>
          <Col md={3} sm={4} className=" col-6  pt-3">
            <img
              className="w-100 kong_border"
              src={kongfour_r}
              alt="#"
             data-aos="flip-left"
              data-aos-duration="2000"
            />
          </Col>
          <Col md={3} sm={4} className=" col-6 mb-5  pt-3">
            <img
              className="w-100 kong_border"
              src={kongfive_r}
              alt="#"
             data-aos="flip-left"
              data-aos-duration="2000"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Kongs;
