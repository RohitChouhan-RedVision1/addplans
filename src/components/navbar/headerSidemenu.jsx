'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link'; // Import Link for Next.js routing
import "./headerSideMenu.css"
import axios from 'axios';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaLinkedin, FaXTwitter, FaYoutube } from 'react-icons/fa6';

const HeaderSideMenu = ({ toggleSideMenu }) => {
  const [siteData, setSiteData] = useState([]);
  const [socialMedia, setSocialMedia] = useState([]);

  useEffect(() => {
    const fetchSiteData = async () => {
      try {
        const res = await axios.get("/api/admin/site-settings");
        // console.log(res)
        if (res.status === 200 && res.data[0]) {
          setSiteData(res.data[0]);
        }
      } catch (error) {
        console.error("Failed to fetch site settings", error);
      }
    };
    fetchSiteData();
  }, []);

  useEffect(() => {
    const fetchSiteData = async () => {
      try {
        const res = await axios.get("/api/admin/SocialMedia");
        // console.log(res)
        if (res.status === 200 && res.data[0]) {
          setSocialMedia(res.data);
        }
      } catch (error) {
        console.error("Failed to fetch site settings", error);
      }
    };
    fetchSiteData();
  }, []);

  const iconMap = {
    Facebook: <FaFacebookF className="text-[var(--rv-primary)]" />,
    Instagram: <FaInstagram className="text-[var(--rv-primary)]" />,
    Youtube: <FaYoutube className="text-[var(--rv-primary)]" />,
    Linkedln: <FaLinkedin className="text-[var(--rv-primary)]" />,
    Twitter: <FaXTwitter className="text-[var(--rv-primary)]" />
  };
  return (
    <div className="side-menu-wrapper fixed inset-0 bg-black bg-opacity-50 z-[999999]">
      <div className="side-menu-content bg-white w-[500px] h-full fixed right-0 top-0">
        <button className="side-menu-toggler absolute top-10 right-5 h-5  w-10 " onClick={toggleSideMenu}>
          <span></span>
          <span></span>
        </button>

        <div className="side-menu-logo-box">
          <Link href="/">
            <Image src="/logo.webp" alt="logo" className="w-48 mx-auto" width={200} height={200} />
          </Link>
        </div>

        <div className="side-menu-container p-[30]">
          <p className='mb-5'>{siteData?.websiteName}</p>
          <h4 className='text-[28px]'>Contact Info</h4>
          <ul className='flex-col justify-center items-center'>
            <li className='mb-2' ><a href="mailto:help@company.com">{siteData?.email}</a></li>
            <li><a href="tel:+12009845611">+91 {siteData?.mobile}</a></li>
          </ul>
          <h4 className='mt-5 text-[28px]'>Office Address</h4>
          <p>{siteData?.address}</p>
          {/* <ul className="side-menu-social-media flex space-x-4 mt-4">
            {socialMedia
              ?.filter((link) => !link.isHidden)
              ?.map((link, index) => (
                <Link key={index} target="_blank" href={link?.url}>
                  <div
                    className={`text-2xl font-semibold uppercase w-9 h-9 border bg-white rounded-full flex items-center justify-center `}
                  >
                    {iconMap[link.title] || <FaXTwitter className="text-[var(--rv-primary)]" />}
                  </div>
                </Link>
              ))}
          </ul> */}
        </div>
      </div>
    </div>
  );
};

export default HeaderSideMenu;
