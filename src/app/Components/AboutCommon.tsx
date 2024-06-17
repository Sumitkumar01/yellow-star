"use client"
import Image from "next/image";
import React from "react";
import LinkButton from "./Linkbutton";

interface AboutCommonProps {
    showButton: boolean;
}

const AboutCommon: React.FC<AboutCommonProps> = ({ showButton }) => {
    return (
        <div className="py-7">
            <div className="max_width">
                <div className="md:grid md:grid-cols-2 gap-10">
                    <div className="md:col-span-1 flex justify-center items-center">
                        <div className="lg:w-[538px] lg:h-[538px] md:w-[300px] md:h-[300px] w-[200px] h-[200px] p-2  bg-yellow-400 border-4 border-red-600 shadow-2xl shadow-red-500/50 rounded-full overflow-hidden">
                            <div className="md:w-[538] md:h-[538] ">
                                <Image
                                    src="/images/about-1.webp"
                                    className="w-full hover:scale-105 ease-in-out duration-500 h-full object-cover -ms-1 -mb-3"
                                    alt="alt"
                                    width={530}
                                    height={530}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-1 flex flex-col justify-center items-start">
                        <h2 className="text-2xl font-bold mb-5 capitalize">
                            About <span className="text-red-600">Us</span>
                        </h2>
                        <p className="text-gray-600 lg:text-base text-sm text-justify">
                            Yellow Star, with a seven-year history in the commercial kitchen
                            equipment sector, has established itself as a trusted name in the
                            industry. Our dedication to delivering top-quality solutions has
                            fueled our remarkable growth, enabling us to serve clients
                            throughout India. Committed to excellence and innovation, we are
                            your reliable partner for all your commercial kitchen needs.
                            Choose Yellow Star for unmatched reliability and excellence in
                            every aspect of your business.
                        </p>
                        <br />
                        <p className="text-gray-600 lg:text-base text-sm text-justify">
                            Our extensive presence across India underscores our commitment to
                            customer satisfaction and our relentless pursuit of excellence.
                            Whether it&apos;s top-notch kitchen equipment or outstanding service,
                            Yellow Star is your go-to choice for elevating your
                            commercial kitchen operations. We are dedicated to ensuring your
                            success, one kitchen at a time.
                        </p>

                        <br />

                        {showButton && (
                            <LinkButton href="/about" className="text-center rounded-tl rounded-tr rounded-b rounded-br-2xl font-bold px-7 py-3 text-white hover:text-yellow-400 bg-red-500 hover:bg-red-400 transition duration-300 ease-in-out">
                                Know More
                            </LinkButton>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutCommon;
