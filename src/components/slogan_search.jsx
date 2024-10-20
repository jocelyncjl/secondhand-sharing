import React from "react";

export function Slogan(){
    return(
        <div className="flex flex-col justify-center items-center ">
            <div className="bold text-2xl sm:text-3xl md:text-6xl mb-7">
                <h1 style={{ fontFamily: "'Almarai', sans-serif",fontWeight: 700,fontStyle: 'normal'}}>
                    <span className="block text-center mb-3">Connect thrift items</span>
                    <span className="block">together for a sustainable life</span>
                </h1>
            </div>
            <div className="bold text-sm md:text-2xl ">
                <p style={{ fontFamily: "'Almarai', sans-serif",fontWeight: 500,fontStyle: 'normal'}}>Discover second-hand treasures from people around you</p>
            </div>
            <div className="flex flex-row w-full justify-center items-center space-x-2 mt-10">
                <input
                    type="text"
                    placeholder="Search for goods"
                    className="rounded-full border border-gray-400 px-4 py-2 md:px-12"
                />
                <button className="bg-black text-white rounded-full hover:bg-gray-600 px-6 py-2 md:px-1.5rem">
                    Search
                </button>
            </div>
        </div>
    )
}