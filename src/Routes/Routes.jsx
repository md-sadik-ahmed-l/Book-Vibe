import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/Homepage";

import ErrorPage from "../ErrorPage/ErrorPage";
import ListedBooks from "../components/ListedBooks/ListedBooks";



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
        element: <ListedBooks></ListedBooks>
      }
    ],
    errorElement: <ErrorPage></ErrorPage>
  },
  

])