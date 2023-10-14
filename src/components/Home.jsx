import React from 'react';
import { userAuth } from '../context';

export default function Home() {
    const { user, logout, loading } = userAuth();

    const handleLogout = async () => {
        try {
            await logout();
        } catch (error) {
            console.error(error.message);
        }
    };

    if (loading) return <h1>loading</h1>;

    return (
        <div className='w-full max-w-xs m-auto text-black'>
            <div className='bg-white rounded shadow-md px-8 py-6 pb-8 mb-4'>
                <h1 className='text-xl mb-4'>Welcome {user?.displayName || user?.email}</h1>
                <button className='bg-slate-200 hover:bg-slate-300 rounded py-2 px-4 text-black' onClick={handleLogout}>
                    Logout
                </button>
            </div>
        </div>
    );
}
