export const initalState = {
    user: null,
};

export const allUsers = {
    users: null,
}

export const allChats = {
    chats: null,
}
export const allMessages = {
    messages: null,
}


export const actionTypes = {
    SET_USER: "SET_USER",
    SET_USERS: "SET_USERS",
    SET_CHATS: "SET_CHATS",
    SET_MESSAGES: "SET_MESSAGES",
};

const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.user,
            };
        case actionTypes.SET_USERS:
            return {
                ...state,
                users: action.users,
            };
        case actionTypes.SET_CHATS:
            return {
                ...state,
                chats: action.chats,
            };
        case actionTypes.SET_MESSAGES:
            return {
                ...state,
                messages: action.messages,
            };
        default: return state;
    }
};

export default reducer;