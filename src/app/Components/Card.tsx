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
        <div className="flex flex-col items-center justify-center w-full h-64 border-2 overflow-hidden border-gray-300 rounded-lg shadow-lg bg-white">
            <div className="w-full h-[300px] over">
                <Image src={image} alt={name} width={400} height={300} />
            </div>
            <div className="flex flex-col items-center justify-center w-full h-full p-2">
                <h3 className="text-base capitalize font-bold text-yellow-500">{title}</h3>
            </div>
        </div>
    )
}

export default Card