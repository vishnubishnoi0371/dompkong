import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import timeline from "../Assets/Images/timeline-1.png";
import timeline_mobile from "../Assets/Images/time_mobile_view.png";

const Road = () => {
  return (
    <div className="bg-clr mt_2 py-md-5 pt-4">
      <Container className="my_container">
        <h2 className="white-F pb-2 pb-md-5 pt-4 fs-xxl m-0  fw-normal text-center ff-azo ">
          Roadmap
        </h2>
        <Row className="pt-md-4">
          <Col
            lg={4}
            className="d-flex align-items-center justify-content-center justify-content-xl-start position-relative"
          >
            <img className=" w-100 d-none d-xl-block" src={timeline} alt="#" />
            <img
              className=" mobileview_img d-block d-xl-none"
              src={timeline_mobile}
              alt="#"
            />
          </Col>
          <Col lg={8} className="mt-5 position-relative">
            <hr className="side_timeline  position-absolute d-block d-xl-none" />
            <span className="time_dot_1  d-block d-xl-none position-absolute"></span>
            <span className="time_dot_2  d-block d-xl-none position-absolute"></span>
            <span className="time_dot_3  d-block d-xl-none position-absolute"></span>
            <span className="time_dot_4  d-block d-xl-none position-absolute"></span>
            <span className="time_dot_5 position-absolute  d-block d-xl-none"></span>
            <div className="d-flex align-items-center mb-1 ms-4 ms-lg-0  pb-2 position-relative map_line_set_1 timeline flex-sm-row">
              <a className=" d-none d-xl-block" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="120"
                  height="12"
                  viewBox="0 0 179 12"
                  fill="none"
                >
                  <path
                    d="M0.666667 6C0.666666 8.94552 3.05448 11.3333 6 11.3333C8.94552 11.3333 11.3333 8.94552 11.3333 6C11.3333 3.05448 8.94552 0.666667 6 0.666667C3.05448 0.666666 0.666667 3.05448 0.666667 6ZM167.667 6.00001C167.667 8.94553 170.054 11.3333 173 11.3333C175.946 11.3333 178.333 8.94553 178.333 6.00002C178.333 3.0545 175.946 0.666681 173 0.666681C170.054 0.666681 167.667 3.0545 167.667 6.00001ZM6 7L173 7.00001L173 5.00001L6 5L6 7Z"
                    fill="white"
                  />
                </svg>
              </a>

              <div className="ms-0">
                <h2 className="time-circle m-0 mb-0 ms-xl-2 fs-sm2 fw-900 black-0 lh-108">
                  20%
                </h2>
              </div>
              <div className="ps-3 ps-lg-5">
                <h2 className="text-white  fw-normal ff-azo mb-0 fs-sm2">
                  Phase 1
                </h2>
                <p className="text-white fs-sm fw-normal mw_520 mb-0">
                  Mi amet elementum, posuere tempus odio eu lacinia. Natoque
                  arcu viverra ullamcorper condimentum massa laoree
                </p>
              </div>
            </div>

            <div className="d-flex align-items-center mb-1 ms-4 ms-lg-0  pb-2 position-relative map_line_set_2 timeline flex-sm-row ">
              <a className=" d-none d-xl-block" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="129"
                  height="12"
                  viewBox="0 0 109 12"
                  fill="none"
                >
                  <path
                    d="M0.666667 6C0.666666 8.94552 3.05448 11.3333 6 11.3333C8.94552 11.3333 11.3333 8.94552 11.3333 6C11.3333 3.05448 8.94552 0.666667 6 0.666667C3.05448 0.666666 0.666667 3.05448 0.666667 6ZM97.6667 6.00001C97.6667 8.94553 100.054 11.3333 103 11.3333C105.946 11.3333 108.333 8.94553 108.333 6.00001C108.333 3.05449 105.946 0.666675 103 0.666675C100.054 0.666675 97.6667 3.05449 97.6667 6.00001ZM6 7L103 7.00001L103 5.00001L6 5L6 7Z"
                    fill="white"
                  />
                </svg>
              </a>
              <div className="">
                <h2 className="time-circle fs-sm2 fw-900 mb-0 ff-mon lh-108">
                  40%
                </h2>
              </div>
              <div className="ps-3 ps-lg-5">
                <h2 className="text-white  fw-normal fs-sm2 ff-azo mb-0">
                  Phase 2
                </h2>
                <p className="text-white fs-sm fw-normal mw_470 mb-0">
                  Amet viverra diam netus aenean at mauris, facilisis quis. Urna
                  euismod sed ultricies arcu ullamcorper{" "}
                </p>
              </div>
            </div>

            <div className="d-flex align-items-center mb-1 ms-4 ms-lg-0  pb-2 position-relative map_line_set_3 timeline flex-sm-row ">
              <a className=" d-none d-xl-block" href="#">
                <svg
                  width="129"
                  height="12"
                  viewBox="0 0 123 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.666667 6C0.666667 8.94552 3.05448 11.3333 6 11.3333C8.94552 11.3333 11.3333 8.94552 11.3333 6C11.3333 3.05448 8.94552 0.666667 6 0.666667C3.05448 0.666667 0.666667 3.05448 0.666667 6ZM111.667 6C111.667 8.94552 114.054 11.3333 117 11.3333C119.946 11.3333 122.333 8.94552 122.333 6C122.333 3.05448 119.946 0.666667 117 0.666667C114.054 0.666667 111.667 3.05448 111.667 6ZM6 7H117V5H6V7Z"
                    fill="white"
                  />
                </svg>
              </a>
              <div className="">
                <h2 className="time-circle ms-0 mb-0 fs-sm2 fw-900 black-0 lh-108">
                  60%
                </h2>
              </div>
              <div className="ps-3 ps-lg-5">
                <h2 className="text-white fw-normal fs-sm2 ff-azo mb-0">
                  Phase 3
                </h2>
                <p className="text-white fs-sm fw-normal mw_430 mb-0">
                  Hendrerit massa non sed sit. Lobortis in pulvinar lectus ut in
                  elit nibh faucibus mauris.{" "}
                </p>
              </div>
            </div>

            <div className="d-flex align-items-center mb-1 ms-4 ms-lg-0   position-relative map_line_set_4 timeline flex-sm-row ">
              <a className=" d-none d-xl-block" href="#">
                <svg
                  width="129"
                  height="12"
                  viewBox="0 0 97 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.666667 6C0.666666 8.94552 3.05448 11.3333 6 11.3333C8.94552 11.3333 11.3333 8.94552 11.3333 6C11.3333 3.05448 8.94552 0.666667 6 0.666667C3.05448 0.666666 0.666667 3.05448 0.666667 6ZM85.6667 6.00001C85.6667 8.94553 88.0545 11.3333 91 11.3333C93.9455 11.3333 96.3333 8.94553 96.3333 6.00001C96.3333 3.05449 93.9455 0.666674 91 0.666674C88.0545 0.666674 85.6667 3.05449 85.6667 6.00001ZM6 7L91 7.00001L91 5.00001L6 5L6 7Z"
                    fill="white"
                  />
                </svg>
              </a>

              <div className="">
                <h2 className="time-circle fs-sm2 fw-900 black-0 lh-108 mb-0">
                  80%
                </h2>
              </div>
              <div className="ps-3 ps-lg-5">
                <h2 className="white-F m-0  fs-sm2 fw-normal ff-azo mb-0">
                  Phase 4
                </h2>
                <p className="white-F fs-sm fw-normal mb-0 mw_520">
                  Ut egestas lacus nec varius blandit volutpat, malesuada nunc,
                  nisl. Nisl mattis convallis lacus tristique.
                </p>
              </div>
            </div>

            <div className="d-flex align-items-center mb-1 ms-4 ms-lg-0 mb-sm-4 pb-2 position-relative map_line_set_5 timeline flex-sm-row">
              <a className=" d-none d-xl-block" href="#">
                <svg
                  width="129"
                  height="12"
                  viewBox="0 0 133 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.666667 6C0.666666 8.94552 3.05448 11.3333 6 11.3333C8.94552 11.3333 11.3333 8.94552 11.3333 6C11.3333 3.05448 8.94552 0.666667 6 0.666667C3.05448 0.666666 0.666667 3.05448 0.666667 6ZM121.667 6.00001C121.667 8.94553 124.054 11.3333 127 11.3333C129.946 11.3333 132.333 8.94553 132.333 6.00001C132.333 3.05449 129.946 0.666677 127 0.666677C124.054 0.666677 121.667 3.05449 121.667 6.00001ZM6 7L127 7.00001L127 5.00001L6 5L6 7Z"
                    fill="white"
                  />
                </svg>
              </a>

              <div className="">
                <h2 className="time-circle fs-sm2 ms-xl-2 fw-900 black-0 lh-108 mb-0">
                  100%
                </h2>
              </div>
              <div className="ps-3 ps-lg-5">
                <h2 className="white-F  fw-normal fs-sm2 mb-0 ff-azo">
                  Phase 5
                </h2>
                <p className="white-F fs-sm fw-normal mw_520">
                  Faucibus congue risus nisl dictum. A, viverra malesuada nunc
                  varius. Ut dignissim mauris eu sed nisl neque.{" "}
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <div className="d-flex justify-content-center mt-md-5">
          <button className="main-btn fs-sm fw-normal black-0 ff-azo">
            Read Our Whitepaper
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Road;
