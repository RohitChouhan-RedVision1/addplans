"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./partnerOne.css";
import Image from "next/image";

const PartnerOneSlider = () => {
    const settings = {
        infinite: true, // Makes the slider loop
        speed: 500, // Transition speed in milliseconds
        slidesToShow: 5, // Number of slides to show at once
        slidesToScroll: 1, // Number of slides to scroll on each swipe
        autoplay: true, // Enables autoplay
        autoplaySpeed: 1000, // Sets the speed of autoplay in milliseconds
        arrows: false, // Disable arrows for navigation
        dots: false, // Disable dots navigation
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    return (
        <div className="partner-section-one bg-[var(--rv-white)]">
            <div className="container-fluid p-0">
                <Slider {...settings} className="partner-slider-one ">
                    <div className="partner-slide-item-one">
                        <Image src="/amc-logo/all/mf33.png" alt="partner-logo" className="rounded" width={200} height={200} />
                    </div>
                    <div className="partner-slide-item-one">
                        <Image src="/amc-logo/all/921003317.webp" alt="partner-logo" className="rounded" width={200} height={200} />
                    </div>
                    <div className="partner-slide-item-one">
                        <Image src="/amc-logo/all/invesco-mf.png" alt="partner-logo" className="rounded" width={200} height={200} />
                    </div>
                     <div className="partner-slide-item-one">
                        <Image src="/amc-logo/all/mf10.png" alt="partner-logo" className="rounded" width={200} height={200} />
                    </div>
                     <div className="partner-slide-item-one">
                        <Image src="/amc-logo/all/mf14.png" alt="partner-logo" className="rounded" width={200} height={200} />
                    </div>
                     <div className="partner-slide-item-one">
                        <Image src="/amc-logo/all/mf19.png" alt="partner-logo" className="rounded" width={200} height={200} />
                    </div>
                     <div className="partner-slide-item-one">
                        <Image src="/amc-logo/all/mf32.png" alt="partner-logo" className="rounded" width={200} height={200} />
                    </div>
                     <div className="partner-slide-item-one">
                        <Image src="/amc-logo/all/mf4.png" alt="partner-logo" className="rounded" width={200} height={200} />
                    </div>
                     <div className="partner-slide-item-one">
                        <Image src="/amc-logo/all/mf11.png" alt="partner-logo" className="rounded" width={200} height={200} />
                    </div>
                    <div className="partner-slide-item-one">
                        <Image src="/amc-logo/all/mf5.png" alt="partner-logo" className="rounded" width={200} height={200} />
                    </div>
                     <div className="partner-slide-item-one">
                        <Image src="/amc-logo/all/mf12.png" alt="partner-logo" className="rounded" width={200} height={200} />
                    </div>
                    <div className="partner-slide-item-one">
                        <Image src="/amc-logo/all/mf8.png" alt="partner-logo" className="rounded" width={200} height={200} />
                    </div>
                    <div className="partner-slide-item-one">
                        <Image src="/amc-logo/all/mf2.png" alt="partner-logo" className="rounded" width={200} height={200} />
                    </div>
                    <div className="partner-slide-item-one">
                        <Image src="/amc-logo/all/mf25.png" alt="partner-logo" className="rounded" width={200} height={200} />
                    </div>
                    <div className="partner-slide-item-one">
                        <Image src="/amc-logo/all/420006855.webp" alt="partner-logo" className="rounded" width={200} height={200} />
                    </div>
                    <div className="partner-slide-item-one">
                        <Image src="/amc-logo/all/mf1.png" alt="partner-logo" className="rounded" width={200} height={200} />
                    </div>
                    
                    <div className="partner-slide-item-one">
                        <Image src="/amc-logo/all/Edelweiss_Mutual_Fund.png" alt="partner-logo" className="rounded" width={200} height={200} />
                    </div>
                    
                    <div className="partner-slide-item-one">
                        <Image src="/amc-logo/all/mf33.png" alt="partner-logo" className="rounded" width={200} height={200} />
                    </div>
                     <div className="partner-slide-item-one">
                        <Image src="/amc-logo/all/TATAMUTUALFUND.png" alt="partner-logo" className="rounded" width={200} height={200} />
                    </div>
                    <div className="partner-slide-item-one">
                        <Image src="/amc-logo/all/21001054.webp" alt="partner-logo" className="rounded" width={200} height={200} />
                    </div>
                      <div className="partner-slide-item-one">
                        <Image src="/amc-logo/all/175008818.webp" alt="partner-logo" className="rounded" width={200} height={200} />
                    </div>
                      <div className="partner-slide-item-one">
                        <Image src="/amc-logo/all/507008355.webp" alt="partner-logo" className="rounded" width={200} height={200} />
                    </div>
                      <div className="partner-slide-item-one">
                        <Image src="/amc-logo/all/552009226.webp" alt="partner-logo" className="rounded" width={200} height={200} />
                    </div>
                    <div className="partner-slide-item-one">
                        <Image src="/amc-logo/all/898002937.webp" alt="partner-logo" className="rounded" width={200} height={200} />
                    </div>
                    <div className="partner-slide-item-one">
                        <Image src="/amc-logo/all/836003403.webp" alt="partner-logo" className="rounded" width={200} height={200} />
                    </div>
                    <div className="partner-slide-item-one">
                        <Image src="/amc-logo/all/153000901.webp" alt="partner-logo" className="rounded" width={200} height={200} />
                    </div>
                    <div className="partner-slide-item-one">
                        <Image src="/amc-logo/all/266007842.webp" alt="partner-logo" className="rounded" width={200} height={200} />
                    </div>
                     <div className="partner-slide-item-one">
                        <Image src="/amc-logo/all/286009801.webp" alt="partner-logo" className="rounded" width={200} height={200} />
                    </div>
                    <div className="partner-slide-item-one">
                        <Image src="/amc-logo/all/198008240.webp" alt="partner-logo" className="rounded" width={200} height={200} />
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default PartnerOneSlider;
