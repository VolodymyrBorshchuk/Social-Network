const SEND_MESSAGE = "ADD-MESSAGE";
// const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
    messagesData: [
        { id: "1", message: "Hello" },
        { id: "2", message: "How are you?" },
        { id: "3", message: "im fine" },
        { id: "4", message: "Thank YOu" },
        { id: "5", message: "Lets go" },
    ],
    usersData:
        [
            { id: "1", name: "Vova", icon: "https://static.thenounproject.com/png/3319451-200.png" },
            { id: "2", name: "Liza", icon: "https://static.thenounproject.com/png/3319451-200.png" },
            { id: "3", name: "Dasha", icon: "https://static.thenounproject.com/png/3319451-200.png" },
            { id: "4", name: "Bill", icon: "https://static.thenounproject.com/png/3319451-200.png" },
            { id: "5", name: "Jack", icon: "https://static.thenounproject.com/png/3319451-200.png" },
        ],
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = action.newMessageText;
            return {
                ...state,
                messagesData: [...state.messagesData, { id: "6", message: newMessage }]
            };

        /* case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.text
            }; */

        default: return state;
    }
}

export const sendMessageCreator = (newMessageText) => ({ type: SEND_MESSAGE, newMessageText });

/* цей єкшкрієйтор більше не потрібен коли ми застосували форми */
/* export const updateNewMessageTextCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT, text: text
}) */

export default dialogsReducer;