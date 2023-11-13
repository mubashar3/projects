import React from "react";


const DeleteChatModal = ({ delChat }) => {

    return (
        <dialog id="deleteChat_modal" className="modal">
            <div className="modal-box bg-[#1f332e]">
                <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <h3>Are you sure you want to delete chat?</h3>
                <div className='flex gap-6 mt-10'>
                    <button onClick={delChat} className="btn flex-1 text-xs bg-[#0A201E] border-none hover:bg-[#0a201ec7]">Delete</button>
                    <form method="dialog" className='flex-1 '>
                        <button className="btn w-full bg-[#0A201E] text-xs border-none hover:bg-[#0a201ec7]">Cancel</button>
                    </form>
                </div>
            </div>
        </dialog>
    )
}

export default DeleteChatModal;
