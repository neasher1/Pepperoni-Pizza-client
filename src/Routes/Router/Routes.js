import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import Home from "../../Pages/Home/Home/Home";
import AddNewService from "../../Pages/Home/Services/AddNewService/AddNewService";
import AllService from "../../Pages/Home/Services/AllService";
import ServiceDetails from "../../Pages/Home/Services/ServiceDetails";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import AllReviews from "../../Pages/Reviews/AllReviews/AllReviews";
import MyReviews from "../../Pages/Reviews/MyReviews/MyReviews";

const router = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/add-service',
                element: <AddNewService></AddNewService>,
            },
            {
                path: '/all-reviews',
                element: <AllReviews></AllReviews>,
            },
            {
                path: '/my-reviews',
                element: <MyReviews></MyReviews>,
            },
            {
                path: '/services/:id',
                element: <ServiceDetails></ServiceDetails>,
            },
            {
                path: '/services',
                element: <AllService></AllService>,
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>,
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Register></Register>,
            },
        ]
    }

]);

export default router;