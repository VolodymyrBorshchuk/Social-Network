import React from "react";
import App from "./app";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/redux-store";
import { Provider } from "react-redux";
import { createRoot } from 'react-dom/client';

// ReactDOM.render(<SamuraiJSApp />, document.querySelector('main'))

const container = document.querySelector('main');
const root = createRoot(container);
export let rerenderEntireTree = () => {
    root.render(
        <BrowserRouter basename="/" >
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    )
}

rerenderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state)
})
