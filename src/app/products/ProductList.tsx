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


    const filterdate = React.useCallback((category: string | boolean) => {
        let data;
        if (category === true) {
            data = cardData.filter((card) => card.showTOAllProduct === category);
        } else {
            data = cardData.filter((card) => card.category === category);
        }
        setData(data);
    }, [])

    React.useEffect(() => {
        filterdate(true);
    }, [filterdate]);

    return (
        <div>
            <div className="max_width">
                <div className="md:grid grid-cols-3">

                    <div className="col-span-1 p-2 ">
                        <div className="bg-white rounded-lg shadow-lg p-4 lg:block hidden">

                            <h2 className="text-xl font-bold mb-2">Products categories</h2>
                            {/* product filter */}
                            <button onClick={() => filterdate(true)} className="w-full mb-2 hover:bg-yellow-300 hover:text-red-500 capitalize text-red-400 text-start py-2 px-4 border border-red-400 rounded-lg">
                                All Products
                            </button>
                            {menuItems.map((item) => (

                                <div key={item} className="mb-2">
                                    <button onClick={() => filterdate(item)} className="w-full active:bg-yellow-300 active:text-red-500 hover:bg-yellow-300 hover:text-red-500 capitalize text-red-400 text-start py-2 px-4 border border-red-400 rounded-lg">
                                        {item}
                                    </button>
                                </div>

                            ))}
                        </div>
                        <div className="lg:hidden block relative">
                            <button onClick={() => { setShow(!show); console.log(show) }} className="px-5 py-1 capitalize hover:bg-yellow-300 hover:text-red-500 border mb-2 rounded-lg">filter</button>
                            <div className={`duration-300 ease-in-out absolute top-10 bg-slate-400 w-full h-full z-20 ${show ? "transform translate-x-0" : "transform -translate-x-[150%]"}`}>
                                <div className="bg-white">
                                    <div className={`p-4 ${show ? "block" : "hidden"}`}>
                                        <h2 className="text-xl font-bold mb-2">Products categories</h2>
                                    </div>
                                    {/* product filter */}
                                    {menuItems.map((item) => (

                                        <div key={item} className="mb-2">
                                            <button onClick={() => { filterdate(item); setShow(!show); console.log(show) }} className="w-full active:bg-yellow-300 active:text-red-500 hover:bg-yellow-300 hover:text-red-500 capitalize text-red-400 text-start py-2 px-4 border border-red-400 rounded-lg">
                                                {item}
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 bg-white rounded-lg shadow-lg">
                        <div className="p-4">
                            <h2 className="text-xl font-bold mb-2">Products</h2>

                        </div>
                        <div className="p-2 lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 gap-2">
                            {data.map((card) => (
                                <div className="mb-5" key={card.id}>
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