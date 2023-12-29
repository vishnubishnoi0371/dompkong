import React from "react";
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
  return (
    <div className="bg-clr mt_2 min_vh_150 pt-3 position-relative">
      <div className="d-none d-lg-block">
        <img
          className=" kong-11 position-absolute kong_border kong_wh"
          src={kongtwo}
          alt="#"
        />
        <img
          className=" kong-12 position-absolute kong_border kong_wh"
          src={kongtwot}
          alt="#"
        />
        <img
          className=" kong-13 position-absolute kong_border kong_wh"
          src={kongthree}
          alt="#"
        />
        <img
          className=" kong-14 position-absolute kong_border kong_wh"
          src={kongfour}
          alt="#"
        />
        <img
          className=" kong-15 position-absolute kong_border kong_wh"
          src={kongfive}
          alt="#"
        />
      </div>
      <p className="fs-xxl fw-normal ff-azo white-F text-center mb-0 lh-108">
        THE KONGS
      </p>
      <div className="d-flex justify-content-center position-relative align-items-center">
        <img className="large_kong z-1" src={kongone} alt="#" />
        <span className="kong_bg_sh  position-absolute"></span>
      </div>
      <div className="d-none d-lg-block">
        <img
          className="kong-21 position-absolute kong_border kong_wh"
          src={kongtwo_r}
          alt="#"
        />
        <img
          className=" kong-22 position-absolute kong_border kong_wh"
          src={kongtwot_r}
          alt="#"
        />
        <img
          className=" kong-23 position-absolute kong_border kong_wh"
          src={kongthree_r}
          alt="#"
        />
        <img
          className=" kong-24 position-absolute kong_border kong_wh"
          src={kongfour_r}
          alt="#"
        />
        <img
          className=" kong-25 position-absolute kong_border kong_wh"
          src={kongfive_r}
          alt="#"
        />
      </div>

      <Container className=" d-block d-lg-none">
        <Row className=" align-items-cenetr">
          <Col md={3} sm={4} className=" col-6 pt-3">
            <img className="w-100 kong_border" src={kongtwo} alt="#" />
          </Col>
          <Col md={3} sm={4} className=" col-6 pt-3">
            <img className="w-100 kong_border" src={kongtwot} alt="#" />
          </Col>
          <Col md={3} sm={4} className=" col-6 pt-3">
            <img className="w-100 kong_border" src={kongthree} alt="#" />
          </Col>
          <Col md={3} sm={4} className=" col-6 pt-3">
            <img className="w-100 kong_border" src={kongfour} alt="#" />
          </Col>
          <Col md={3} sm={4} className=" col-6 pt-3">
            <img className="w-100 kong_border" src={kongfive} alt="#" />
          </Col>
          <Col md={3} sm={4} className=" col-6 pt-3">
            <img className="w-100 kong_border" src={kongtwo_r} alt="#" />
          </Col>
          <Col md={3} sm={4} className=" col-6 pt-3">
            <img className="w-100 kong_border" src={kongtwot_r} alt="#" />
          </Col>
          <Col md={3} sm={4} className=" col-6 pt-3">
            <img className="w-100 kong_border" src={kongthree_r} alt="#" />
          </Col>
          <Col md={3} sm={4} className=" col-6  pt-3">
            <img className="w-100 kong_border" src={kongfour_r} alt="#" />
          </Col>
          <Col md={3} sm={4} className=" col-6 mb-5  pt-3">
            <img className="w-100 kong_border" src={kongfive_r} alt="#" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Kongs;
