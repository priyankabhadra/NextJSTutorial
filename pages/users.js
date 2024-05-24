import User from "../components/user";

function UserList({users }) {
    console.log(users)
    return <><h1>List if users</h1>
    <User users={users} />
    </>
}

export default UserList;

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    
    return {
        props: {
            users: data
        }
    }
}

