"use client";

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { Breadcrumb, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbItem, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
// import Banner from "@/components/section-banner/banner";
import RvBreadcrumbs from "@/components/landing/page-breadcrumbs/rvbreadcrumbs";

export default function PayPremium() {
    const [selectedCategory, setSelectedCategory] = useState('mf');

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const fiimagedata = [
        {
            image: "/images/lifeinsurancelogo/1.webp",
            link: "https://licindia.in/premium-payment"
        },
        {
            image: "/images/lifeinsurancelogo/2.webp",
            link: "https://portal.uiic.in/GCWebPortal/gcDealerMisc/pgmessagebuildoffice.do"
        },
        {
            image: "/images/lifeinsurancelogo/3.webp",
            link: "https://online.avivaindia.com/econnect/Pages/PayPremiumDirect.aspx"
        },
        {
            image: "/images/lifeinsurancelogo/4.webp",
            link: "https://www.bhartiaxa.com/pay-premium-online"
        },
        {
            image: "/images/lifeinsurancelogo/5.webp",
            link: "https://www.bajajallianzlife.com/renewal-payment.html"
        },
    ];

    const hiimagedata = [
        {
            image: "/images/healthinsurancelogo/1.webp",
            link: "https://www.icicilombard.com/renew-policy-online#/AllRenewal"
        },
        {
            image: "/images/healthinsurancelogo/2.webp",
            link: "https://www.tataaig.com/renewal?lob=others&renewalHeader=yes"
        },
        {
            image: "/images/healthinsurancelogo/3.webp",
            link: "https://transactions.nivabupa.com/renewal/renewpolicies.aspx"
        },
        {
            image: "/images/healthinsurancelogo/4.webp",
            link: "https://www.starhealth.in/help/internal/website/"
        },
        {
            image: "/images/healthinsurancelogo/5.webp",
            link: "https://transactions.nivabupa.com/renewal/renewpolicies.aspx"
        },
    ];

    const giimagedata = [
        {
            image: "/images/generalinsurancelogo/1.webp",
            link: "https://my.royalsundaram.in/"
        },
        {
            image: "/images/generalinsurancelogo/2.webp",
            link: "https://www.tataaig.com/renewal?lob=others&renewalHeader=yes"
        },
        {
            image: "/images/generalinsurancelogo/3.webp",
            link: "https://www.sbigeneral.in/policy-renewal"
        },
        {
            image: "/images/generalinsurancelogo/4.webp",
            link: "https://www.reliancegeneral.co.in/insurance/health-insurance/renewal-online-premium-calculation.aspx"
        },
        {
            image: "/images/generalinsurancelogo/5.webp",
            link: "https://orientalinsurance.org.in/"
        },
    ];

    const data = selectedCategory === 'li' ? fiimagedata : selectedCategory === 'hi' ? hiimagedata : giimagedata;
    return (
        <div className="">
              <RvBreadcrumbs
                    maintitle='Pay Premium Online'
                  />
            {/* <Banner title={"Pay Premium Online"} /> */}
            <section className="section">
                <div className="container">
                <div className='md:px-5 py-4 bg-[var(--rv-secondary)] text-black flex items-center gap-x-2 md:gap-x-10  rounded'>
                    <div className='cursor-pointer' onClick={() => handleCategoryClick('gi')}>
                        <p className={`uppercase font-semibold   hover:text-[--rv-primary] ${selectedCategory === 'gi' ? 'text-[var(--rv-primary)]' : 'text-[--rv-white]'}`}>General Insurance</p>
                    </div>
                    <div className='cursor-pointer' onClick={() => handleCategoryClick('li')}>
                        <p className={`uppercase font-semibold   hover:text-[--rv-primary] ${selectedCategory === 'li' ? 'text-[var(--rv-primary)]' : 'text-[--rv-white]'}`}>Life Insurance</p>
                    </div>
                    <div className='cursor-pointer' onClick={() => handleCategoryClick('hi')}>
                        <p className={`uppercase font-semibold   hover:text-[--rv-primary] ${selectedCategory === 'hi' ? 'text-[var(--rv-primary)]' : 'text-[--rv-white]'}`}>Health Insurance</p>
                    </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-x-3 my-5">
                    {data.map((item, index) => (
                        <Link href={item.link} key={index} target="blank">
                            <div className="flex justify-center p-5 border text-center mb-3" >
                                <Image src={item.image} alt={`logo-${item.image}`} width={150} height={100} />
                            </div>
                        </Link>
                    ))}
                </div>
                </div>
            </section>
        </div>
    );
}