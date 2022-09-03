import React from 'react';
import { useSelector } from 'react-redux';

export default function Profile() {
  const { name, age, status } = useSelector((state) => {
    return state;
  });

  return (
    <div>
      <h1> Profile component.</h1>
      <h2>
        I am {name}. I'm {age} years old. I'm a {status}
      </h2>
    </div>
  );
}
