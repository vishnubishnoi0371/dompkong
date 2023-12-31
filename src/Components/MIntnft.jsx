import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import mintbottle from "../Assets/Images/mint-bottle.png";
import mintstroke1 from "../Assets/Images/mint_stroke.png";
import mintstroke2 from "../Assets/Images/mint_stroke-2.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const MIntnft = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  let [count, setCount] = useState(1);

  function incrementCount() {
    setCount((prevCount) => (prevCount < 40 ? prevCount + 1 : prevCount));
  }
  function decrementCount() {
    setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : 1));
  }
  const formattedCount = count < 10 ? `0${count}` : count;

  return (
    <div className="mint-bg-img mt_2 position-relative overflow-hidden">
      <Container className="my_container">
        <Row className="align-items-center pt-5 justify-content-center">
          <Col
            md={6}
            className="col-12  "
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <div className="ms-5 ps-3 ms-md-0">
              <img
                className="bottle_size z_1 ms-5 ms-md-0"
                src={mintbottle}
                alt="#"
              />
            </div>
          </Col>
          <Col
            md={6}
            className="col-12 "
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <p className="fs-xxl fw-normal text-center text-md-start white-F ff-azo mb-0 lh-108 text-nowrap">
              Mint NFT
            </p>
            <Row className=" pt-2 pt-md-5">
              <Col className="col-6">
                <p className="fs-lg white-F mb-0 fw-900 ff-mon ">9999 </p>
                <p className="fs-sm white-F ff-mon fw-normal lh-160 mb-0  text-nowrap pt-1 pt-md-3">
                  of 10,000 minted
                </p>
                <p className="fs-lg white-F mb-0 fw-900 ff-mon pt-1 pt-md-4">
                  Max 9{" "}
                </p>
                <p className="fs-sm white-F ff-mon fw-normal lh-160 mb-0  text-nowrap pt-1 pt-md-3">
                  NFTs per transaction
                </p>
              </Col>
              <Col className="col-6">
                <p className="fs-lg white-F mb-0 fw-900 ff-mon ">.2 ETH </p>
                <p className="fs-sm white-F ff-mon fw-normal text-nowrap lh-160 mb-0  pt-1 pt-md-3">
                  per NFT{" "}
                </p>
                <p className="fs-lg white-F mb-0 fw-900 ff-mon pt-1 pt-md-4">
                  Max 2{" "}
                </p>
                <p className="fs-sm white-F ff-mon fw-normal text-nowrap lh-160 mb-0  pt-1 pt-md-3">
                  Transaction per wallet{" "}
                </p>
              </Col>
            </Row>

            <div
              className=" d-flex align-items-center mt-4 gap-3"
              data-aos="fade-up"
            >
              <button
                className="fw-900 lh-108 fs-lg black-0 ff-mon bg-White1 plus-minus m-0"
                onClick={decrementCount}
              >
                -
              </button>
              <div className="s5-number d-flex align-items-center justify-content-center ff-mon fs-lg white-F fw-900 lh-108">
                {" "}
                {formattedCount}
              </div>
              <button
                className="fw-900 lh-108 fs-lg black-0 ff-mon bg-White1 plus-minus m-0"
                onClick={incrementCount}
              >
                +
              </button>
            </div>
            <button className="fs-md fw-normal black-0 mb-0 ff-azo mint-btn text-nowrap mt-4">
              MINT NOW
            </button>
          </Col>
        </Row>
      </Container>
      <img
        className="w-100 position-absolute  mint_stroke_set"
        src={mintstroke1}
        alt="#"
      />
      <img
        className="w-100 position-absolute mint_stroke_set-2"
        src={mintstroke2}
        alt="#"
      />

      <span className="mint-sh-1 z_1 d-none d-md-block"></span>
      <span className="mint-sh-2 z-1"></span>
    </div>
  );
};

export default MIntnft;
