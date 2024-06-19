import React from "react";
import Image from "next/image";

function WhyChooseUs() {
    interface imgdata {
        id: number;
        src: string;
        alt: string;
        title: string;
    }

    const imgdata: imgdata[] = [
        {
            id: 1,
            src: "/images/icon/consultancy.png",
            alt: "Quality Products",
            title: "Quality Products",
        },
        {
            id: 2,
            src: "/images/icon/key-strengths.png",
            alt: "Experience",
            title: "Experience",
        },
        {
            id: 3,
            src: "/images/icon/specialized-team.png",
            alt: "Specialized Team",
            title: "Specialized Team",
        },
        {
            id: 4,
            src: "/images/icon/integrated-managment.png",
            alt: "Integrated Managment",
            title: "Integrated Managment",
        },
        {
            id: 5,
            src: "/images/icon/wide-network.png",
            alt: "Wide Network",
            title: "Wide Network",
        },
        {
            id: 6,
            src: "/images/icon/easy-accessible.png",
            alt: "Easy Accessible",
            title: "Easy Accessible",
        },
    ];
    return (
        <section className="py-5 bg-slate-200">
            <div className="max_width">
                <div>
                    <h2 className="text-4xl font-bold text-red-500 mb-4 text-center">
                        Why Choose Us
                    </h2>
                </div>
                <article className="md:grid md:grid-cols-2 md:pt-10">
                    <div className="grid grid-cols-2 gap-2">
                        {imgdata.map((item) => (
                            <div className="flex items-center gap-1" key={item.id}>
                                <div>
                                    <div className="w-14 h-14 flex justify-center items-center bg-yellow-700 shadow-lg shadow-yellow-500/50">
                                    <div className="w-9 h-9">
                                        <Image
                                            src={item.src}
                                            alt={item.alt}
                                            width={36}
                                            height={36}
                                        />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="md:text-base text-sm font-bold">{item.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div>
                        <p className="text-base text-justify text-gray-600 md:mt-0 mt-4">
                            To stand out as a top choice for our customers, we&apos;ve been
                            dedicated to excellence since day one. With a commitment to
                            delivering exceptional quality, unbeatable prices, and prompt
                            delivery, we&apos;ve consistently met and exceeded customer
                            expectations.
                        </p>
                    </div>
                </article>
            </div>
        </section>
    );
}

export default WhyChooseUs;
