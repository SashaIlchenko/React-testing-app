// import { useEffect, useState } from "react";
// import { updateUsers } from "../../API";
// export const UserCard = ({ user: { avatar, tweets, followers, user } }) => {
//     console.log(avatar)
//     return (<div><img src={avatar} alt={user} />
//         <p>{tweets} Tweets</p><p>{followers}Followers</p>
//         <button type="button">Follow</button></div>)
// }

// export const Button = ({ user }) => {
//     const [currentUser, setCurrentUser] = useState([]);
//     const [follow, setFollow] = useState(false);
//     const [id, setId] = useState(JSON.parse(localStorage.getItem('id')) || []);
//     useEffect(() => {
//         JSON.parse(localStorage.getItem('id'))
//     })
//     useEffect(() => {
//         localStorage.setItem('id', JSON.stringify(id));
//     }, [id])

//     console.log(user)
//     const handleBtnClick = () => {
//         async function getUpdateUsers() {
//             try {
//                 const data = await updateUsers(user.id, user.followers + 1);
//                 if (data) {
//                     setCurrentUser([data]);
//                     localStorage.setItem('id', JSON.stringify(id));
//                     setId(pre => [...pre, ...data.id])
//                     console.log(data)
//                     console.log(currentUser)
//                 }
//                 console.log(users)
//             } catch (error) {
//                 console.log(error);
//             }
//         };
//         getUpdateUsers();
//         setId(user.id);
//         setFollow(prev => !prev);
//         localStorage.setItem('status', follow);
//         localStorage.setItem('id', id)
//         const currentFollowers = user.followers + 1;
//         localStorage.setItem('followers', currentFollowers);
//     }
//     return <button type="button" onClick={handleBtnClick}>{follow ? "Following" : "Follow"}</button>
// }