import './SidebarChat.css';
import React, { useEffect, useState } from 'react';
import { Avatar } from '@mui/material';
import { collection, addDoc, onSnapshot, query, orderBy } from 'firebase/firestore';
import { db } from '../../firebase';
import { Link } from 'react-router-dom';

const SidebarChat = ({ id, name, addNewChat }) => {

    const [messages, setMessages] = useState([]);


    useEffect(() => {
        if (id) {

            onSnapshot(query(collection(db, 'chats', id, 'messages'), orderBy('time', 'desc')), (snapshot) => {
                setMessages(
                    snapshot.docs.map((doc) =>
                        doc.data()
                    )
                );
            })
        }
    }, [id]);

    const createChat = () => {
        const chatName = prompt('Enter a name for chat: ');
        if (chatName) {
            addDoc(collection(db, 'chats'), { name: chatName });
        };
    }


    return !addNewChat ? (
        <Link to={`chats/${id}`}>
            <div className='sidebarChat'>
                <Avatar />
                <div className="sidebarChat_info">
                    <h2>{name}</h2>
                    <p>{messages[0]?.message}</p>
                </div>
            </div>
        </Link>
    ) :
        (
            <div className='sidebarChat' onClick={createChat}>
                <h1>Add New Chat</h1>
            </div>
        );
}

export default SidebarChat;