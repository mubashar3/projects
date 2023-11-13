import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import ChatTile from './ChatTile';
import ChatScreen from "../ChatScreen/ChatScreen";
import { useStateValue } from '../../state/StateProvider';
import { collection, deleteDoc, doc, onSnapshot } from 'firebase/firestore';
import { db, storage } from '../../firebase';
import { actionTypes } from '../../state/Reducer/Reducer';
import Loader from './Loader';
import Empty from './Empty';
import DeleteChatModal from './DeleteChatModal';
import { deleteObject, listAll, ref } from 'firebase/storage';

const HomeScreen = () => {
    const [{ user, users, chats }, dispatch] = useStateValue();
    const [activeChat, setActiveChat] = useState(null);
    const [ChaID, setChaID] = useState(null);


    useEffect(() => {
        if (users === undefined) return;
        const unsub = onSnapshot(collection(db, "chats"), (snapshot) => {
            const validChats = [];
            snapshot.docs.forEach((doc) => {
                var id = null;
                if (doc.data().users[0] === user.uid) {
                    id = doc.data().users[1];
                } else if (doc.data().users[1] === user.uid) {
                    id = doc.data().users[0];
                }
                if (id !== null) {
                    const validUser = users.find((cur) => cur.uid === id);
                    if (validUser !== undefined)
                        validChats.push({
                            ...validUser,
                            chatId: doc.id
                        });
                }
            });
            dispatch({
                type: actionTypes.SET_CHATS,
                chats: validChats,
            });
        });
        return unsub;
    }, [users]);


    const deleteChat = async () => {
        try {
            // Delete chat document from Firestore
            const chatRef = doc(db, 'chats', ChaID);
            await deleteDoc(chatRef);

            // Delete the associated folder and its contents from Firebase Storage
            const folderRef = ref(storage, ChaID);
            const folderContents = await listAll(folderRef);
            for (const item of folderContents.items) {
                await deleteObject(item);
            }

            // console.log('Chat and associated folder deleted successfully');
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <>
            <div className={`h-screen flex flex-col ${activeChat !== null ? "hidden" : ""}`}>
                <Navbar />
                <DeleteChatModal delChat={() => deleteChat()} />
                {chats !== undefined ?
                    chats?.length === 0 ? <Empty /> :
                        chats.map((chat) =>
                            <ChatTile key={chat.chatId} photoUrl={chat.photoURL} displayName={chat.displayName} chatId={chat.chatId} handleChat={() => setActiveChat(chat)} setChaID={setChaID} />
                        )
                    : <Loader />
                }
            </div>
            {activeChat !== null && <ChatScreen activeChat={activeChat} goBack={() => setActiveChat(null)} />}
        </>
    )
}

export default HomeScreen;