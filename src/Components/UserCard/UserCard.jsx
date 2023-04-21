

export const UserCard = ({ avatar, tweets, followers, user }) => {
    return (<div><img src={avatar} alt={user} />
        <p>{tweets} Tweets</p><p>{followers}Followers</p>
        <button type="button">Follow</button></div>)
}