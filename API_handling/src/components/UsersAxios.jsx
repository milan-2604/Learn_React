import { useState,useEffect } from "react";
import axios from 'axios'

function UsersAxios(){
    const [users,setUsers]=useState([]);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(null);

    useEffect(()=>{
        const fetchUsers = async ()=>{
            try{
                const res = await axios.get('https://jsonplaceholder.typicode.com/users');
                setUsers(res.data);
            }catch(err){
                setError(err.message);
            }finally{
                setLoading(false);
            }
        };
        fetchUsers();

    },[]);

    if(loading) return <p>Loading...</p>;
    if(error) return <p>Error: {error}</p>;

    return(
        <div>
            <h1>Users Info Using Axios</h1>
            <ul>
                {users.map((user)=>(
                    <li key={user.id}>Name: {user.name} - Email: {user.email}</li>
                ))}
            </ul>
        </div>
    )
}
export default UsersAxios;