import Footer from "@/components/footer/footer";
import { Navbar } from "@/components/navbar/navbar";
import Tickers from "@/components/tickers";
import WebPopup from "@/components/webpopup";
import { getArn, getServiceData, getSiteData, getSocialMedia } from "@/lib/functions";

export default async function Layout({ children }) {
    const sitedata = await getSiteData();
    const servicedata = await getServiceData();
    const arn = await getArn();
    const socialmedialinks = await getSocialMedia()
    return (
        <div className="">
            <Tickers />
            <Navbar services={servicedata} socialmedialinks={socialmedialinks} />
            {children}
            <Footer siteData={sitedata} servicedata={servicedata} arnData={arn} socialMedia={socialmedialinks} />
            {/* <UpdatePopup /> */}
            <WebPopup />
            {/* <div className="absolute p-5 bg-red-300 bottom-10 right-10 rounded-full">
                <FaArrowUp />
            </div> */}
        </div>
    );
}