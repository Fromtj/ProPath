import { lazy } from "react";

export const Layout = lazy(() => import("../layout/layout"))
export const Home = lazy(() => import("../pages/home/home"))
export const ProjectList = lazy(() => import("../pages/ProjectList/ProjectList")) 
export const Byid = lazy(() => import("../pages/byid/byid"))