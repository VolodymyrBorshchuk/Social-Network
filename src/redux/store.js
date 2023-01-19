import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sideBarReducer from "./sideBar-reducer";

let store = {
    _state: {
        messagesPage: {
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
            newMessageText: "Hello"
        },
        postsPage: {
            postsData: [
                { id: "1", message: "Hello, its my 1 post", likesCount: "3" },
                { id: "2", message: "Hello, its my 2 post?", likesCount: "6" },
                { id: "3", message: "Hello, its my 3 post", likesCount: "13" },
            ],
            newPostText: "Vova",
        },
        sideBar: {}
    },
    _callSubscriber() {
        console.log("state changed")
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {

        this._state.postsPage = profileReducer(this._state.postsPage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
        this._state.sideBar = sideBarReducer(this._state.sideBar, action);

        this._callSubscriber(this._state)
    }
}





export default store;