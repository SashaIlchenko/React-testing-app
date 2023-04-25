import { useEffect, useState } from "react";
import { updateUsers } from '../../API';
import logo from '../../images/Logo.png';
import backgroundImg from '../../images/BackgroundImg.png'
import { Item, Wrapper, Avatar, TweetsInfo, FollowingBtn } from './UserItem.styled'
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
    const NormilizedFollowers = () => {
        const NumberArr = userFollowers.toString().split('');
        if (NumberArr.length === 5) {
            return NumberArr.toSpliced(2, 0, ',');
        } else if (NumberArr.length > 5) {
            return NumberArr.toSpliced(3, 0, ',');
        }
        return NumberArr.toSpliced(1, 0, ',');
    }
    return (<Item>
        <Wrapper>
            <img src={logo} alt="logo" />
            <img src={backgroundImg} alt="img" width='308' />
        </Wrapper>
        < Avatar src={avatar} alt={user} />
        <TweetsInfo>{tweets} Tweets</TweetsInfo>
        <TweetsInfo>{NormilizedFollowers()} Followers</TweetsInfo>
        {follow ? <FollowingBtn className='active' type="button" onClick={() => handleFollowClick(id, followers)}>Following</FollowingBtn> :
            <FollowingBtn type="button" onClick={() => handleFollowClick(id, followers)}>Follow </FollowingBtn>}
    </Item>
    )
}

