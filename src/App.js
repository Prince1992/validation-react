import React, { useState } from 'react';
import AddUsers from './components/Users/AddUsers';
import { UsersList } from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <>
      <AddUsers onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </>
  );
}

export default App;
