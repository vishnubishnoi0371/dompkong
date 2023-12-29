import React from "react";
import aboutimg from "../Assets/Images/aboutimg.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const About = () => {
  return (
    <div className="bg-clr  mt_2 ">
      <Container className=" my_container pt-2 pt-md-5">
        <Row className=" align-items-center pt-1 pt-md-5">
          <Col md={6} className="col-12 pt-1 pt-md-5">
            <p className="fs-xxl fw-normal ff-azo mb-0  white-F">About </p>
            <p className="fs-sm fw-normal white-F lh-160 mb-0 mw_450">
              Turpis et tortor vel pharetra nibh. Mauris nisl sit vitae viverra
              amet et. Erat nam molestie. Vitae mollis lacus senectus mattis
              nisl. Porta , adipiscing sed mus diam amet, ac sed tellus.{" "}
            </p>
          </Col>
          <Col md={6} className="col-12 z-1 position-relative">
            <img className=" w-100" src={aboutimg} alt="#" />

            <span className="about-shadow z_1 position-absolute"></span>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
