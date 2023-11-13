import React from 'react';


const DeleteMessageModal = ({ delMsg }) => {


    return (
        <dialog id="deleteMessage_modal" className="modal">
            <div className="modal-box bg-[#1f332e]">
                <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <h3 className='pt-3'>Are you sure you want to delete message?</h3>
                <div className='flex gap-6 mt-10'>
                    <form method='dialog' className='flex-1'>
                        <button onClick={delMsg} className="btn text-xs bg-[#0A201E] border-none hover:bg-[#0a201ec7] w-full">Delete</button>
                    </form>
                    <form method="dialog" className='flex-1 '>
                        <button className="btn w-full bg-[#0A201E] text-xs border-none hover:bg-[#0a201ec7]">Cancel</button>
                    </form>
                </div>
            </div>
        </dialog >
    )
}

export default DeleteMessageModal;
