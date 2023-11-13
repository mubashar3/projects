import React from 'react';
import image from '../../assets/image';
import { useStateValue } from '../../state/StateProvider'
import { signInWithPopup } from 'firebase/auth';
import { auth, db, provider } from '../../firebase';
import { actionTypes } from '../../state/Reducer/Reducer';
import { doc, setDoc } from 'firebase/firestore';

const LoginScreen = () => {

    const userObject = (user) => {
        const username = user.displayName.split(" ").join("").trim().toLowerCase();
        return {
            uid: user.uid,
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
            isActive: true,
            username: username,
        }
    }


    const [{ }, dispatch] = useStateValue();

    const signIn = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            const userData = userObject(user);
            const userRef = doc(db, `users/${user.uid}`);

            await setDoc(userRef, userData, { merge: true });

            localStorage.setItem('user', JSON.stringify(userData));

            dispatch({
                type: actionTypes.SET_USER,
                user: user,
            });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='w-full gap-6 flex justify-center items-center h-full flex-col'>

            <div className='w-24'>
                <img src={image.chatIcon} alt="" className='object-contain' />
            </div>
            <h1 className='text-lg'>ChiChat</h1>
            <button onClick={signIn} className='bg-[#ffe554] py-3 px-5 font-bold rounded-lg text-black'>Google Login</button>
        </div>
    )
}

export default LoginScreen
