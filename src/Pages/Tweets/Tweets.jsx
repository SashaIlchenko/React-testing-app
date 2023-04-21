import { useState, useEffect } from "react";
// import { useSearchParams } from "react-router-dom";
import { NavLink, useLocation } from "react-router-dom";
import { getUsers } from "../../API";
// import { UserCard } from "../../Components/UserCard/UserCard";
import { UserList } from "../../Components/UsersList/UsersList";

const Tweets = () => {
    const location = useLocation();
    const backLinkHref = location.state?.from ?? "/";
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);
    useEffect(() => {
        async function getDataUsers() {
            try {
                const data = await getUsers(page);
                setUsers([...data])
            } catch (error) {
                console.log(error);
            }
        };
        getDataUsers();
    }, [page]);

    const handleBtnClick = () => {
        setPage(per => per + 1);
    }
    return (<div><NavLink to={backLinkHref}>Back</NavLink>
        <UserList users={users} />
        <button type='button' onClick={handleBtnClick}>Load more</button></div>
    )
}
export default Tweets;