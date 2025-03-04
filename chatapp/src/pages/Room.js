import React, { useState, useEffect, useContext } from 'react';
import { signOut } from 'firebase/auth';
import { collection, onSnapshot, addDoc } from 'firebase/firestore';
import { auth, db } from '../config/firebase';
import { AuthContext } from '../AuthService';
// import { FirebaseError } from 'firebase/app';


const Room = () => {
    const [messages, setMessages] = useState([]);
    const [value, setValue] = useState('');

    const user = useContext(AuthContext);


    useEffect(() => {
        onSnapshot(collection(db, 'messages'), (snapshot) => {
            const messages = snapshot.docs.map((doc) => {
                return doc.data();
            });
            console.log(messages);
            setMessages(messages);
        });
    }, []);



    const handleSubmit = (e) => {
        e.preventDefault();
        addDoc(collection(db, 'messages'), {
            content: value,
            user: user.displayName
        });
    };

    return (
        <>
            <h1>Room</h1>
            <ul>
                {/* <li>sample user : sample message</li> */}
                {messages.map((msg, index) => (
                    <li key={index}>{msg.user} : {msg.content}</li>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <button type="submit">送信</button>
            </form>
            <button onClick={() => signOut(auth)}>Logout</button>

        </>
    );
};


export default Room;