import React from 'react';
import { createBrowserRouter } from "react-router";

import Home from '../pages/Home/Home';
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Apps from '../pages/Apps/Apps';
import Installation from '../pages/Installation/Installation';
import AppsDetails from '../pages/AppsDetails/AppsDetails';
import ErrorApp from '../pages/ErrorApp/ErrorApp';

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                path: '/',
                loader: async () => {
                    const res = await fetch('/appsData.json');
                    const data = await res.json();
                    return data.slice(0, 8);
                },
                Component: Home,
            },
            {
                path: '/apps',
                loader: () => fetch('/appsData.json'),
                // errorElement:
                Component: Apps,
            },
            {
                path: '/installation',
                loader: () => fetch('/appsData.json'),
                Component: Installation,
            },
            {
                path: "/appDetails/:id",
                element: <AppsDetails />,
                loader: async () => {
                    const res = await fetch("/appsData.json");
                    return res.json(); // returns array; AppsDetails will pick the correct item
                },
            },
            {
                path: "/apps/appDetails/:id",
                element: <AppsDetails />,
                errorElement:<ErrorApp></ErrorApp>,
                loader: async () => {
                    const res = await fetch("/appsData.json");
                    return res.json();
                },
            },

        ]
    },
]);
