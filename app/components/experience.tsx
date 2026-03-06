'use client'
import { useState } from "react";
import { lato, playfair } from "../font";

export default function Experience() {
    const [side, setSide] = useState<"jobs" | "studies">("jobs");

    const jobs = [
        {
            occupation: "Chef Reception",
            company: "Hotel Golden Hills",
            period: "2025 - Now",
        },
        {
            occupation: "Front Desk Manager",
            company: "Grand Plaza Hotel",
            period: "2023 - 2025",
        },
        {
            occupation: "Concierge",
            company: "The Royal Suite",
            period: "2021 - 2023",
        },
    ];

    const studies = [
        {
            occupation: "Management",
            company: "Ecole Superieur de management kolea - Algiers",
            period: "2018 - 2022",
        },
    ];

    const activeData = side === "jobs" ? jobs : studies;

    return (
        <div className="mx-auto mb-10">
            {/* Tab Headers */}
            <div className="flex justify-center mb-8">
                <div className={`${playfair.className} flex gap-8 text-2xl`}>
                    <button
                        onClick={() => setSide("jobs")}
                        className={`pb-1 transition-all duration-200 ${
                            side === "jobs"
                                ? "text-white border-b-2 border-white"
                                : "text-gray-500 border-b-2 border-transparent hover:text-gray-300"
                        }`}
                    >
                        Experiences
                    </button>
                    <button
                        onClick={() => setSide("studies")}
                        className={`pb-1 transition-all duration-200 ${
                            side === "studies"
                                ? "text-white border-b-2 border-white"
                                : "text-gray-500 border-b-2 border-transparent hover:text-gray-300"
                        }`}
                    >
                        Studies
                    </button>
                </div>
            </div>

            {/* Job / Study List */}
            <div className="flex flex-col items-center justify-center">
                {activeData.map((item, index) => (
                    <div key={index} className="flex items-center justify-center gap-6">
                        {/* Occupation */}
                        <div className="text-right w-40 md:w-100">
                            <p className={`${playfair.className} font-semibold text-gray-100 text-xl md:text-2xl`}>
                                {item.occupation}
                            </p>
                        </div>

                        {/* Separator with center dot */}
                        <div className="flex flex-col items-center gap-1">
                            <div className="w-px h-6 bg-gray-300" />
                            <div className="w-2 h-2 rounded-full bg-gray-400" />
                            <div className="w-px h-6 bg-gray-300" />
                        </div>

                        {/* Company & Period */}
                        <div className="text-left w-40 md:w-100">
                            <h1 className={`${lato.className} font-bold text-gray-100 text-lg md:text-xl`}>
                                {item.company}
                            </h1>
                            <h2 className="text-sm text-gray-500">{item.period}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}