"use client";
import React, { useState } from "react";
import styles from "./Contact.module.css";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import ContactReusableForm from "./Contactreusableform";
import { IoCall, IoLocationSharp, IoMail } from "react-icons/io5";
import Link from "next/link";
import SectionHeading from "@/components/landing/section-heading/sectionheading";


export default function ContactUsFormSection({ sitedata }) {

  return (
    <div className={`${styles.gtitnSection} section`}>
      <div className="container">
        <div className={`${styles.gtitnsRow} rvRow`}>
          {/* Left Section */}
          <div className={`${styles.gtitnsCol} rvCol`}>
            <div className={`${styles.gtitnschadding}`}>
              <SectionHeading
                maintitle='Contact'
                title='Get in Touch'
                secondPart='now'
                paragraph="Your Financial Freedom Awaits - Together, Let's Create the Life You Deserve."
              />

            </div>
            <div className={`${styles.gtitnscCard}`}>
              <ul className="">
                <li>
                  <div className={`${styles.gtitnscicone}`}>
                    <IoLocationSharp size={50} className="" />
                  </div>
                  <Link target="_blank" href={sitedata?.mapurl}>{sitedata?.address}</Link>
                </li>
                <li>
                  <div className={`${styles.gtitnscicone}`}>
                    <IoMail size={25} className="" />
                  </div>
                  <Link href={`mailto:${sitedata?.email}`}>{sitedata?.email}</Link>
                </li>
                <li>
                  <div className={`${styles.gtitnscicone}`}>
                    <IoCall size={25} className="" />
                  </div>
                  <Link href={`tel:+91${sitedata?.mobile}`}>+91 {sitedata?.mobile}</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Section (Contact Form) */}
          <div className={`${styles.gtitnsCol} rvCol`}>
            <div className={`${styles.gtitnssCard}`}>
              <ContactReusableForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
