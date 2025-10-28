import React from 'react';
import ErrorImg from '../../assets/error-404.png'
import { useNavigate } from 'react-router';
const ErrorPage = () => {
    const navigate = useNavigate();
    const handleGoBack = () => {
       navigate('/')
    }
    return (
        <div>
            <img className='mx-auto' src={ErrorImg} alt="" />
            <div className='mt-8'>
                <h1 className='text-3xl font-bold inter mb-2'>Oops, page not found!</h1>
                <p className='inter opacity-70 mb-4'>The page you are looking is not available!</p>
                <button onClick={handleGoBack} className='rounded-[4px]   cursor-pointer px-[18px] pt-[8px] pb-[10px] font-medium bg-[linear-gradient(125.07deg,#632EE3,#9F62F2)]
                 text-white mx-auto'>
                    Go Back
                </button>
            </div>
        </div>
    );
}
export default ErrorPage;