import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, Login, ProtecterdRoute, Register } from './components';
import { AuthProvider } from './context';

export default function App() {
    return (
        <div className='bg-slate-300 h-screen text-black flex'>
            <AuthProvider>
                <Routes>
                    <Route
                        path='/'
                        element={
                            <ProtecterdRoute>
                                <Home />
                            </ProtecterdRoute>
                        }
                    />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                </Routes>
            </AuthProvider>
        </div>
    );
}
