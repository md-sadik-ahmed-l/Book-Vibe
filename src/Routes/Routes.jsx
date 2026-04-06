import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/Homepage";
import Books from "../pages/Books";
import ErrorPage from "../ErrorPage/ErrorPage";



export const router = createBrowserRouter([

  {

    path: "/",
    element: <MainLayout/>,
    children:[
      {
        index: true,
        element: <Homepage></Homepage>,
      },

      {
        path:"/book",
        element: <Books></Books>
      }
    ],
    errorElement: <ErrorPage></ErrorPage>
  },
  

])