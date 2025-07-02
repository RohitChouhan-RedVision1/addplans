"use client";
import React, { useEffect, useState } from "react";
import {
    Form, FormControl, FormField, FormItem, FormMessage
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@radix-ui/react-label";
import { Button } from "../ui/button";
import axios from "axios";
import { FaFilePdf } from "react-icons/fa6";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { footerData } from "@/data/footer";
import Image from "next/image";
import { SipHomeChart } from "../charts/sipHomeChart";
import SectionHeading from "@/components/landing/section-heading/sectionheading";

export default function SipCalculator({ siteData }) {
    const FormSchema = z.object({
        username: z.string().min(2, { message: "Username must be at least 2 characters." }),
        mobile: z.string().nonempty({ message: "Mobile number is required." }),
        email: z.string().email({ message: "Invalid email address." }),
    });
    const form = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            username: "",
            mobile: "",
            email: "",
            message: "",
        },
    });
    // Handle form submission
    const onSubmit = async (data) => {
        setLoading(true)
        const emaildata = {
            user: data?.username,
            to: data?.email,
            subject: 'Test Email',
            text: 'This is a test email sent from Nodemailer!',
        }
        try {
            const response = await axios.post('/api/leads/', data);
            const info = await axios.post('/api/email/', emaildata);
            if (response.status === 201) {
                form.reset();
            } else {
                alert(response.statusText);
            }
        } catch (error) {
            console.error('Error:', error);
            alert("An unexpected error occurred.");
        };
        localStorage.setItem("emiformSubmitted", "true");
        localStorage.setItem("submissionTimestamp", Date.now().toString());
        setIsModalOpen(false)
        setLoading(false)
        setIsSubmitted(true)
        calculateSip()
    };

    const [loading, setLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isMonthlySip, setIsMonthlySip] = useState(true);
    const [oneTimeInvestment, setOneTimeInvestment] = useState(500);
    const [monthlyInvestment, setMonthlyInvestment] = useState(500);
    const [investmentDuration, setInvestmentDuration] = useState(1);
    const [expectedReturn, setExpectedReturn] = useState(1);
    const [result, setResult] = useState(null);
    const [chartData, setChartdata] = useState([])

    // Constants for time calculations
    const TWENTY_DAYS_IN_MS = 15 * 24 * 60 * 60 * 1000; // 15 days in milliseconds

    useEffect(() => {
        // Check if the form has already been submitted (stored in localStorage)
        const formSubmitted = localStorage.getItem("emiformSubmitted");
        const submissionTimestamp = localStorage.getItem("submissionTimestamp");

        if (formSubmitted === "true" && submissionTimestamp) {
            const currentTime = Date.now();
            const timeDifference = currentTime - submissionTimestamp;

            // If 20 days have passed since submission, clear the localStorage
            if (timeDifference > TWENTY_DAYS_IN_MS) {
                localStorage.removeItem("emiformSubmitted");
                localStorage.removeItem("submissionTimestamp");
                setIsSubmitted(false); // Allow form to open again
            } else {
                setIsSubmitted(true); // Keep form closed if within 20 days
            }
        }
    }, []);

    const handleModelOpen = (open) => {
        setIsModalOpen((prevState) => !prevState);
    };

    const generatePDF = () => {
        const doc = new jsPDF();
        const pageWidth = doc.internal.pageSize.getWidth();
        const pageHeight = doc.internal.pageSize.getHeight();

        // Background Color
        doc.setFillColor(240, 240, 240); // Light gray background
        doc.rect(0, 0, pageWidth, pageHeight, 'F');

        // Title
        doc.setFontSize(24);
        doc.setTextColor(50, 50, 50); // Dark Gray
        doc.text('EMI Calculator Results', 14, 30);

        // Header Line
        doc.setDrawColor(50, 50, 50);
        doc.line(14, 35, pageWidth - 14, 35);

        // Add EMI details
        doc.setFontSize(14);
        doc.setTextColor(70, 70, 70); // Medium Gray

        // Add a line for separation
        doc.line(14, 105, pageWidth - 14, 105);

        // Add a colorful section for chart data
        doc.setFillColor(255, 204, 204); // Light red background for chart data
        doc.rect(14, 110, pageWidth - 28, 40, 'F');

        // Chart Data Title
        doc.setFontSize(18);
        doc.setTextColor(255, 51, 51); // Red for the title
        doc.text('Yearly Breakdown:', 20, 125);

        // Reset font for chart data
        doc.setFontSize(12);
        doc.setTextColor(70, 70, 70);
        chartData.forEach((data, index) => {
            doc.text(`${data.year}: Invested: ${data.investedAmount} ₹, Growth: ${data.growth} ₹`, 20, 135 + (index * 10));
        });

        // Capture chart as an image
        const chartElement = document.getElementById('chart-container'); // Assume your chart is in a div with this ID
        html2canvas(chartElement).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            doc.addImage(imgData, 'PNG', 14, 160, pageWidth - 28, 100); // Adjust width/height as needed
            doc.save('emi_calculator_results.pdf');
        });
    };

    const setDuration = (years) => {
        const parsedYears = parseFloat(years);
        if (!isNaN(parsedYears)) {
            setInvestmentDuration(parsedYears);
        }
    };

    useEffect(() => {
        calculateSip();
    }, []);

    const calculateSip = () => {
        const monthlyRate = expectedReturn / 12 / 100; // Monthly rate as a decimal
        const annualRate = expectedReturn / 100; // Annual rate as a decimal
        const months = investmentDuration * 12; // Convert years to months

        let futureValue, totalInvestment;

        if (isMonthlySip) {
            // Calculate for Monthly SIP
            futureValue = monthlyInvestment * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
            totalInvestment = monthlyInvestment * months;
        } else {
            // Calculate for One-Time Investment
            futureValue = oneTimeInvestment * Math.pow(1 + monthlyRate, months);
            totalInvestment = oneTimeInvestment;
        }

        // Prepare data for each year to pass to the chart
        const yearlyData = [];

        // Calculate year-wise data
        for (let year = 1; year <= investmentDuration; year++) {
            let yearlyFutureValue;
            let yearlyTotalInvestment;

            if (isMonthlySip) {
                // Calculate future value for SIP investment up to this year
                const monthsInYear = year * 12;
                yearlyFutureValue = monthlyInvestment * ((Math.pow(1 + monthlyRate, monthsInYear) - 1) / monthlyRate) * (1 + monthlyRate);
                yearlyTotalInvestment = monthlyInvestment * monthsInYear;
            } else {
                // Calculate future value for one-time investment up to this year
                yearlyFutureValue = oneTimeInvestment * Math.pow(1 + annualRate, year);
                yearlyTotalInvestment = oneTimeInvestment;
            }

            // Push data for the chart every year
            yearlyData.push({
                year: year,
                investedAmount: Math.round(yearlyTotalInvestment), // Total amount invested up to this year
                growth: Math.round(yearlyFutureValue), // Future value at the end of the year
            });
        }

        // Set the chart data for each year
        setChartdata(yearlyData);
        // Set results with proper precision
        setResult({
            futureValue: Number(futureValue.toFixed(2)),
            totalInvestment: Number(totalInvestment.toFixed(2))
        });
    };

    return (
        <div className="max-w-screen-xl mx-auto">
            <div className="bg-[var(--rv-third)] md:px-10 py-10 rounded-[var(--rv-radius)]">

                      <SectionHeading
                            maintitle='sip'
                            title='SIP '
                            secondPart='Calculator'
                        />
                <div className="grid md:grid-cols-2 grid-cols-1 gap-4 pt-10">
                    <div className="col-span-1 border border-gray-200 rounded-[var(--rv-radius)] bg-white px-7 py-4 md:py-0 flex flex-col justify-between">
                        <div className="input-fields mt-5">
                            <div className="flex space-x-4 mb-8">
                                <button
                                    onClick={() => { setIsMonthlySip(true) }}
                                    className={`py-2 px-4 font-bold ${isMonthlySip ? 'border-b-2 border-[var(--rv-primary)] text-[var(--rv-primary)]' : 'text-gray-700'}`}
                                >
                                    <p className="text-inherit">SIP</p>
                                </button>
                                <button
                                    onClick={() => { setIsMonthlySip(false) }}
                                    className={`py-2 px-4 font-bold ${!isMonthlySip ? 'border-b-2 border-[var(--rv-primary)] text-[var(--rv-primary)]' : 'text-gray-700'}`}
                                >
                                    <p className="text-inherit">Lumpsum</p>
                                </button>
                            </div>
                            <div className="input-fields mt-5 mb-10">
                                {isMonthlySip ? (
                                    <div>
                                        <div className='flex justify-between'>
                                            <h5 className="font-medium">
                                                Monthly investment (₹)
                                            </h5>
                                            <div>
                                                <span className='font-semibold text-[var(--rv-primary)]'>₹</span>
                                                <input
                                                    type="text" // Change type to number for better input handling
                                                    value={monthlyInvestment}
                                                    onChange={(e) => setMonthlyInvestment(parseFloat(e.target.value))}
                                                    className='font-bold text-lg text-[var(--rv-primary)] w-14 border-none'
                                                />
                                            </div>
                                        </div>
                                        <Input
                                            type="range"
                                            min="500"
                                            max="50000"
                                            step="500"
                                            value={monthlyInvestment}
                                            onChange={(e) => setMonthlyInvestment(parseFloat(e.target.value))}
                                            className={`customRange w-full text-gray-100`}
                                            aria-label="Monthly Investment Slider"
                                        />
                                    </div>
                                ) : (
                                    <div>
                                        <div className='flex justify-between'>
                                            <h5 className="font-medium">
                                                Total investment (₹)
                                            </h5>
                                            <div>
                                                <span className='font-semibold text-[var(--rv-primary)]'>₹</span>
                                                <input
                                                    type="text" // Change type to number for better input handling
                                                    value={oneTimeInvestment}
                                                    onChange={(e) => setOneTimeInvestment(parseFloat(e.target.value))}
                                                    className='font-bold text-lg text-[var(--rv-primary)] w-14 border-none'
                                                />
                                            </div>
                                        </div>
                                        <Input
                                            type="range"
                                            min="500"
                                            max="50000"
                                            step="500"
                                            value={oneTimeInvestment}
                                            onChange={(e) => setOneTimeInvestment(parseFloat(e.target.value))}
                                            className="w-full text-gray-400"
                                        />
                                    </div>
                                )}
                                <div className='items-center mt-5'>
                                    <div className='flex justify-between'>
                                        <h5 className="font-medium">
                                            Time period (Year)
                                        </h5>
                                        <input
                                            type="text" // Change type to number for better input handling
                                            value={investmentDuration}
                                            onChange={(e) => setDuration(e.target.value)} // Update duration
                                            className='font-bold text-lg text-[var(--rv-primary)] w-8 border-none'
                                        />
                                    </div>
                                    <Input
                                        type="range"
                                        min="1"
                                        max="40"
                                        step="1"
                                        value={investmentDuration}
                                        onChange={(e) => setDuration(e.target.value)} // Update duration
                                        className="w-full text-gray-400"
                                    />
                                </div>
                                <div className='items-center mt-5'>
                                    <div className='flex justify-between'>
                                        <h5 className="font-medium">
                                            Expected Return (%)
                                        </h5>
                                        <input
                                            type="text" // Change type to number for better input handling
                                            value={expectedReturn}
                                            onChange={(e) => setExpectedReturn(e.target.value)} // Update duration
                                            className='font-bold text-lg text-[var(--rv-primary)] w-8 border-none'

                                        />
                                    </div>
                                    <Input
                                        type="range"
                                        min="1"
                                        max="30"
                                        step="1"
                                        value={expectedReturn}
                                        onChange={(e) => setExpectedReturn(e.target.value)} // Update duration
                                        className="w-full text-gray-400"
                                    />
                                </div>
                            </div>
                            {isSubmitted ? (
                                <div className="mb-5 flex justify-between">
                                    <div className="space-x-2">
                                        <button onClick={() => calculateSip()} className="btn">Calculate</button>
                                    </div>
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <div className="cursor-pointer" onClick={() => generatePDF()}>
                                                    <h6 className="text-2xl"><FaFilePdf /></h6>
                                                </div>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Download to pdf</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </div>
                            )
                                :
                                <Dialog open={isModalOpen} onOpenChange={() => handleModelOpen(true)}>
                                    <DialogTrigger asChild>
                                        <button className="btn">Calculate</button>
                                    </DialogTrigger>
                                    <DialogContent className="sm:max-w-[425px]">
                                        <DialogHeader>
                                            <DialogTitle>Fill Your Detailes...</DialogTitle>
                                        </DialogHeader>
                                        <Form {...form}>
                                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 rounded-[var(--rv-radius)] p-7 bg-white">
                                                {/* Username Field */}
                                                <FormField
                                                    control={form.control}
                                                    name="username"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <Label className="text-sm">Your Name<span className="text-red-700 font-bold ">*</span></Label>
                                                            <FormControl>
                                                                <Input placeholder="User Name" {...field} aria-label="User Name" className="border-2 border-gray-500" />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />

                                                {/* Mobile Field */}
                                                <FormField
                                                    control={form.control}
                                                    name="mobile"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <Label className="text-sm">Mobile Number <span className="text-red-700 font-bold">*</span></Label>
                                                            <FormControl>
                                                                <Input placeholder="Mobile" {...field} aria-label="Mobile Number" className="border-2 border-gray-500" />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />

                                                {/* Email Field */}
                                                <FormField
                                                    control={form.control}
                                                    name="email"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <Label className="text-sm">Email<span className="text-red-700 font-bold ">*</span></Label>
                                                            <FormControl>
                                                                <Input type="email" placeholder="Email" {...field} aria-label="Email" className="border-2 border-gray-500" />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />

                                                {/* Address Field */}
                                                <FormField
                                                    control={form.control}
                                                    name="address"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <Label className="text-sm">Address</Label>
                                                            <FormControl>
                                                                <Input placeholder="Address" {...field} aria-label="Address" className="border-2 border-gray-500" />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />

                                                {/* Submit Button */}
                                                <button className="primarybutton" type="submit">{!loading ? "Submit" : "Loading..."}</button>
                                            </form>
                                        </Form>
                                    </DialogContent>
                                </Dialog>
                            }
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="mb-3" id="graphId">
                            <SipHomeChart piedata={result} title={'SIP Calculator'} />
                            {result && (
                                <div className="mt-4 flex flex-col justify-center items-center">
                                    <div className="mb-2 text-center flex items-center justify-start gap-3">
                                        <div className="w-5 h-5 bg-[var(--rv-secondary)] rounded-[var(--rv-radius)] flex items-center justify-center" />
                                        <p className="text-white text-2xl">Invested Amount - </p>
                                        {' '}
                                        <p className='text-xl font-extrabold text-[var(--rv-secondary)]'>₹{result?.totalInvestment?.toLocaleString()}</p>
                                    </div>
                                    <div className="mb-5 text-center flex items-center justify-start gap-3">
                                        <div className="w-5 h-5 bg-[var(--rv-white)] rounded-[var(--rv-radius)] flex items-center justify-center" />
                                        <p className="text-white text-2xl">Estimated Return - </p>
                                        <p className='text-xl font-bold text-[var(--rv-secondary)]'>₹{Math.floor(result.futureValue - result.totalInvestment)?.toLocaleString()}</p>
                                    </div>
                                    <div className="mb-4 text-center">
                                        <p className="text-white text-2xl mb-1">Future value of your investment </p>
                                        <p className='text-2xl font-bold text-[var(--rv-secondary)]'>₹{result?.futureValue?.toLocaleString()}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div>
                </div>
            </div>
        </div>
    );
}