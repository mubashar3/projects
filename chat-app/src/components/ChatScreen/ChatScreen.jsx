import React from 'react';
import ChatNav from './ChatNav';
import Messages from './Messages';
import ChatFooter from './ChatFooter';

const ChatScreen = ({ activeChat, goBack }) => {
    const { displayName, photoURL, chatId } = activeChat;

    return (
        <div className='h-screen flex flex-col '>
            <div className='h-[70px] flex justify-between items-center px-3 bg-[#1f332e]'>
                <ChatNav back={goBack} displayName={displayName} photoUrl={photoURL} />
            </div>
            <Messages chatId={chatId} />
            <ChatFooter chatId={chatId} />
        </div >
    )
}

export default ChatScreen;
