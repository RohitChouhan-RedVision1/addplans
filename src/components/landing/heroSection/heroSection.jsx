"use client";
import React from "react";
import Link from "next/link";
import Slider from "react-slick"; // Importing the Slider component from slick-carousel
import "slick-carousel/slick/slick.css"; // Slick styles
import "slick-carousel/slick/slick-theme.css"; // Slick theme styles
import "./bannerSection.css";

export default function HeroSection({ sitedata }) {
  const settings = {
    dots: true, // Enable dots (but we will customize them)
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Optional: Enable auto-scrolling
    autoplaySpeed: 3000, // Optional: Set the autoplay speed
    arrows: false, // Disable arrows
    customPaging: function (i) {
      return (
        <button type="button" role="tab" id="slick-slide-control00" aria-controls="slick-slide00" aria-label="1 of 3" tabIndex="-1">{i + 1}</button>
      );
    },
    dotsClass: `slick-dots`,
  };
  const bannerSlides = [
    {
      image: "/images/banners/banner-1.webp",
      subtitle: "The best Portfolio Management Services services to grow your wealth",
      title: "Trust Is Our Core",
      highlight: "It's Not Just About Wealth",
      ending: "It's About You!",
      description: "Success. Trust. Guarantee - We're dedicated to securing your financial future together!",
    },
    {
      image: "/images/banners/banner-2.webp",
      subtitle: "The best mutual fund services to grow your wealth",
      title: "Trust Is Our Core",
      highlight: "It's Not Just About Wealth",
      ending: "It's About You!",
      description: "Success. Trust. Guarantee - We're dedicated to securing your financial future together!",
    },
    // {
    //   image: "/images/banners/banner-3.webp",
    //   subtitle: "Maximize Your Wealth with Professional Financial Services",
    //   title: "Trust Is Our Core",
    //   highlight: "It's Not Just About Wealth",
    //   ending: "It's About You!",
    //   description: "Success. Trust. Guarantee - We're dedicated to securing your financial future together!",
    // },
  ];

  return (
    <div className="banner-section-one">
      <Slider {...settings} className="banner-silder-one">
        {bannerSlides.map((slide, index) => (
          <div className="banner-slide-item-one" key={index}>
            <div className="banner-image-one">
              <img src={slide.image} alt="banner-image" />
            </div>
            <div className="container">
              <div className="row">
                <div className="col-xl-5 col-lg-6">
                  <div className="heading-box">
                    <div className="banner-sub-title-one">
                      <h2>{slide.subtitle}</h2>
                    </div>
                    <h1 className="heading-title">
                      {slide.title} <br />
                      <span>{slide.highlight}</span> <br />
                      {slide.ending}
                    </h1>
                    <p className="heading-details lead">
                      {slide.description}
                    </p>
                    <Link href="/services/mutual-funds" className="btn btn-primary"><span>View More +</span></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div id="slider-info"></div>
    </div>
  );
}
