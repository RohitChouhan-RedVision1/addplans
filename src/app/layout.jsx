import { Merriweather, Outfit, Work_Sans } from "next/font/google";
import "./globals.css";
import RenewalPopup from "@/components/renewalPopup";
import { SubscriptionProvider } from "@/context/SubscriptionContext";
import SiteSettingsModel from "@/lib/models/SiteSetting";
import { ConnectDB } from "@/lib/db/ConnectDB";

const merriweather = Merriweather({
  subsets: ["latin"],
  variable: "--font-merriweather",
  weight: ["400", "700", "900"],
});

const worksans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-worksans",
  weight: ["200", "400"],
});

export async function getSiteData() {
  await ConnectDB();
  const data = await SiteSettingsModel.findOne({}).lean();
  return data;
}

export const dynamic = "force-dynamic";

export async function generateMetadata() {
  const sitedata = await getSiteData();
  return {
    title: {
      default: sitedata?.websiteName || "Redvision Global Technologies",
      template: `%s - ${sitedata?.websiteName || "Redvision Global Technologies"}`,
    },
    description:
      sitedata?.description || "Redvision Global Technologies",
    openGraph: {
      title: sitedata?.websiteName || "Redvision Global Technologies",
      description: sitedata?.description || "Redvision Global Technologies",
      type: "website",
      locale: "en_IN",
      siteName: sitedata?.websiteName || "Redvision Global Technologies",
      url: sitedata?.websiteDomain || "",
      // images: ["https://100takka.com/og.png"],
    },
    twitter: {
      card: "summary_large_image",
      title: sitedata?.websiteName || "Redvision Global Technologies",
      description: sitedata?.description || "Redvision Global Technologies",
    },
    authors: [sitedata?.websiteName],
  };
}


export default function RootLayout({ children }) {
  return (
    <html lang="en-IN">
      <body className={`${merriweather.variable} ${worksans.variable} antialiased`} >
        <SubscriptionProvider>
          <RenewalPopup />
          <div className="bg-gray-50">
            {children}
          </div>
        </SubscriptionProvider>
      </body>
    </html>
  );
}
