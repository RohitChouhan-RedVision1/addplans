import Image from "next/image";
import Link from "next/link";
// import { motion } from "framer-motion";
import { getSiteData } from "@/lib/functions";
import RvBreadcrumbs from "@/components/landing/page-breadcrumbs/rvbreadcrumbs";

export async function generatemetadata() {
  const siteDate = await getSiteData();
  return {
    title: `About Us || ${siteDate?.websiteName}`,
    description: `Discover ${siteDate?.websiteName}, a leading wealth management firm dedicated to empowering your financial journey with ethical principles and expert guidance.`,
  };
}

export default async function AboutUs() {
  const siteDate = await getSiteData();
  return (
    <div className="">
        <RvBreadcrumbs
                    haddingname="About Us"
                // lastTitle='Privacy Policy'

                />
      {/* Introduction Section */}
      <div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="md:my-20 my-10 md:px-0 px-3 text-justify max-w-screen-xl mx-auto"
      >
    
        <p className="">
          We are AMFI Certified Mutual Fund Distributor and APMI certified PMS Distributor firm which offers financial solutions to our clients and create sustainable Wealth. We follow strategies to meet your financial goals. We deal with various services and products to suit your requirements. Addplans works on core values like trust & determination which keeps us pushing ourselves to give you our best.
        </p>
        

        {/* Top Features Section */}
        {/* <h3 className="text-3xl text-center font-semibold text-[var(--rv-primary)] mb-6">
          Our Top Features
        </h3>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 max-w-6xl mx-auto px-4">
          {[
            "250+ Crore AUM",
            "Serving 1500+ Clients",
            "20+ Qualified Team Members",
            "Cutting Edge Technology",
            "30+ Years Combined Experience",
            "35+ Research Tools",
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-[var(--rv-radius)] shadow-md p-6 text-center hover:shadow-lg transition duration-300"
            >
              <p className="text-lg font-medium text-gray-800">{feature}</p>
            </div>
          ))}
        </div> */}
      </div>

      <div className="bg-[var(--rv-third)]">
        <div className="max-w-screen-xl mx-auto md:py-20 py-10 md:px-0 px-3">
          {/* Transforming Ambitions Section */}
          <div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-6 items-center"
          >
            <div className="relative">
              <Image
                src="/images/aboutus/about-us.webp"
                alt="About Us"
                width={650}
                height={550}
                className="rounded-[var(--rv-radius)] grayscale shadow-lg"
              />
            </div>
            <div className="text-justify">
              <h3 className="text-[var(--rv-primary)] font-bold mb-4">
                How We Define {siteDate?.websiteName}
              </h3>
               <p>Welcome to {siteDate?.websiteName}, your trusted financial companion in India. We understand that your financial journey is more than just numbers; it's a story of dreams, aspirations, and the legacy you want to leave behind. At {siteDate?.websiteName}, we are driven by the belief that everyone deserves a secure and prosperous future.</p>
               <p>Our journey began with a simple promise: to empower every individual in India to achieve their financial goals and protect what matters most. We know that life's uncertainties can be overwhelming, but with the right guidance and support, you can navigate them successfully.</p>
               <p>Our dedicated team of financial experts is committed to providing you with the best guidance and services tailored to your unique needs. We take pride in the relationships we've built with our clients, and their success stories inspire us every day.</p>
               <p>In a rapidly changing world, we remain steadfast in our dedication to helping you secure your financial future. Your dreams are our top priority, and your trust is the cornerstone of our service.</p>
               <p>Join us on this journey towards your financial freedom. Let's create a future that's not just financially sound but also peaceful. Together, we can turn dreams into reality.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto md:py-20 py-10 md:px-0 px-3">
        {/* Mission, Vision, Value Section */}
        <div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          <div className="group bg-[var(--rv-primary)] p-6 rounded-[var(--rv-radius)] shadow-lg hover:scale-105 transition-transform">
            <h4 className="text-white my-3">Our Mission</h4>
            <p className="text-gray-100">
              Our mission is to provide accessible and personalized financial services, empowering individuals across India to achieve financial success. We are dedicated to offering expert guidance, making financial services available to all, and ensuring every Indian can turn their financial aspirations into reality.
            </p>
          </div>
          <div className="group bg-[var(--rv-primary)] p-6 rounded-[var(--rv-radius)] shadow-lg hover:scale-105 transition-transform">
            {/* <Image src="/svg/vision.svg" alt="Vision" width={60} height={60} /> */}
            <h4 className="text-white my-3">Our Vision</h4>
            <p className="text-gray-100">
              Our vision is to become the leading force in shaping a financially secure and prosperous India. We aim to set new standards in the financial industry and be the go-to partner for those seeking financial stability, growth, and success, contributing to a brighter future for our clients and the nation as a whole.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <h3 className="text-[var(--rv-primary)] text-center mb-6">
            Core Values
          </h3>
          <p className="text-center text-gray-700 mb-4">
            We firmly believe that our Core Values have served as the
            Cornerstone for the Expansion and Success of our Company.
          </p>
          <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-center">
            {[
              "Financial Education",
              "Commitment",
              "Speed",
              "Transparency",
              "Client Centric Approach",
            ].map((value, i) => (
              <li
                key={i}
                className="bg-gray-100 p-4 rounded-[var(--rv-radius)] shadow text-[var(--rv-primary)] font-semibold"
              >
                {value}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto py-10">
        <div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center"
        >
          <h3 className="font-bold mb-6">
            Join Us on a Journey to Infinite Growth!
          </h3>
          <p className=" text-gray-700 max-w-3xl mx-auto mb-8 text-center">
            At {siteDate?.websiteName}, we don’t just manage wealth—we shape
            financial futures. Join us in transforming financial growth for
            business owners across India. Together, we’ll redefine what’s
            possible.
          </p>
          <div className="justify-center flex">
          <Link href="/contact-us" className="btn btn-primary">
            <span>Get Started</span>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
