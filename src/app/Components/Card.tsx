import Image from "next/image";
import React from "react";

function Card({
    image,
    name,
    title
}: {
    image: string;
    name: string;
    title: string;
}
) {
    return (
        <div className="rounded-md overflow-hidden shadow-md border border-red-400 shadow-red-500/50">
            <div className="w-full h-[200px] overflow-hidden">
                <Image
                    src={image}
                    alt={name}
                    width={200}
                    height={200}
                    priority
                    layout="responsive"
                />
            </div>
            <div className="p-3 h-16">
                <h3 className="capitalize text-base font-medium text-center">{title}</h3>
            </div>
        </div>
    )
}

export default Card

// 