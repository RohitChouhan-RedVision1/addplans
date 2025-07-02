/** @type {import('next').NextConfig} */
// import dotenv from "dotenv";
// dotenv.config({ path: "/rvdata/env-files/charveefinancial.env" });

const nextConfig = {
    images: {
        domains: ["res.cloudinary.com", "wealthelite.in"],
    },
};

export default nextConfig;