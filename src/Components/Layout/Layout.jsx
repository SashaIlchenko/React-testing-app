import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Container, Main, Header, Link } from "./Layout.styled"
const Layout = () => {
    return (
        <Container><Header><nav><Link to='/'>Home</Link >
            <Link to='/tweets'>Tweets</Link >
        </nav></Header>
            <Main>
                <Suspense fallback={<div>Loading page...</div>}>
                    <Outlet /> </Suspense>
            </Main></Container>
    )
}
export default Layout;