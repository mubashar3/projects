import React, { useState } from 'react';
import image from '../../assets/image';
import { Timestamp, addDoc, collection, } from 'firebase/firestore';
import { db, storage } from '../../firebase'; // Import Firebase storage
import { useStateValue } from '../../state/StateProvider';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const ChatFooter = ({ chatId }) => {
    const [messageText, setMessageText] = useState('');
    const [selectedImage, setSelectedImage] = useState(null); // State to store the selected image
    const [{ user }] = useStateValue();

    const sendMessage = async (e) => {
        e.preventDefault();
        const messageRef = collection(db, 'chats', chatId, 'messages');
        const sendMessage = {
            uid: user.uid,
            message: messageText,
            time: Timestamp.now(),
            name: user.displayName,
        }

        if (messageText.split(' ').join('').trim().length === 0 && !selectedImage) {
            return;
        }

        if (selectedImage) {
            // If an image is selected, upload it to Firebase Storage first
            const imageUrl = await uploadImage(selectedImage);
            sendMessage.imageUrl = imageUrl; // Include the image URL in your message object
        }

        await addDoc(messageRef, sendMessage);
        setMessageText('');
        setSelectedImage(null); // Clear the selected image after sending
    }

    const handleImageUpload = (e) => {
        const imageFile = e.target.files[0];
        if (imageFile) {
            // Set the selected image to the state variable
            setSelectedImage(imageFile);
        }
    }

    const uploadImage = async (imageFile) => {
        try {
            // Create a reference to the Firebase Storage location where you want to store the image
            const storageRef = ref(storage, `${chatId}/${imageFile.name}`);

            // Upload the image to Firebase Storage using uploadBytes
            await uploadBytes(storageRef, imageFile);

            // Get the download URL of the uploaded image
            const imageUrl = await getDownloadURL(storageRef);

            return imageUrl;
        } catch (error) {
            console.error('Error uploading image:', error);
            return null;
        }
    }

    return (
        <div className='w-full h-[70px] relative'>
            {selectedImage && (
                <div onClick={() => setSelectedImage(null)} className='bg-[#1f332e] h-32 max-h-64 absolute -top-32 w-auto rounded-xl'>
                    {/* Display the selected image if available */}
                    <img src={URL.createObjectURL(selectedImage)} alt="SelectedImage" className='object-fill h-full' />
                </div>
            )
            }
            <form className='h-[70px] flex justify-between gap-2 items-center px-3 bg-[#1f332e]'>
                <div className='flex-1 flex items-center justify-center relative'>
                    <input
                        value={messageText}
                        onChange={(e) => { setMessageText(e.target.value) }}
                        className='py-[10px] px-[20px] pr-10 placeholder:opacity-25 focus:outline-none w-full rounded-lg bg-[#103230af]'
                        type="text"
                        placeholder='type message'
                    />
                    <label htmlFor="image-upload" className="cursor-pointer absolute right-2">
                        <img src={image.emojiIcon} alt="Upload" className='w-7 invert-[25%]' />
                        <input
                            id="image-upload"
                            type="file"
                            accept="image/*"
                            className='hidden'
                            onChange={handleImageUpload}
                        />
                    </label>
                </div>
                <button type='submit' onClick={sendMessage} >
                    <img className='h-10 invert-[25%]' src={image.sendIcon} alt="" />
                </button>
            </form>
        </div >
    );
}

export default ChatFooter;
