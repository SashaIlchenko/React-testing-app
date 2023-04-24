
import { NavLink, useLocation } from "react-router-dom";
import { UserList } from "../../Components/UsersList/UsersList";

const Tweets = () => {
    const location = useLocation();
    const backLinkHref = location.state?.from ?? "/";
    return (<div><NavLink to={backLinkHref}>Back</NavLink>
        <UserList />
    </div>
    )
}
export default Tweets;