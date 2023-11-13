import React from 'react'
import './Login.css'
import { Button } from '@mui/material'
import whatsapp from "./WhatsApp.svg.webp"
import { auth, provider } from '../../firebase'
import { signInWithPopup } from 'firebase/auth'
import { useStateValue } from '../../state/StateProvider'
import { actionTypes } from '../../state/Reducer/Reducer'

const Login = () => {

    const [{ }, dispatch] = useStateValue();

    const signIn = () => {
        signInWithPopup(auth, provider).then((result) => {
            console.log(result);
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            });
        }).catch((error) => {
            alert(error.message);
        })
    };

    return (
        <div className='login'>
            <div className="login_container">
                <img src={whatsapp} alt="" />
                <div className="login_text">
                    <h1>Sign in to Whatsapp</h1>
                </div>

                <Button onClick={signIn}>
                    Sign In With Google
                </Button>

            </div>
        </div>
    )
}

export default Login
