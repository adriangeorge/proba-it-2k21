import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

const DashboardScreen = () => {
    return (
        <>
            {
                // Check if user is logged in
                true ? (
                        <Navigate to="/" />
                    ) : (<></>)
            }
            <div className="grid grid-cols-1 ">
                <div className=" flex flex-col sm:flex-row h-screen justify-center items-center">
                    <div className="m-auto">
                        <div className=" flex flex-col items-center gap-y-3">
                            <div className="w-1/2">
                                <p className="text-xl font-semibold text-black sm:text-2xl sm:leading-7 sm:text-black md:text-5xl ">
                                    Învățatul nu a fost niciodată mai simplu!
                                </p>
                            </div>
                            <div className="w-1/2">
                                <p className="text-sm font-medium text-black sm:mb-1 md:text-2xl">
                                    Platforma ideală pentru meditații online, atât pentru profesori, cât si pentru studenți.

                                </p>
                            </div>
                        </div>

                    </div>
                    <div className="bg-hero bg-contain bg-no-repeat bg-top sm:bg-center w-3/5 h-3/5 md:mr-10" />
                </div>
            </div>
        </>
    );
};

export default DashboardScreen;