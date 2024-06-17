import Image from "next/image";
import React from "react";

function Journey() {

    interface data {
        id: number,
        title: string,
        description: string,
    }

    const data: data[] = [{
        id: 1,
        title: "Our Journey",
        description: "Founded in 2016, Yellow Star embarked on a mission to redefine the standards of commercial kitchen equipment. Over the years, our unwavering commitment to providing top-quality, innovative, and durable solutions has earned us the trust of numerous businesses in need of reliable kitchen equipment."
    },
    {
        id: 2,
        title: "Quality First",
        description: "Quality is the cornerstone of our business philosophy. Every piece of equipment that bears the Yellow Star name undergoes stringent testing to meet and exceed industry standards. We understand the rigorous demands of the commercial sector, and our products are designed to excel in high-performance environments."

    }
    ]
    return (
        <section className="py-7 bg-slate-300">
            <div className="md:grid grid-cols-2 gap-7 max_width">
                {data.map((item) => (
                    <div key={item.id} className="flex flex-col items-center justify-center gap-3 mb-5">
                        <div className="flex flex-col items-center justify-center gap-3">
                            <h2 className="md:text-3xl text-xl font-bold text-center">{item.title}</h2>
                            <p className="text-justify text-sm">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Journey;
