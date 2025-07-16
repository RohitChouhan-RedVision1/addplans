"use client";
import React from "react";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./testimonials.module.css";
import Image from "next/image";
import SectionHeading from "@/components/landing/section-heading/sectionheading";

const TestimonialSection = ({ testimonials }) => {
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    if (showModal) {
      document.body.classList.add('active');
    } else {
      document.body.classList.remove('active');
    }

    // Optional: Clean up if component unmounts
    return () => {
      document.body.classList.remove('active');
    };
  }, [showModal]);
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
                    {/* <div className={`${styles.rvtsoitemsimaeg}`}>
                      <Image src={item?.image?.url} alt="author-image" className="" width={200} height={200} />
                    </div> */}
                    <div className={`${styles.rvtsoitemsdisc} text-line`}  style={{ '--textline': 3 }} dangerouslySetInnerHTML={createMarkup(item?.content)} />
                    <button  

                      onClick={() => {
                        setSelectedTestimonial(item);
                        setShowModal(true);
                      }}
                    >
                     <b> Read More</b>
                    </button>
                    <div className={`${styles.rvtsoitemsicones}`}>
                      <Image src="/images/vectors/cote.svg" alt="icon" width={50} height={200} />
                    </div>
                    <div><b>{item?.author}</b>, <br /><small>{item?.designation}</small></div>
                    
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
      {showModal && selectedTestimonial && (
        <div className="modalTestimonial fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center px-4">
          <div className="bg-white max-w-lg w-full p-6 rounded-lg relative shadow-lg">
            <button
              className="absolute top-2 right-3 text-black text-2xl font-bold"
              onClick={() => setShowModal(false)}
            >
              ×
            </button>
            <h3 className="text-lg font-semibold mb-4">{selectedTestimonial?.author}</h3>
            <p dangerouslySetInnerHTML={createMarkup(selectedTestimonial?.content)}></p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestimonialSection;
