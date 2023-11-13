import React, { useEffect, useState, useRef } from 'react';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db, storage } from '../../firebase';
import { useStateValue } from '../../state/StateProvider';
import image from '../../assets/image';
import DeleteMessageModal from './DeleteMessageModal';
import { deleteDoc, doc } from 'firebase/firestore';
import { ref, deleteObject } from 'firebase/storage';

const Messages = ({ chatId }) => {
    const [{ user }] = useStateValue();
    const [messages, setMessage] = useState(null);
    const [msgId, setMsgId] = useState(null);
    const messagesEndRef = useRef(null); // Create a ref for the messages end div

    useEffect(() => {
        if (!chatId) return;
        const dbRef = collection(db, 'chats', chatId, 'messages');
        const unsub = onSnapshot(query(dbRef, orderBy('time', 'asc')), (snapshot) => {
            setMessage(snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            })));
        });
        return unsub;
    }, [chatId]);

    useEffect(() => {
        // Scroll to the last message when messages change
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages]);

    const deleteMessage = async () => {
        try {
            const messageRef = doc(db, 'chats', chatId, 'messages', msgId);
            const messageToDelete = messages.find((message) => message.id === msgId);
            // Check if the message has an image URL
            if (messageToDelete.imageUrl) {
                // Create a reference to the Firebase Storage location of the image
                const imageRef = ref(storage, messageToDelete.imageUrl);

                // Delete the image from Firebase Storage
                await deleteObject(imageRef);
            }
            // Delete the message from Firestore
            await deleteDoc(messageRef);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='bg w-full p-3 flex flex-1 flex-col gap-2 overflow-auto'>
            {messages !== null && messages.length !== 0 ? (
                messages.map((message, index) => (
                    <div key={index} className={`w-fit max-w-[80%] flex flex-col p-3 rounded-xl ${user.uid === message.uid ? 'ml-auto bg-[#0c3329f5]' : 'mr-auto bg-[#1f332e]'} relative`}>
                        {message.imageUrl ? (
                            <img src={message.imageUrl} alt="URLImage" className="max-w-full mb-2 rounded-lg" />
                        ) : null}
                        <p className='text-sm break-words'>{message.message}</p>
                        <p className='text-right text-[8px]'>{new Date(message.time?.toDate()).toLocaleTimeString()}</p>
                        {message.uid === user.uid && (
                            <>
                                <button onClick={() => {
                                    setMsgId(message.id);
                                    document.getElementById('deleteMessage_modal').showModal();
                                }} className='w-4 grayscale absolute -left-5'>
                                    <img src={image.deleteIcon} alt="delete" />
                                </button>
                                <DeleteMessageModal delMsg={() => deleteMessage()} />
                            </>
                        )}
                    </div>
                ))
            ) : (
                <p className='text-center opacity-40'>Empty Messages</p>
            )}
            {/* Create a div with a ref to scroll to the end */}
            <div ref={messagesEndRef} />
        </div>
    );
};

export default Messages;
