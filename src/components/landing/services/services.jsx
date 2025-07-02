import React from 'react';
import Link from 'next/link'; // You can replace this with a regular <a> tag if you're not using Next.js.
import styles from "./services.module.css"
import { FaAngleRight } from "react-icons/fa6";
import { servicesdata } from "@/data/commanData";
import SectionHeading from "@/components/landing/section-heading/sectionheading";

const ServiceComponent = ({ services }) => {
    const orderedServices = [
  'Mutual Funds',
  'NRI Investments',
  'Financial Planning',
  'Corporate Fixed Deposits',
  'Capital Gain Bonds',
  'Tax Planning'
];

const displayServices = orderedServices.map(title =>
  services.find(service => service?.name === title)
);
    return (
        <div className={`${styles.servicesectionone} section`}>
            <div className="container">
                <div className={`${styles.rvssRow} rvRow`}>
                    <div className={`${styles.rvssCol} rvCol`}>
                        <div className={`${styles.rvsshaddingtitle}`}>
                                <SectionHeading
                            maintitle='Services'
                            title='Empowering Your Growth Through '
                            secondPart='Our Services'
                            paragraph='Expert Investment Services for Your Wealth Growth and Financial Prosperity'
                        />
                        </div>
                       
                    </div>
                    <div className={`${styles.rvssCol} rvCol`}>
                        <div className={`${styles.rvssicardsRow}`}>
                            {servicesdata.map((service, index) => (
                                <div key={index} className={`${styles.rvssicards}`}>
                                    <Link href={`/services/${service?.slugUrl}`}>
                                    <div className={`${styles.rvssitems}`}>
                                        <img src={`..${service?.iconeImg}`} alt="icon" />
                                    
                                        {/* {service} */}
                                        <h5 className={`${styles.rvssititle}`}>{service?.fullTitle}</h5>
                                        <p className='text-line' style={{ "--textline": 5 }}>{service?.shortDescription}</p>
                                        {/* <Link href="/service-details.html"> */}
                                        <span  className={`${styles.rvssirigth}`}>
                                            <FaAngleRight />
                                        </span>
                                        {/* </Link> */}
                                    </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceComponent;
