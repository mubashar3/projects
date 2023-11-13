import React, { useState } from 'react';
import { useStateValue } from '../../state/StateProvider'
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase';

const ChatModal = () => {
    const [{ user, users, chats }] = useStateValue();
    const [username, setUsername] = useState('');

    const addChat = async () => {
        if (username.trim().length === 0) {
            alert("Username can't be empty");
            setUsername('');
            return;
        }
        const loUsername = username.split(" ").join("").trim().toLowerCase();
        if (loUsername === user.username) {
            alert("You can not add yourself");
            setUsername('');
            return;
        }

        if (chats !== undefined && chats.length !== 0 && (chats.findIndex((chat) => chat.username === loUsername) !== -1)) {
            alert("User already added in chat");
            setUsername('');
            return;
        }

        const idx = users.find((cur) => cur.username === loUsername);
        if (idx === undefined) {
            alert("User not found");
            setUsername('');
            return;
        }

        const chatRef = collection(db, `chats`);
        await addDoc(chatRef, {
            users: [
                user.uid,
                idx.uid,
            ],
        });
        setUsername('');
    }

    return (
        <dialog id="my_modal_1" className="modal">
            <div className="modal-box bg-[#1f332e]">
                <h3 className="font-bold text-lg">Add Chat</h3>
                <div className="modal-action">
                    <form method="dialog" className='w-full flex flex-col gap-3'>
                        <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" className='outline-none bg-[#0A201E] active:bg-[#0a201ec7] rounded-xl p-4 flex-1' placeholder='Enter user name' />
                        <div className='flex gap-6'>
                            <button onClick={addChat} className="btn flex-1 bg-[#0A201E] border-none hover:bg-[#0a201ec7]">Add</button>
                            <button className="btn flex-1 bg-[#0A201E] border-none hover:bg-[#0a201ec7]">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </dialog>
    )
}

export default ChatModal;