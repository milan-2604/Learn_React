import { useState,useEffect } from "react";
function Users(){
    const [users,setUsers] = useState([]);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(null);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res)=>{
                if(!res.ok){
                    throw new Error('Cant fetch users data')
                } 
                return res.json();
            })
                .then((data)=>{
                    setUsers(data);
                    setLoading(false);
                })
                    .catch((err)=>{
                        setError(err.message);
                        setLoading(false);
                    });
    },[]);
    if(loading) return <p>Loading...</p>
    if(error) return <p> Error: {error}</p>

    return(
        <div>
            <h1>Users Info</h1>
            <ul>
                {users.map((user)=>(
                    <li key={user.id}>Name: {user.name}- Email: {user.email}</li>
                ))}
            </ul>
        </div>
    );
}
export default Users