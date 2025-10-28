import React from 'react';
import AppErrorImg from '../../assets/App-Error.png'
import { useNavigate } from 'react-router';
const ErrorApp = () => {
    const navigate = useNavigate();
    const handleAppError =()=>{
        navigate('/');
    }
    return (
        <div className='my-20'>
            <img className='mx-auto w-3xs' src={AppErrorImg} alt="" />
            <div className='mt-8'>
                <h1 className='text-3xl font-bold inter mb-2'>Oops, App not found!</h1>
                <p className='inter opacity-70 mb-4'>The app you are looking is not available!</p>
                <button onClick={handleAppError} className='rounded-[4px]   cursor-pointer px-[18px] pt-[8px] pb-[10px] font-medium bg-[linear-gradient(125.07deg,#632EE3,#9F62F2)]
                       text-white mx-auto'>
                    Go Back
                </button>
            </div>
        </div>
    );
};

export default ErrorApp;