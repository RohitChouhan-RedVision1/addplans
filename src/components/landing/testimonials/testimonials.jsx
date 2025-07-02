"use client";
import React from "react";
import Slider from "react-slick";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./testimonials.module.css";
import Image from "next/image";
import SectionHeading from "@/components/landing/section-heading/sectionheading";

const TestimonialSection = ({ testimonials }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: (
      <button className="slick-prev slick-arrow">
        <FaLongArrowAltLeft className="arrow-icon text-3xl" />
      </button>
    ),
    nextArrow: (
      <button className="slick-next slick-arrow">
        <FaLongArrowAltRight className="arrow-icon text-3xl" />
      </button>
    ),
    customPaging: function (i) {
      return (
        <button type="button" role="tab" id="slick-slide-control20" aria-controls="slick-slide20" aria-label="1 of 4" tabIndex="0" aria-selected="true">1</button>
      );
    },
    dotsClass: `slick-dots`,
  };
  function createMarkup(item) {
    return { __html: item };
  }
  return (
    <div className={`${styles.testimonialsectionone} section rvtestimonialsectionsection`}>
      <div className="container">
        <div className="text-center">
          <SectionHeading
                            maintitle='testimonial'
                            title='Our clients'
                            secondPart='say'
                        />

 
        <div className={`${styles.rvtsoRowe}`}>
          <div className={`${styles.rvtsoCols}`}>
            <Slider {...settings} className="testimonial-slider-one">
              {testimonials?.map((item, index) => (
                <div className={`${styles.rvtsoitems}`} key={index}>
                  <div className={`${styles.rvtsoitemsimaeg}`}>
                    <Image src={item?.image?.url} alt="author-image" className="" width={200} height={200} />
                  </div>
                  <div className={`${styles.rvtsoitemsdisc}`} dangerouslySetInnerHTML={createMarkup(item?.content)} />
                  <div className={`${styles.rvtsoitemsicones}`}>
                    <Image src="/images/vectors/cote.svg" alt="icon" width={50} height={200} />
                  </div>
                  <p>{item?.author}, {item?.designation}</p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
