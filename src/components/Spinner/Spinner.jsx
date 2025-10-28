import React from 'react';
import LOGO from '../../assets/logo.png'
const Spinner = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white">
            <h1 className="text-4xl font-bold flex items-center space-x-2">
                <span>L</span>
                <img
                    src={LOGO} // replace with your image path
                    alt="loading"
                    className="w-10 h-10 animate-spin mx-1"
                />
                <span>OADING...</span>
            </h1>
        </div>
    );
};

export default Spinner;
