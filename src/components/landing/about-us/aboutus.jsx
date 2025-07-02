"use client";
import { useEffect, useState } from 'react';
import styles from './AboutSection.module.css';
import Image from 'next/image';
import Link from "next/link";

import SectionHeading from "@/components/landing/section-heading/sectionheading";

export default function AboutSection({ sitedata }) {
        const [mainData, setMainData] = useState("");

    const fetchdata = async () => {
        const data = await fetch("/api/admin/site-settings");
        if (data.ok) {
            const maindata = await data.json();
            setMainData(maindata[0])
        }
    };
    useEffect(() => { fetchdata() }, [])
    return (


        <div className={`${styles.aboutUs} section`}>

            <div className="container">
                <div className={styles.aboutUsRow}>
                    <div className={styles.aboutUsImages}>
                        <div className={styles.aboutImg2} >
                            <div className={styles.imageAnime}>
                                <Image
                                    src="/images/aboutus/about-us.webp"
                                    alt="About Image 2"
                                    width={1000}
                                    height={500} // Adjust as needed for aspect ratio

                                    className='object-cover'
                                />
                            </div>
                        </div>

                    </div>
                    <div className={styles.aboutContentBody}>
                        <SectionHeading
                            maintitle='about us '
                            title='Trusted Guidance for'
                            secondPart='Financial Growth'
                        />
                        <div className={`${styles.aboutContenttext}`}>
                            <p>Welcome to {sitedata?.websiteName}, your trusted financial companion in India. We understand that your financial journey is more than just numbers; it's a story of dreams, aspirations, and the legacy you want to leave behind. At {sitedata?.websiteName}, we are driven by the belief that everyone deserves a secure and prosperous future.</p>
                            <p>Our journey began with a simple promise: to empower every individual in India to achieve their financial goals and protect what matters most. We know that life's uncertainties can be overwhelming, but with the right guidance and support, you can navigate them successfully.</p>
                        </div>
                           <div className="flex">
                            <Link href="" className="btn btn-primary"><span>About Us +</span></Link>
                           </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
