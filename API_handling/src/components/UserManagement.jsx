import { useState } from "react";
import axios from 'axios';
const API_URL =  'https://jsonplaceholder.typicode.com/users';

function UserManagement (){
    const [user , setUser] = useState({username:'',email:''});
    const [updateData , setUpdateData] = useState({userId:'',email:''});
    const [deleteUserId , setDeleteUserId] = useState("");
    const [message , setMessage] = useState('');

        // Handle create user form input change
        const handleCreateChange =(e)=>{
            setUser({...user,[e.target.name]: e.target.value});
        };

          // Handle update user form input change
          const handleUpdateChange = (e)=>{
            setUpdateData({...updateData,[e.target.name]: e.target.value});
          }; 

          //Handle create user
         const createUser = async (e)=>{
            e.preventDefault();
            try{
                const res = await axios.post(API_URL,user);
                setMessage(`User created! ID: ${res.data.id}`);
                setUser({ username: '', email: '' });
            }catch(err){
                setMessage('Error creating user');
            }
         };

         //Handle update user
         const updateUser = async (e)=>{
            e.preventDefault();
            if (!updateData.userId) {
            setMessage('Please provide user ID to update');
            return;
            }
            try{    
                const res = await axios.patch(`${API_URL}/${updateData.userId}`,
                  { email: updateData.email });
                  setMessage(`User updated! New email: ${res.data.email}`);
                  setUpdateData({ userId: '', email: '' }); // reset form

            }catch(err){
                setMessage('Error updating user');
            }
         }

         //Handle delte user
         const deleteUser = async (e)=>{
            e.preventDefault();
            if (!deleteUserId) {
                setMessage('Please provide user ID to delete');
                return;
            }
            try{
                await axios.delete(`${API_URL}/${deleteUserId}`);
                 setMessage(`User with ID ${deleteUserId} deleted`);
                 setDeleteUserId(''); // reset form
            }catch(err){
                 setMessage('Error deleting user');
            }
         }
    return(
        <div>
            <h2>Create user</h2>
            <form onSubmit={createUser}>
                <input type="text" name="username" placeholder="Name" value={user.username}
                 onChange={handleCreateChange} required />
                <input type="email" name="email" placeholder="Email" value={user.email} 
                onChange={handleCreateChange} required />
                <button type="submit">Create</button>
            </form>

            <h2>Update User Email</h2>
            <form onSubmit={updateUser}>
                <input type="number" name="userId" placeholder="User ID" value={updateData.userId}
                 onChange={handleUpdateChange} required />
                 <input type="email" name="email" placeholder="New Email" value={updateData.email} 
                 onChange={handleUpdateChange} required />
                 <button type="submit">Update</button>
            </form>

            <h2>Delete User</h2>
            <form onSubmit={deleteUser}>
                <input type="number" placeholder="User ID" value={deleteUserId} 
                onChange={(e)=>setDeleteUserId(e.target.value)} required />
                <button type="submit">Delete</button>
            </form>

            {message && <p><strong>{message}</strong></p>}
        </div>
    );
}
export default UserManagement