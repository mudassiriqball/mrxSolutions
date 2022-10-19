// node_modules
import { Navigate, useRoutes } from 'react-router-dom';
// hooks
import routeNames from './routeNames';
import Home from '../pages/Home';
import OurServices from '../pages/OurServices';

const Router = () => {
   // return
   return useRoutes([
      {
         path: '/',
         // element: <LogoOnlyLayout />,
         children: [
            { path: routeNames.home, element: <Home /> },
            { path: routeNames.ourServices, element: <OurServices /> },
            { path: routeNames.ourExpertise, element: <Home /> },
            { path: routeNames.ourTeam, element: <Home /> },
            { path: routeNames.contactUs, element: <Home /> },
            //  { path: '/404', element: <Page404 /> },
             { path: '/', element: <Navigate to={routeNames.home} /> },
             { path: '*', element: <Navigate to={routeNames.home} /> },
         ]
      },
   ]);
};

export default Router;