import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Container, Main, Header, Link, SpinnerWrapper } from "./Layout.styled"
import BounceLoader from "react-spinners/BounceLoader";
const Layout = () => {
    return (
        <Container><Header><nav><Link to='/'>Home</Link >
            <Link to='/tweets'>Tweets</Link >
        </nav></Header>
            <Main>
                <Suspense fallback={<SpinnerWrapper><BounceLoader color='#766A92' /></SpinnerWrapper>}>
                    <Outlet /> </Suspense>
            </Main></Container>
    )
}
export default Layout;