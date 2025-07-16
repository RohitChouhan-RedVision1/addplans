"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { calculators, performance } from "@/data/calculators";
import { useSearchParams, useRouter } from "next/navigation";
import RvBreadcrumbs from "@/components/landing/page-breadcrumbs/rvbreadcrumbs";

export default function Page() {
  const searchParams = useSearchParams();
  const [isMonthlySip, setIsMonthlySip] = useState(true);

  // Sync tab from URL on mount
  useEffect(() => {
    const tab = searchParams.get("tab");
    setIsMonthlySip(tab !== "performance"); // default is "calculator"
  }, [searchParams]);

  return (
    <div className="">
      {/* <Banner title={"Financial Calculators"} /> */}
      <div className="">
        <RvBreadcrumbs
        // maintitle='Calculators'
        haddingname='Calculators'
      />
        <section className="container">
          <div className="mx-auto section">
            <div className="flex justify-center mb-14">
              <div className="inline-flex border border-[var(--rv-primary)] rounded-full shadow-inner">
                <Link
                  href={"/tools/calculators?tab=calculator"}
                  className={`px-10 md:px-20 py-1 text-lg font-medium border border-[var(--rv-primary)] hover:bg-[var(--rv-primary)] rounded-l-full transition-all duration-300 ${isMonthlySip
                    ? "bg-[var(--rv-primary)] text-white"
                    : "bg-[var(--rv-white)] text-black hover:text-white"
                    }`}
                >
                  Calculators
                </Link>
                <Link
                  href={"/tools/calculators?tab=performance"}
                  className={`px-10 md:px-20 py-1 text-lg hover:bg-[var(--rv-primary)] font-medium border border-[var(--rv-primary)] rounded-r-full transition-all duration-300 ${!isMonthlySip
                    ? "bg-[var(--rv-primary)] text-white"
                    : "bg-[var(--rv-white)] text-black hover:text-white"
                    }`}
                >
                  Performance
                </Link>
              </div>
            </div>

            {isMonthlySip ? (
              <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
                {calculators.map((item, index) => (
                  <Link href={item?.route} key={index}>
                    <div className="px-2 bg-[var(--rv-primary)] h-14 flex gap-4 rounded items-center shadow-md group">
                      <Image src={item?.image} alt="" width={20} height={20} />
                      <p className="font-bold text-white text-md group-hover:text-[#F3F3E0]">
                        {item?.title}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
                {performance.map((item, index) => (
                  <Link href={item.link} key={index}>
                    <div className="px-2 bg-[var(--rv-primary)] h-14 flex gap-4 items-center rounded-md shadow-md group">
                      <Image src={item?.image} alt="" width={20} height={20} />
                      <p className="font-bold text-white text-md group-hover:text-[#F3F3E0]">
                        {item?.title}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}