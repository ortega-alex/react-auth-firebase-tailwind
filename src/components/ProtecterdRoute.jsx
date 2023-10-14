import React from 'react';
import { userAuth } from '../context';
import { Navigate } from 'react-router-dom';

export default function ProtecterdRoute({ children }) {
    const { user, loading } = userAuth();

    if (loading) return <h1>loading</h1>;
    if (!user) return <Navigate to='/login' />;
    return <>{children}</>;
}
