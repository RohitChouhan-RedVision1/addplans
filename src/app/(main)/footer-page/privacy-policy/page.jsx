"use client";
import { footerData } from "@/data/footer";
import axios from "axios";
import React, { useEffect, useState } from "react";
import RvBreadcrumbs from "@/components/landing/page-breadcrumbs/rvbreadcrumbs";

export default function PrivacyPolicy() {
    const [data, setData] = useState('');
    const [mainData, setMainData] = useState("");
    const fetchdata = async () => {
        const data = await fetch("/api/admin/site-settings");
        if (data.ok) {
            const maindata = await data.json();
            setMainData(maindata[0])
        }
    };
    const fetchPolicy = async () => {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_DATA_API}/api/open-apis/privacy-policy?apikey=${process.env.NEXT_PUBLIC_API_KEY}`);
            if (response.status === 200 && response.data && response.data[0]) {
                const data = response.data[0];
                setData(data.pvp);
            } else {
                console.error("Invalid data format:", response.data);
                alert("Failed to fetch services. Please try again.");
            }
        } catch (error) {
            console.error("Error fetching services:", error);
            alert("An error occurred while fetching services. Please try again.");
        }
    };
    useEffect(() => { fetchPolicy(); }, []);
    useEffect(() => { fetchdata(); }, []);

    function createMarkup() {
        const highlightedText = data
            .replace(/Your Company name/gi, `<b>${mainData?.websiteName}</b>`)
            .replace(/What we collect/gi, '<br><br><h5>What we collect</h5> <br/>')
            .replace(/Name and contact details/gi, '<br><br><h5>Name and contact details</h5><br>')
            .replace(/Collection Use of image data/gi, '<br><br><mark style="background-color: transparent; font-size: 18px">Collection Use of image data</mark>')
            .replace(/Use of location data/gi, '<br><br><h5>Use of location data</h5><br>')
            .replace(/Security/, '<br><br><h5>Security</h5><br>')
            .replace(/Links to other websites/, '<br><br><h5>Links to other websites</h5><br>')
            .replace(/Controlling your personal information/gi, '<br><br><h5>Controlling your personal information</h5><br>')
            .replace(/Security certificates/gi, '<br><br><h5>Security certificates</h5><br>')
        return { __html: highlightedText };
    }

    return (
        <div className="">
             <div className="">
                <RvBreadcrumbs
                    haddingname="Privacy Policy"
                    // lastTitle='Privacy Policy'

                />
            </div>
        <div className="section">
            <div className="container">
            <p dangerouslySetInnerHTML={createMarkup()} />
            </div>
        </div>
        </div>
    );
}
