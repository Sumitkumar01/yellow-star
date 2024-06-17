"use client"
import React from "react";
import { Card } from "../Components";
import { cardData } from "../data";

function ProductList() {

    const [show, setShow] = React.useState(false);

    const [data, setData] = React.useState(cardData);

    const handleClick = () => {
        setShow(!show);
    }

    const menuItems = [...new Set(cardData.map((card) => card.category))];


    const filterdate = (category: string) => {
        const data = cardData.filter((card) => card.category === category);
        setData(data);
    }
    return (
        <div>
            <div className="max_width">
                <div className="md:grid grid-cols-3">

                    <div className="col-span-1 p-2 ">
                        <div className="bg-white rounded-lg shadow-lg p-4 lg:block hidden">

                            <h2 className="text-xl font-bold mb-2">Products categories</h2>
                            {/* product filter */}
                            <button onClick={() => console.log('first')} className="w-full mb-2 hover:bg-yellow-300 hover:text-red-500 capitalize text-red-400 text-start py-2 px-4 border border-red-400 rounded-lg">
                                item
                            </button>
                            {menuItems.map((item) => (

                                <div key={item} className="mb-2">
                                    <button onClick={() => filterdate(item)} className="w-full active:bg-yellow-300 active:text-red-500 hover:bg-yellow-300 hover:text-red-500 capitalize text-red-400 text-start py-2 px-4 border border-red-400 rounded-lg">
                                        {item}
                                    </button>
                                </div>
                                
                            ))}
                        </div>
                        <div className="lg:hidden block ">
                            <button onClick={()=>{setShow(!show); console.log(show)}} className="px-5 py-1 capitalize hover:bg-yellow-300 hover:text-red-500 border mb-2 rounded-lg">filter</button>
                            <div className={`duration-300 ease-in-out w-full h-full z-20 ${show ? "left-0" : "left-[-100%]"}`}>
                                {menuItems.map((item) => (

                                    <div key={item} className="mb-2">
                                        <button onClick={() => { filterdate(item); setShow(!show) ;console.log(show)}} className="w-full active:bg-yellow-300 active:text-red-500 hover:bg-yellow-300 hover:text-red-500 capitalize text-red-400 text-start py-2 px-4 border border-red-400 rounded-lg">
                                            {item}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 bg-white rounded-lg shadow-lg">
                        <div className="p-4">
                            <h2 className="text-xl font-bold mb-2">Products</h2>

                        </div>
                        <div className="p-2 lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 gap-2">
                            {data.map((card) => (
                                <div className="mb-4" key={card.id}>
                                    <Card name={card.name} title={card.name} image={card.image} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductList