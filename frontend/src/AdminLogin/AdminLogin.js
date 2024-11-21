import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../Auth/AuthContext';
import { useCurrentUser } from "../context/CurrentUser";
import './AdminLogin.css';

import { GraphQLClient, gql } from "graphql-request";

const graphqlUrl = process.env.REACT_APP_GRAPHQL_URL
const client = new GraphQLClient(graphqlUrl);

const LOGIN_MUTATION = gql`
  mutation LoginUser($userName: String!, $password: String!){
    loginUser(userName: $userName, password: $password){
      token
      user{
        id
        userName
        role
      }
    }
  }
`




function AdminLogin() {
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { currentUser, updateToken } = useCurrentUser();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { loginUser } = await client.request(LOGIN_MUTATION, {
        userName,
        password
      });
      updateToken(loginUser.token);
      setUsername('')
      setPassword('')
      navigate("/submit")

    } catch (error) {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="admin-login-container">
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="userName"
            name="userName"
            value={userName}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button">Login</button>
        {currentUser && currentUser.id && <p>{currentUser.id}</p>}
      </form>
      {}
      
    </div>
  );
}

export default AdminLogin;