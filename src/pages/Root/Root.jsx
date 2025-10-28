import React, { useState, Suspense } from "react";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";
import { Outlet, useNavigation } from "react-router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AppContext } from "../../components/Context";
import Spinner from "../../components/Spinner/Spinner";

const Root = () => {
    const [selectedApp, setSelectedApp] = useState([]);
    const navigation = useNavigation();

    // Detects when routes are loading (React Router v6.4+)
    const isLoading = navigation.state === "loading";

    return (
        <div className="max-w-7xl mx-auto relative">
            <AppContext.Provider value={{ selectedApp, setSelectedApp }}>
                <ToastContainer position="top-right" autoClose={3000} />

                {/* Navbar */}
                <Navbar />

                {/* Loading Spinner */}
                {isLoading && <Spinner />}

                {/* Suspense for lazy-loaded routes */}
                <Suspense fallback={<Spinner />}>
                    <Outlet />
                </Suspense>

                {/* Footer */}
                <Footer />
            </AppContext.Provider>
        </div>
    );
};

export default Root;




// import React, { useState } from 'react';
// import Navbar from '../../components/Header/Navbar';
// import Footer from '../../components/Footer/Footer';
// import { Outlet } from 'react-router';
// import { ToastContainer } from 'react-toastify';
// import "react-toastify/dist/ReactToastify.css";
// import { AppContext } from '../../components/Context';

// const Root = () => {
//     const [selectedApp, setSelectedApp] = useState([]);
//     return (
//         <div className='max-w-7xl mx-auto'>
//             <AppContext.Provider value={{selectedApp,setSelectedApp}}>
//                 <ToastContainer position="top-right" autoClose={3000}></ToastContainer>
//                 <Navbar></Navbar>
//                 <Outlet></Outlet>
//                 <Footer></Footer>
//             </AppContext.Provider>

//         </div>
//     );
// };

// export default Root;