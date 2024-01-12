import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import RoomDetails from "../pages/RoomDetails/RoomDetails";

const Routes = createBrowserRouter([
    {
        path : '/',
        element : <MainLayout></MainLayout>,
        errorElement : <ErrorPage></ErrorPage>,
        children : [
            {
                path : '/',
                element : <Home></Home>
            },

            {
                path : '/room/:id',
                element : <RoomDetails></RoomDetails>
            }
        ]
    },

    { path : '/login', element : <Login></Login> },
    { path : '/register', element : <Register></Register> }
])

export default Routes;