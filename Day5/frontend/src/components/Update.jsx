import React from 'react'

const Update = () => {
    const handleupdate =async (e) =>{
        e.preventDefault()
            const id= e.target.id.value
           const name= e.target.name.value
           const age= e.target.age.value
           const data={name, age}
        await axios.put(`http://localhost:9000/users/${id}`, data)
       alert('User Updated Successfully')

    }
  return (
    <div>
        <h1>Update User</h1>
        <form onsubmit={handleupdate}>
            <label>
                ID:
                <input type='text' name='id' />
            </label>
            <label>
                Name:
                <input type='text' name='name' />
            </label>
            <label>
                Age:
                <input type='text' name='age' />
            </label>
            <label>
                <button type='submit'>Update</button>
            </label>
        </form>
    </div>
  )
}

export default Update