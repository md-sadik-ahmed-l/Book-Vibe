import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Homepage from "../HomePages/Homepage";

import ErrorPage from "../ErrorPage/ErrorPage";
import ListedBooks from "../components/ListedBooks/ListedBooks";
import BookDetails from "../BookDetails/BookDetails";
import PagesToRead from "../components/PagesToRead/PagesToRead";



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
      },
      {
        path:"/Pages-to-Read",
        element: <PagesToRead></PagesToRead>
      },
      {
        path:"/bookDetails/:id",
        element: <BookDetails></BookDetails>
      }

    ],
    errorElement: <ErrorPage></ErrorPage>
  },
  

])