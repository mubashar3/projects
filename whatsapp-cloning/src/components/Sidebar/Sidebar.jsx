import React, { useState, useEffect } from 'react'
import './Sidebar.css'
import { Avatar, IconButton } from '@mui/material'
import { Chat, DonutLarge, MoreVert, SearchOutlined } from '@mui/icons-material'
import SidebarChat from '../SidebarChats/SidebarChat'
import { db } from '../../firebase';
import { collection, onSnapshot } from 'firebase/firestore';
import { useStateValue } from '../../state/StateProvider'


const Sidebar = () => {

    const [chats, setChats] = useState([]);
    const [{ user }] = useStateValue();


    useEffect(() => {
        const unsub = onSnapshot(collection(db, 'chats'), (snapshot) => {
            setChats(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),

                }))
            );
        });

        return () => unsub();
    }, []);


    return (
        <div className='sidebar'>
            <div className="sidebar_header">
                <Avatar src={user?.photoURL} />
                <div className="sidebar_headerRight">
                    <IconButton>
                        <DonutLarge />
                    </IconButton>
                    <IconButton>
                        <Chat />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            <div className="sidebar_search">
                <div className="sidebar_searchContainer">
                    <SearchOutlined />
                    <input type="text" placeholder='search or start new chat ' />
                </div>
            </div>
            <div className="sidebar_chat">
                <SidebarChat addNewChat />
                {chats.map((chat) => (
                    <SidebarChat key={chat.id} id={chat.id} name={chat.data.name} />
                ))}
            </div>
        </div>
    )
}

export default Sidebar;