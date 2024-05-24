function User({users}) {
    return (<>
     {users.map(user => {
        return (<div key={user.id}>
            <p>{user.name}</p>
            <p>{user.email}</p>
        </div>)
    })}
    </>)
}

export default User;