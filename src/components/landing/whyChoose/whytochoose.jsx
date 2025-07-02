import React from 'react';
import styles from './whytochoose.module.css';
import Link from 'next/link';
import Image from 'next/image';
import SectionHeading from "@/components/landing/section-heading/sectionheading";

const WhyChooseSection = () => {
    const tools = [
        {
            title: "Financial Calculator",
            link: "/tools/calculators",
            image: "/images/tools/calculator.svg",
        },
        {
            title: "Check Financial Health",
            link: "/tools/financial-health",
            image: "/images/tools/financial-health.svg",
        },
        {
            title: "Fund Performance",
            link: "/performance/fund-performance",
            image: "/images/tools/fund-performance.svg",
        },
        {
            title: "Useful Links",
            link: "/tools/useful-links",
            image: "/images/tools/useful links.svg",
        },
    ]
    return (
        <div className={`${styles.whyChooseSection} section`}>
            <div className={`${styles.whyChooserow}`}>
                <div className="container">
                    <div className={styles.whyChoosehadding}>
                         <SectionHeading
                            maintitle='Our Feature'
                            title='Key features of our finance'
                            secondPart='and consulting'
                        />
                    </div>
                    <div className={`${styles.rvwcrRow} rvRow`}>
                        {tools?.map((item, index) => (
                            <div className={`${styles.rvwcrCol} rvCol`} key={index}>
                                <Link href={item.link} className={`${styles.rvwcrCard}`}>
                                    <div className="">
                                        <div className="">
                                            <Image src={item?.image} alt="icon" width={70} height={100} />
                                        </div>
                                        <h5>{item?.title}</h5>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseSection;
