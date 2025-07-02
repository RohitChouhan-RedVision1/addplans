import React from 'react';
import styles from "./processsection.module.css"
import Image from 'next/image';
import SectionHeading from "@/components/landing/section-heading/sectionheading";

const ProcessSection = () => {
  const processSteps = [
    {
      id: 1,
      title: 'KYC',
      icon: '/images/vectors/kyc.svg',
      image: '/images/vectors/kyc.svg',
      description: 'Complete your KYC seamlessly online to begin your mutual fund investment journey without any hassle.',
    },
    {
      id: 2,
      title: 'Research',
      icon: '/images/vectors/research.svg',
      image: '/images/vectors/research.svg',
      description: 'Explore mutual funds, compare options, and choose the right scheme that matches your financial goals.',
    },
    {
      id: 3,
      title: 'Invest',
      icon: '/images/vectors/invest.svg',
      image: '/images/vectors/invest.svg',
      description: 'Start investing instantly in different mutual funds through a secure and paperless platform.',
    },
    {
      id: 4,
      title: 'Track',
      icon: '/images/vectors/track.svg',
      image: '/images/vectors/track.svg',
      description: 'Monitor your portfolio, view returns, and stay updated with real-time insights anytime, anywhere.',
    },
  ];

  return (
    <div className={`${styles.hdiwSection} section`}>
      <div className="container">
        <SectionHeading
          maintitle='Process'
          title='How does'
          secondPart='it Work?'
        />

        <div className={`${styles.hdiwRow} rvRow`}>
          {processSteps.map((step, index) => (
            <div
              key={step.id}
              className={`${styles.hdiwCols} animate fadeInRight wow`}
              data-wow-duration="2000ms"
              data-wow-delay={`${index * 200}ms`}
            >
              <div className={`${styles.hdiwCard}`}>
                  <div className={`${styles.hdiwani} animationbtn`}>
                    {Array.from({ length: 6 }).map((_, index) => (
                        <span key={index}></span>
                      ))}
                  </div>
                <div className={`${styles.hdiwCardBody}`}>
                  <div className={`${styles.hdiwCardmainBody}`}>
                    {/* <Image src={"/images/how-does-it-work.webp"} alt="process" width={200} height={200} /> */}
                    <div className={`${styles.hdiwIcone}`}>
                      <Image src={step.icon} alt="icon" width={70} height={100} />
                    </div>
                    <h4>
                      <span>{`${step.id < 10 ? '0' : ''}${step.id}. `}</span>
                      {step.title}
                    </h4>
                    <p className="lead">{step.description}</p>

                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;
