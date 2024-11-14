import { createBrowserRouter,RouterProvider } from "react-router-dom"
import { Layout } from "./routes/routes"

export default function App() {
   let router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                
            }
        ]
    }
   ])

   return(<></>)
}