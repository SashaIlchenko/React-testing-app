
import { useLocation } from "react-router-dom";
import { UserList } from "../../Components/UsersList/UsersList";
import { Link } from "../../Components/Layout/Layout.styled";
const Tweets = () => {
    const location = useLocation();
    const backLinkHref = location.state?.from ?? "/";
    return (<div><Link to={backLinkHref}>Back</Link>
        <UserList />
    </div>
    )
}
export default Tweets;