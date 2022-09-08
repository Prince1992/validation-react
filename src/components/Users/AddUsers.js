import React from 'react';
import { Button } from '../UI/Button';
import { Card } from '../UI/Card';
import classes from './AddUsers.module.css';

const AddUsers = () => {
  const addUserhandler = (e) => {
    e.preventDefault();
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserhandler}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" />
        <label htmlFor="age">Age (Years)</label>
        <input type="number" id="age" />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUsers;
