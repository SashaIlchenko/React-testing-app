import { UserCard } from "../UserCard/UserCard";

export const UserList = ({ users }) => {
    return (<ul>{users.map(user => {
        return <li key={user.id}><UserCard user={user} /></li>
    })}</ul>)
}