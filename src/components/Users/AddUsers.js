import React, { useState, useRef } from 'react';
import Wrapper from '../Helper/Wrapper';
import { Button } from '../UI/Button';
import { Card } from '../UI/Card';
import { ErrorModal } from '../UI/ErrorModal';
import classes from './AddUsers.module.css';

const AddUsers = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [enteredUserName, setEnteredUserName] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState();

  const addUserhandler = (e) => {
    e.preventDefault();
    console.log(nameInputRef.current.value);
    console.log(ageInputRef.current.value);
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid Input',
        message: 'Please enter a valid name age (non-empty values).',
      });
      return;
    }

    if (+enteredAge < 1) {
      setError({
        title: 'Invalid Age',
        message: 'Please enter a valid age (>0).',
      });
      return;
    }
    props.onAddUser(enteredUserName, enteredAge);
    setEnteredAge('');
    setEnteredUserName('');
  };

  const userNameChangeHandler = (e) => {
    setEnteredUserName(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserhandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            onChange={userNameChangeHandler}
            value={enteredUserName}
            ref={nameInputRef}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            id="age"
            onChange={ageChangeHandler}
            value={enteredAge}
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUsers;
