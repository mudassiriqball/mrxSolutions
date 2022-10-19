// node_modules
import { Navigate, useRoutes } from 'react-router-dom';
// hooks
import routeNames from './routeNames';
import { lazy } from 'react';
import Home from '../pages/Home';

const Router = () => {
   // return
   return useRoutes([
      {
         path: '/',
         // element: <LogoOnlyLayout />,
         children: [
            { path: routeNames.home, element: <Home /> },
            //  { path: routeNames.general.register, element: <Register /> },
            //  { path: routeNames.general.password, element: <SetPassword />},
            //  { path: routeNames.general.activate, element: <ActivateVendor />},
            //  { path: routeNames.general.contactUs, element: <ContactUs />},
            //  { path: '/404', element: <Page404 /> },
             { path: '/', element: <Navigate to={routeNames.home} /> },
             { path: '*', element: <Navigate to={routeNames.home} /> },
         ]
      },
      // { path: routeNames.general.notFound, element: <NotFound /> },
   ]);
};

export default Router;