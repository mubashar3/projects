import React, { useEffect, useState } from 'react';
import { collection, onSnapshot, orderBy, query, limit } from 'firebase/firestore';
import { db } from '../../firebase';

const ChatTile = ({ photoUrl, displayName, chatId, handleChat, setChaID }) => {
    const [lastMessage, setLastMessage] = useState('Empty Messages');

    useEffect(() => {
        const dbRef = collection(db, 'chats', chatId, 'messages');
        const querySnapshot = query(dbRef, orderBy('time', 'desc'), limit(1));

        const unsubscribe = onSnapshot(querySnapshot, (snapshot) => {
            const lastMessageData = snapshot.docs[0]?.data();
            const message = lastMessageData?.message || 'Empty Messages';
            setLastMessage(message);
        });

        return unsubscribe;
    }, [chatId]);

    const handleDeleteChat = () => {
        setChaID(chatId);
        const deleteChatModal = document.getElementById('deleteChat_modal');
        if (deleteChatModal) {
            deleteChatModal.showModal();
        }
    };

    return (
        <div className='w-full h-24 px-5 flex gap-4 items-center border-b border-[#1f332e] relative'>
            <div onClick={handleChat} className='w-[90%] cursor-pointer flex gap-3 items-center '>
                <div className='h-12 w-12 rounded-full overflow-hidden' >
                    <img src={photoUrl} alt="" className='object-cover' />
                </div >
                <div>
                    <h1 className='text-sm font-bold'>{displayName}</h1>
                    <p className='text-sm w-32 truncate'>{lastMessage}</p>
                </div>
            </div>
            <button className='absolute right-5 bg-[#1f332e] px-6 py-1 text-xs rounded-lg' onClick={handleDeleteChat}>Delete</button>
        </div>
    );
};

export default ChatTile;
