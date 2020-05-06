import React from 'react';
import { Link} from 'react-router-dom';

export default function Header() {
  return (
    <header style={{background: '#333', color: '#fff', textAlign: 'center', padding: '10px'}}>
      <h1> TodoList </h1>
      <Link to="/">Home</Link> 
      <Link to="/about">About</Link>
    </header>
  )
}
