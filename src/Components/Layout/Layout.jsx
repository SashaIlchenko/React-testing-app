import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Container, Header, Link } from "./Layout.styled"
const Layout = () => {
    return (
        <Container><Header><nav><Link to='/'>Home</Link >
            <Link to='/tweets'>Tweets</Link >
        </nav></Header>
            <main>
                <Suspense fallback={<div>Loading page...</div>}>
                    <Outlet /> </Suspense>
            </main></Container>
    )
}
export default Layout;