import { useEffect, useState } from "react";
import { getUsers } from "../../API";
import { UserItem } from '../UserItem/UserItem';
import { getAllUsers } from "../../API";
// import { Filter } from "../Dropdown/Dropdown";
import {
    TweetsList,
    LoadBtn,
    AllBtn
} from "./UserList.styled";
import { toast, Toaster } from "react-hot-toast";
import BounceLoader from "react-spinners/BounceLoader";

export const UserList = () => {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);
    const [isLoading, setIsloading] = useState(false);
    useEffect(() => {
        async function getDataUsers() {
            try {
                const data = await getUsers(page);
                if (data.length) {
                    setUsers(prev => [...prev, ...data]);
                    setIsloading(true);
                } else {
                    toast.error('Oops!No more tweets yet');
                    setIsloading(false);
                }
            } catch (error) {
                console.log(error);
                setIsloading(false);
            }
        };
        getDataUsers();
    }, [page]);
    const handleAllClick = () => {
        async function getDataAllUsers() {
            try {
                const data = await getAllUsers();
                setUsers([...data]);
                setIsloading(true);
            } catch (error) {
                console.log(error);

            }
        }
        getDataAllUsers()
    }
    const handleBtnClick = () => {
        setPage(per => per + 1);
    }
    return (
        <>
            <AllBtn type='button' onClick={handleAllClick}>Show All</AllBtn>
            <Toaster />
            {!isLoading && <BounceLoader color='#766A92' />}
            {<TweetsList >
                {users.map(user => (
                    <UserItem key={user.id} user={user} />
                ))}
            </TweetsList >
            }
            {isLoading && <LoadBtn type='button' onClick={handleBtnClick}>Load more</LoadBtn>}
        </>
    );
};

