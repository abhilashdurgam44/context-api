import React, { useContext } from 'react';
import { DataContext } from '../App';

const ChildC = () => {
  const { name, gender } = useContext(DataContext);

  return (
    <div>
      <h1>Name: {name}</h1>
      <h2>Gender: {gender}</h2>
    </div>
  );
}

export default ChildC;
