import React from 'react';

const AddUsers = () => {
  const addUserhandler = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={addUserhandler}>
      <label htmlFor="username">Username</label>
      <input type="text" id="username" />
      <label htmlFor="age">Age (Years)</label>
      <input type="number" id="age" />
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUsers;
