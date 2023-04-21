import { Outlet, NavLink } from "react-router-dom";
import { Suspense } from "react";

// import { Container, Header, Link } from "./SharedLayout.styled"
const Layout = () => {
    return (
        <div><header><nav><NavLink to='/'>Home</NavLink>
            <NavLink to='/tweets'>Tweets</NavLink>
        </nav></header>
            <main>
                <Suspense fallback={<div>Loading page...</div>}>
                    <Outlet /> </Suspense>
            </main></div>
    )
}
export default Layout;