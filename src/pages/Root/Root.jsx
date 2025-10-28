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
    const isLoading = navigation.state === "loading";

    return (
        <div className="max-w-7xl mx-auto relative">
            <AppContext.Provider value={{ selectedApp, setSelectedApp }}>
                <ToastContainer position="top-right" autoClose={3000} />

                <Navbar />
                {isLoading && <Spinner />}
                <Suspense fallback={<Spinner />}>
                    <Outlet />
                </Suspense>
                <Footer />

            </AppContext.Provider>
        </div>
    );
};

export default Root;
