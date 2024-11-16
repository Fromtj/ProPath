import { createBrowserRouter,RouterProvider } from "react-router-dom"
import {Layout,Home,ProjectList, Byid} from "./routes/routes"
import { Suspense } from "react"
import Loader from "./loader/loader.jsx"

export default function App() {
   let router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Suspense fallback={<Loader/>}><Home /></Suspense>,
            },
            {
                path: "/project_list",
                element: <Suspense fallback={<Loader/>}><ProjectList /></Suspense>
            },
            {
                path: "/project_list/:id",
                element: <Suspense fallback={<Loader/>}><Byid /></Suspense>
            }
        ]
    }
   ])

   return(<><RouterProvider router={router} /></>)
}