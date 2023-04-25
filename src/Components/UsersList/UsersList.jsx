import { useEffect, useState } from "react";
import { getUsers } from "../../API";
import { UserItem } from '../UserItem/UserItem'
import {
    TweetsList,
    LoadBtn
} from "./UserList.styled";

export const UserList = () => {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);
    useEffect(() => {
        async function getDataUsers() {
            try {
                const data = await getUsers(page);
                if (data.length) {
                    setUsers(prev => [...prev, ...data]);
                }
            } catch (error) {
                console.log(error);
            }
        };
        getDataUsers();
    }, [page]);


    const handleBtnClick = () => {
        setPage(per => per + 1);
    }
    return (
        <>
            {
                <TweetsList >
                    {users.map(user => (
                        <UserItem key={user.id} user={user} />
                    ))}
                </TweetsList >
            }
            <LoadBtn type='button' onClick={handleBtnClick}>Load more</LoadBtn>
        </>
    );
};

