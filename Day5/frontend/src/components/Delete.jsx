import React from 'react'
import axios from 'axios'
const Delete = () => {
    const handleDelete = async (e) => {
        e.preventDefault();
        const id = e.target.id.value;
        console.log(id);
        await axios.delete(`http://localhost:9000/users/${id}`);
        alert("User Deleted Successfully");
    }
  return (
    <div>
        <form onSubmit={handleDelete}>
         <h1>Delete Product</h1>
            <input type="text" placeholder="Enter Product Id "name="id"  />
            <button type="submit">Delete</button>
            </form>
    </div>
  )
}

export default Delete