import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { useCurrentUser } from '../context/CurrentUser';

const ProtectedRoute = ({ element }) => {
  const { currentUser } = useCurrentUser();

  return currentUser && currentUser.role === 'admin' ? element : 'You are not an admin';
};

export default ProtectedRoute;