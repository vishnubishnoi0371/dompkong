import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Container from "react-bootstrap/Container";
import partone from "../Assets/Images/part-img-1.png";
import parttwo from "../Assets/Images/part-img-2.png";
import partthree from "../Assets/Images/part-img-3.png";
import partfour from "../Assets/Images/part-img-4.png";
import partline from "../Assets/Images/part_line.png";

export const Partner = () => {
  const SliderFour = {
    dots: false,
    infinite: true,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 0,
    speed: 3000,
    slidesToShow: 7,
    slidesToScroll: 1,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1170,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <div className="bg-clr pt-4 mt_2 pb-md-5 pb-0">
      <Container className="pt-0 pt-sm-5 my_container pb-0 pb-md-4">
        <p className="text-white fs-xxl m-0  fw-normal text-center ff-azo pt-4 pb-5">
          PARTNERS
        </p>
        <Slider {...SliderFour}>
          <div className="d-flex justify-content-center mt-5">
            <img src={partone} alt="#" />
          </div>
          <div className="d-flex ms-5 justify-content-centr">
            <img src={partline} alt="#" />
          </div>

          <div className="d-flex justify-content-center">
            <img src={parttwo} alt="#" />
          </div>
          <div className="d-flex justify-content-center">
            <img src={partline} alt="#" />
          </div>

          <div className="d-flex justify-content-center mt-4">
            <img src={partthree} alt="#" />
          </div>
          <div className="d-flex justify-content-center">
            <img src={partline} alt="#" />
          </div>
          <div className="d-flex justify-content-center mt-4">
            <img src={partfour} alt="#" />
          </div>
          <div className="d-flex justify-content-center">
            <img src={partline} alt="#" />
          </div>
        </Slider>
      </Container>
    </div>
  );
};
export default Partner;
