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
import UpdateReview from "../../Pages/Reviews/MyReviews/UpdateReview";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

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
                element: <PrivateRoutes><AddNewService></AddNewService></PrivateRoutes>,
            },
            {
                path: '/all-reviews',
                element: <AllReviews></AllReviews>,
            },
            {
                path: '/my-reviews',
                element: <PrivateRoutes><MyReviews></MyReviews></PrivateRoutes>,
            },
            {
                path: '/services/:id',
                loader: ({ params }) => {
                    return fetch(`http://localhost:5000/services/${params.id}`)
                },
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
                path: '/update/:id',
                element: <UpdateReview></UpdateReview>,
                loader: ({ params }) => fetch(`http://localhost:5000/update/${params.id}`)
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