"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import HeaderSideMenu from './headerSidemenu';
import "./header.css";
import MobileHeaderSideMenu from './mobileSidemenu';
import { usePathname } from 'next/navigation';
import { FaAngleDown } from 'react-icons/fa6';
import { servicesdata } from "@/data/commanData";

export function Navbar({ services }) {
  const orderedServices = [
  'Mutual Funds',
  'NRI Investments',
  'Financial Planning',
  'Corporate Fixed Deposits',
  'Capital Gain Bonds',
  'Tax Planning'
];

  const pathname = usePathname();
  const [isSideMenuOpen, setSideMenuOpen] = useState(false);
  const [isMobileSideMenuOpen, setMobileSideMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleSideMenu = () => {
    setSideMenuOpen(!isSideMenuOpen);
  };

  const toggleMobileSideMenu = () => {
    setMobileSideMenuOpen(!isMobileSideMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const headerScrollPos = 300;
      if (window.scrollY > headerScrollPos) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const displayServices = orderedServices.map(title =>
  services.find(service => service.name === title)
);

  return (
    <header className={`${pathname === '/' ? 'absolute ' : 'flex'} main-header w-full border-b border-[rgba(224,224,224,0.17)] z-[99] ${isSticky ? 'sticky-header--cloned sticky-fixed' : ''}`}>
      <div className="container px-10 mx-auto">
        <nav className="main-menu flex items-center lg:space-x-[30px]">
          {/* Logo Section */}
          <div className={`main-menu-logo ${isSticky ? 'max-w-[180px]':'max-w-[220px]'} text-center   pr-5`}>
            <Link href="/">
              <img src="/logo.webp" alt="header-logo" />
            </Link>
          </div>

          {/* Menu Section */}
          <div className="main-menu-inner flex items-center grow font-semibold">
            <ul className={`main-menu-list hidden ${isSticky ? ' py-[20px] pl-[80px]':' py-[40px] pl-[80px]'} `}>
              <li className="menu-item-children ">
                <Link href="/">Home</Link>
                <i className="fa-solid fa-chevron-down"></i>
              </li>
              <li className="menu-item-children">
                <Link href="/about-us">About Us</Link>
              </li>
              <li className="menu-item-children">
                <Link href="#">Tools</Link>
                <FaAngleDown />
                <ul>
                  <li><Link href="/tools/calculators">Financial Calculators</Link></li>
                  <li><Link href="/tools/financial-health">Financial Health</Link></li>
                  <li><Link href="/performance/fund-performance">Fund Performance</Link></li>
                  {/* <li><Link href="/tools/pay-premium-online">Pay Premium Online</Link></li> */}
                  <li><Link href="/tools/useful-links">Useful Links</Link></li>
                </ul>
              </li>
              <li className="menu-item-children">
                <Link href="#">Services</Link>
                <FaAngleDown />
                <ul>
                   {servicesdata.map((item, index) => (
                    <li key={index}>
                      <Link href={`/services/${item?.slugUrl}`}>{item?.title}</Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="menu-item-children">
                <Link href="/news">Market News</Link>
              </li>
              <li className="menu-item-children">
                <Link href="/contact-us">Contact Us</Link>
              </li>
            </ul>

            {/* Collapsing Menu Button */}
            <div className={`header-menu-collaps `} onClick={toggleMobileSideMenu}>
              <span className={`line-1 ${isSticky ? 'bg-[var(--rv-primary)]':'bg-[var(--rv-primary)]'}`}></span>
              <span className={`line-2 ${isSticky ? 'bg-[var(--rv-primary)]':'bg-[var(--rv-primary)]'}`}></span>
              <span className={`line-3 ${isSticky ? 'bg-[var(--rv-primary)]':'bg-[var(--rv-primary)]'}`}></span>
            </div>

            {/* Right-side Actions */}
            <div className="main-menu-right">
              <Link href="/login" className={`btn ${pathname === '/' ? '' : ''} btn-primary`}>
                <span>Login</span>
              </Link>
              <div className="header-side-menu" onClick={toggleSideMenu}>
                <span className="line-1"></span>
                <span className="line-2"></span>
              </div>
            </div>
          </div>
        </nav>
      </div>
      {/* SideMenu Popup */}
      {isSideMenuOpen && <HeaderSideMenu toggleSideMenu={toggleSideMenu} />}
      {isMobileSideMenuOpen && <MobileHeaderSideMenu toggleSideMenu={toggleMobileSideMenu} services={services} />}
    </header>
  );
};

