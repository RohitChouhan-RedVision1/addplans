import Banner from "@/components/banner/banner";
import ContactReusableForm from "@/components/landing/contactSection/Contactreusableform";
import { getSiteData } from "@/lib/functions";
import { MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";
import RvBreadcrumbs from "@/components/landing/page-breadcrumbs/rvbreadcrumbs";
import Image from "next/image";

export default async function ContactUs() {
  const sitedata = await getSiteData();
  return (
    <div className="">
      <RvBreadcrumbs
                    haddingname="Contact Us"
                // lastTitle='Privacy Policy'

                />
      <div className="max-w-screen-xl mx-auto  py-[30px] md:py-[60px]">
        {/* Contact Info Cards */}
        <div className="flex  flex-col  gap-4 overflow-hidden rounded-lg mb-8">
          {/* Call Us */}
          <div className="flex flex-col md:flex-row gap-4 w-full justify-center items-center text-center">
            <div className="bg-[var(--rv-primary)] text-white p-8 rounded shadow-md w-full md:w-1/3 flex flex-col items-center justify-center min-h-[220px]">
              <Phone className="mb-2" size={24} />
              <h3 className="font-medium mb-2">Call Us</h3>
              <p className=""><Link href={`tel:+91${sitedata.mobile}`} >+91 {sitedata.mobile}</Link></p>
            </div>
            <div className="bg-[var(--rv-primary)] text-white p-8 rounded shadow-md w-full md:w-1/3 flex flex-col items-center justify-center min-h-[220px] ">
              <Mail className="mb-2" size={24} />
              <h3 className="font-medium mb-2">Mail Us</h3>
              <p className="break-all"><p><Link href={`mailto:${sitedata.email}`} >{sitedata.email}</Link></p></p>
            </div>
            <div className="bg-[var(--rv-primary)] text-white p-8 rounded shadow-md w-full md:w-1/3 flex flex-col items-center justify-center min-h-[220px]">
              <MapPin className="mb-1" size={24} />
              <h3 className="font-medium mb-1">Reach Us</h3>
              <p className="break-all">
              {(() => {
  const address = sitedata.address || "";
  const splitKeyword = "Trimandir";
  const parts = address.split(splitKeyword);
  return (
    <Link href={`${sitedata.mapurl}`} target="_blank" rel="noopener noreferrer">
      {parts[0] + splitKeyword}
      <br />
      {parts[1]}
    </Link>
  );
})()}
              </p>
            </div>
          </div>
        </div>

        {/* Reach Us */}

        {/* Map and Contact Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Map */}
          <div className="rounded w-full h-[500px] relative border border-gray-200">
            <iframe
              src={sitedata?.iframe}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              className="rounded"
            ></iframe>
          </div>

          {/* Contact Form */}
          <div className="w-full">
            <div className=" bg-[var(--rv-white)] animate fadeInRight wow" data-wow-duration="1500ms"
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 0, 100% 79%, 86% 100%, 0 100%, 0 100%, 0 0)"
              }}>
              <Image
                                                               src="/images/contact/contactus.jpg"
                                                               alt="Contact us"
                                                               width={1000}
                                                               height={500} // Adjust as needed for aspect ratio
                           
                                                               className='object-cover'
                                                           />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
// margin - left: 60px;
// padding: 75px 56px;
// background - color: var(--rv - white);
// clip - path: polygon(0 0, 100 % 0, 100 % 0, 100 % 79 %, 86 % 100 %, 0 100 %, 0 100 %, 0 0);