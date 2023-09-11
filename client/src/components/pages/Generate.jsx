import React from 'react';
import GenerateBtn from '../utils/GenerateBtn';

  

const Generate = () => {
    return (
        <div className="">
            <style>
                {`
                    body {
                        overflow: hidden;
                    }
                `}
            </style>
            <div className="w-full h-full min-h-screen pt-4 text-gray-600 lg:px-8 xl:px-8">
            
                <div className="flex justify-center w-full min-h-[100vh]  rounded-[24px]">
                    <div className="w-[88%] lg:w-[60%] xl:w-[69%]">
                        <div>
                            <h1 className='pt-10 pb-3 text-center font-bold text-3xl bg-gradient-to-r from-[#DB569F] to-[#FEDA95]  bg-clip-text text-transparent '>
                                “Craft a Website in Moments Using AI”
                            </h1>
                            <p className='text-center text-gray-500'>
                                Be meticulous in your specifications, whether it involves catering to
                                "Spanish-speaking visitors" or "integration of a predominantly blue color palette."
                            </p>
                        </div>
                        <GenerateBtn />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Generate;