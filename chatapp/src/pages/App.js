import React from 'react';
import LoggedInRoute from '../LoggedInRoute';
import { AuthProvider } from '../AuthService';

// import AuthProvider from './AuthService';

import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'

import Login from './Login';
import SignUp from './SignUp';
import Room from './Room';



const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route element={<LoggedInRoute />}>
                        <Route path='/' element={<Room />} />
                    </Route>
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<SignUp />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default App;