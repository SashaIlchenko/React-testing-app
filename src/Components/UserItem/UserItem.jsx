import { useEffect, useState } from "react";
import { updateUsers } from '../../API';
export const UserItem = ({ user }) => {
    const { avatar, tweets, followers, id } = user;
    const [userFollowers, setUserFollowers] = useState(followers);
    const [follow, setFollow] = useState(false);
    const handleFollowClick = async () => {
        if (!follow) {
            const increment = followers + 1;
            try {
                await updateUsers(id, increment);
                setUserFollowers(increment);
                setFollow(true);
            } catch (error) {
                console.log(error)
            }
        } else {
            try {
                await updateUsers(id, followers);
                setUserFollowers(followers);
                setFollow(false);
            } catch (error) {
                console.log(error)
            }
        }
    };
    useEffect(() => {
        const localeFollow = localStorage.getItem(`follow${id}`);
        if (localeFollow !== null) {
            const parsedFollow = JSON.parse(localeFollow);
            setFollow(parsedFollow.follow);
            setUserFollowers(parsedFollow.userFollowers);
        } else {
            setUserFollowers(followers);
        }
    }, [id, followers]);
    useEffect(() => {
        const followArray = { id, follow, userFollowers };
        localStorage.setItem(`follow${id}`, JSON.stringify(followArray));
    }, [id, follow, userFollowers]);

    return (<div>
        <img src={avatar} alt={user} />
        <p>{tweets} Tweets</p><p>{userFollowers} Followers</p>
        <button type="button" onClick={() => handleFollowClick(id, followers)}>{follow ? "Following" : "Follow"}</button></div>
    )
}

