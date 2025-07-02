import React, { useState } from 'react';
// import './sideMenu.css'; // Assuming you'll add the styling for this component
import "./mobileSideMenu.css"
import Link from 'next/link';
import { FaAngleDown, FaAngleRight } from 'react-icons/fa6';
import { servicesdata } from "@/data/commanData";

const MobileHeaderSideMenu = ({ toggleSideMenu, services }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = (menu) => {
    setIsMenuOpen((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu]
    }));
  };

  return (
    <div className="mobile-nav-wrapper">
      <div className="mobile-nav-overlay mobile-nav-toggler" onClick={toggleSideMenu}>
      </div>

      <div className="mobile-nav-content">
        <a href="#" className="mobile-nav-close mobile-nav-toggler " onClick={toggleSideMenu}>
          <span className='bg-[var(--rv-primary)]'></span>
          <span className='bg-[var(--rv-primary)]'></span>
        </a>

        <div className="logo-box">
          <a href="/">
            <img width="150" src="/logo.webp" alt="logo" />
          </a>
        </div>

        <div className="mobile-nav-container">
          <ul className="mobile-menu-list">
            {/* Home Menu */}
            <li className="menu-item-has-children dropdown">
              <Link href="/" onClick={toggleSideMenu}>
                Home

              </Link>

            </li>

            <li className="menu-item-has-children dropdown">
              <Link href="/about-us" onClick={toggleSideMenu}>
                About us

              </Link>

            </li>

            {/* Pages Menu */}
            <li className="menu-item-has-children dropdown">
              <Link href="#" onClick={() => toggleMenu('tools')}>
                Tools
                <button aria-label="dropdown toggler">
                  {isMenuOpen.tools ? <FaAngleDown /> : <FaAngleRight />}
                </button>
              </Link>
              {isMenuOpen.tools && (
                <ul>
                  <li><Link onClick={toggleSideMenu} href="/tools/calculators">Financial Calculators</Link></li>
                  <li><Link onClick={toggleSideMenu} href="/tools/financial-health">Financial Health</Link></li>
                  <li><Link onClick={toggleSideMenu} href="/performance/fund-performance">Fund Performance</Link></li>
                  {/* <li><Link href="/tools/pay-premium-online">Pay Premium Online</Link></li> */}
                  <li><Link onClick={toggleSideMenu} href="/tools/useful-links">Useful Links</Link></li>
                </ul>
              )}
            </li>

            {/* Services Menu */}
            <li className="menu-item-has-children dropdown">
              <a href="#" onClick={() => toggleMenu('services')}>
                Services
                <button aria-label="dropdown toggler">
                  {isMenuOpen.services ? <FaAngleDown /> : <FaAngleRight />}
                </button>
              </a>
              {servicesdata.map((servicesditems, index) => (

                <li key={index + 1}>
                  <Link href={`/services/${servicesditems.slugUrl}`} className="" >
                    {servicesditems.title}
                  </Link>
                </li>
              ))}
            </li>

            {/* Portfolio Menu */}
            <li className="menu-item-has-children dropdown">
              <Link href="/news" onClick={toggleSideMenu}>
                Market News

              </Link>

            </li>

            {/* Blog Menu */}
            <li className="menu-item-has-children dropdown">
              <Link href="/contact-us" onClick={toggleSideMenu}>
                Contact Us

              </Link>

            </li>

            {/* Shop Menu */}
            <li className="menu-item-has-children dropdown">
              <Link href="/login" onClick={toggleSideMenu}>
                Login

              </Link>

            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileHeaderSideMenu;
