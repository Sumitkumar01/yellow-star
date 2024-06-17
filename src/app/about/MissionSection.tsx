import Image from "next/image";
import React from "react";

function MissionSection() {

    interface data {
        id: number,
        url: string,
        alt: string,
        title: string,
        description: string,
    }

    const data: data[] = [{
        id: 1,
        url: "/images/icon/mission-icon.webp",
        alt: "mission",
        title: "Our Mission",
        description: "To excel as a premier manufacturer and provider of high-caliber commercial kitchen equipment, meeting the diverse demands of resort hotels, cafes, and businesses throughout India. We are committed to providing reliable solutions and knowledgeable support, empowering our customers to create extraordinary dining moments."
    },
    {
        id: 2,
        url: "/images/icon/vision-icon.webp",
        alt: "Our Vision",
        title: "Our Vision",
        description: "Our vision is to revolutionize the commercial kitchen equipment sector in India, propelling innovation, efficiency, and excellence in manufacturing. We aim to be the trusted partner for foodservice professionals and businesses nationwide, fostering growth, sustainability, and culinary artistry in every corner of the country."

    }
    ]
    return (
        <section className="py-7">
            <div className="md:grid grid-cols-2 gap-7 max_width">
                {data.map((item) => (
                    <div key={item.id} className="flex flex-col items-center justify-center gap-3 border border-yellow-400 shadow-md shadow-yellow-400/50 p-7 mb-5">
                        <div className="bg-yellow-300 flex items-center justify-center rounded-full w-24 h-24">
                            <Image src={item.url} alt={item.alt} width={50} height={50} />
                        </div>
                        <div className="flex flex-col items-center justify-center gap-3">
                            <h2 className="md:text-3xl text-xl font-bold text-center">{item.title}</h2>
                            <p className="text-center text-sm">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default MissionSection;
