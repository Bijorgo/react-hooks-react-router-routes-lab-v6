import "./index.css";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes"; 
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";


const router = createBrowserRouter([
    {
        path: "*",
        element: <ErrorPage/>,
    },
    {
        children: routes,
    }    
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router}/>);
