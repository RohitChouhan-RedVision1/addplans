import HeroSection from '@/components/landing/heroSection/heroSection';
import AboutSection from '@/components/landing/about-us/aboutus';
import FeaturesSection from '@/components/landing/featuresSection/featuresSection';
import ContactUs from '@/components/landing/contactSection/contactSection';
import BlogsSection from '@/components/landing/blogsSection/blogsSection';
import BseChartSection from '@/components/landing/bsechartSection/bsechartSection';
import SipCalculator from '@/components/landing/sipcalculatort';
import AnimatedContent from '@/components/AnimatedContent';
import { getLatestBlogs, getServiceData, getSiteData, getSocialMedia, getTestimonials } from '@/lib/functions';
import SocialMediaSidebar from '@/components/socialMedia/index';
import PartnerOneSlider from '@/components/landing/partners/partners';
import ServiceComponent from '@/components/landing/services/services';
import ProcessSection from '@/components/landing/processSection/processSection';
import TestimonialSection from '@/components/landing/testimonials/testimonials';
import WorkSection from '@/components/landing/workSection/workSection';
import TeamSection from '@/components/landing/teamSection/teamSection';
import WhyChooseSection from '@/components/landing/whyChoose/whytochoose';

export default async function Page() {
  const sitedata = await getSiteData();
  const blogs = await getLatestBlogs();
  const testimonial = await getTestimonials()
  const services = await getServiceData()
  const socialmedialinks = await getSocialMedia()

  return (
    <AnimatedContent>
      <HeroSection sitedata={sitedata} />
      <PartnerOneSlider />
      <ServiceComponent services={services} />
      <AboutSection sitedata={sitedata} />
      <ProcessSection />
      <TestimonialSection testimonials={testimonial} sitedata={sitedata} />
      <WhyChooseSection />
      <WorkSection />
      <TeamSection testimonial={testimonial} socialMedia={socialmedialinks} />
      <ContactUs sitedata={sitedata} />
    </AnimatedContent>
  );
}
