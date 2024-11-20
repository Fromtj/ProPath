import { Outlet } from "react-router-dom"
import { Link } from "react-router-dom"
import Header from "../components/header/header"
import Footer from "../components/footer/footer"

export default function Layout() {
    return(<section className="bg-amber-50">
    <Header />
<Outlet />
<Footer />
    </section>)
}