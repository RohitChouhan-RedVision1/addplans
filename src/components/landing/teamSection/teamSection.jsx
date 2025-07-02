import React from 'react';
import "./teamSection.css";
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedin, FaXTwitter, FaYoutube } from "react-icons/fa6";
import SectionHeading from "@/components/landing/section-heading/sectionheading";

const teamMembers = [
  {
    name: "Rajesh Sharma",
    role: "Certified Financial Planner",
    image: "/teamSection/team-1.png",
    delay: "0ms",
  },
  {
    name: "Priya Mehta",
    role: " Advisor",
    image: "/teamSection/team-4.png",
    delay: "400ms",
  },
  {
    name: "Anil Kapoor",
    role: "Investment Strategist",
    image: "/teamSection/team-3.png",
    delay: "600ms",
  },
  // {
  //   name: "Meera Iyer",
  //   role: "Mutual Fund Specialist",
  //   image: "/teamSection/team-5.png",
  //   delay: "800ms",
  // },
  // {
  //   name: "Siddharth Rao",
  //   role: "Wealth Manager",
  //   image: "/teamSection/team-2.png",
  //   delay: "1000ms",
  // },
];

const TeamSection = ({ socialMedia }) => {
  const iconMap = {
    Facebook: <FaFacebookF className="text-[var(--rv-primary)]" />,
    Instagram: <FaInstagram className="text-[var(--rv-primary)]" />,
    Youtube: <FaYoutube className="text-[var(--rv-primary)]" />,
    Linkedln: <FaLinkedin className="text-[var(--rv-primary)]" />,
    Twitter: <FaXTwitter className="text-[var(--rv-primary)]" />
  };
  return (
    <div className="team-section-one section">
      <div className="container">
       <div className="text-center">
         <SectionHeading
          maintitle='Team'
          title='Our Team'
          secondPart='Team'
        />
       </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {teamMembers.map((member, index) => (
            <div key={index}>
              <div
                className="team-box-one animate fadeInUp wow"
                data-wow-duration="1500ms"
                data-wow-delay={member.delay}
              >
                <div className="team-image-one">
                  <a href="team.html">
                    <img src={member.image} alt={`${member.name} image`} />
                  </a>
                </div>
                <div className="team-details-one">
                  <h4>
                    <a href="team.html">{member.name}</a>
                  </h4>
                  <p>{member.role}</p>
                </div>
                <ul className="team-social-media-one">
                  <li>
                    {socialMedia
                      .filter((link) => !link.isHidden)
                      .map((link, index) => (
                        <Link key={index} target="_blank" href={link?.url}>
                          <div
                            className={`text-2xl font-semibold uppercase w-9 h-9 border bg-white rounded-full flex items-center justify-center `}
                          >
                            {iconMap[link.title] || <FaXTwitter className="text-[var(--rv-primary)]" />}
                          </div>
                        </Link>
                      ))}
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
