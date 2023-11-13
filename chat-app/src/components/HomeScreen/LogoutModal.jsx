import React from 'react';
import { useStateValue } from '../../state/StateProvider';
import { actionTypes } from '../../state/Reducer/Reducer';

const LogoutModal = () => {
    const [, dispatch] = useStateValue();

    const logout = () => {
        localStorage.removeItem('user');
        dispatch({
            type: actionTypes.SET_USER,
            user: null,
        });
        // console.log(user)
    }
    return (
        <dialog id="my_modal_3" className="modal">
            <div className="modal-box bg-[#1f332e]">
                <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <h3>Are you sure you want to logout?</h3>
                <div className='flex gap-6 mt-10'>
                    <button onClick={logout} className="btn flex-1 text-xs bg-[#0A201E] border-none hover:bg-[#0a201ec7]">Logout</button>
                    <form method="dialog" className='flex-1 '>
                        <button className="btn w-full bg-[#0A201E] text-xs border-none hover:bg-[#0a201ec7]">Cancel</button>
                    </form>
                </div>
            </div>
        </dialog>
    )
}

export default LogoutModal;