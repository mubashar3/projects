import React, { useEffect, useState } from 'react';
import './Chat.css';
import { Avatar, IconButton } from '@mui/material';
import { AttachFile, InsertEmoticon, Mic, MoreVert, SearchOutlined } from '@mui/icons-material';
import { useParams } from 'react-router-dom';
import { addDoc, collection, doc, onSnapshot, orderBy, query, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase';
import { useStateValue } from '../../state/StateProvider';

const Chat = () => {
    const [inputText, setInputText] = useState("");
    const { chatId } = useParams();
    const [chatName, setChatName] = useState("");
    const [messages, setMessages] = useState([]);
    const [{ user }] = useStateValue();

    useEffect(() => {

        if (chatId) {
            onSnapshot(doc(db, 'chats', chatId), (snapshot) => {
                setChatName(
                    snapshot.data().name,
                );
            })


            onSnapshot(query(collection(db, 'chats', chatId, 'messages'), orderBy('time', 'asc')), (snapshot) => {
                setMessages(
                    snapshot.docs.map((doc) =>
                        doc.data()
                    )
                );
            })


        }
    }, [chatId]);


    const sendText = (e) => {
        e.preventDefault();
        console.log("message send")

        const dbRef = collection(db, 'chats', chatId, 'messages');

        const sendMsg = {
            email: user.email,
            message: inputText,
            name: user.displayName,
            time: serverTimestamp(),
        }
        addDoc(dbRef, sendMsg);

        setInputText("");
    }


    return (
        <div className='chat'>
            <div className="chat_header">
                <Avatar />
                <div className="chat_headerInfo">
                    <h2>{chatName}</h2>
                    <p>Last Seen {" "} {
                        new Date(messages[messages.length - 1]?.time?.toDate()).toUTCString()
                    }</p>
                </div>
                <div className="chat_headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            <div className="chat_body">

                {messages.map((message, key) => (

                    <p key={key} className={`chat_messages ${message.email === user.email && 'chat_reciever'}`}>
                        <span className="chat_name">{message.name}</span>{message.message}<span className="chat_timestamp">{new Date(message.time?.toDate()).toLocaleTimeString()}</span></p>
                ))}

            </div>
            <div className="chat_footer">
                <InsertEmoticon />
                <form >
                    <input type="text" value={inputText} onChange={(e) => { setInputText(e.target.value) }} placeholder='type your message' />
                    <input type="submit" value="Send Message" onClick={sendText} />
                </form>
                <Mic />
            </div>
        </div>
    )
}

export default Chat;