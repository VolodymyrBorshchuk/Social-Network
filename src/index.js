import React from "react";
import App from "./app";
import { HashRouter } from "react-router-dom";
import store from "./redux/redux-store";
import { Provider } from "react-redux";

import { createRoot } from 'react-dom/client';
const container = document.querySelector('main');
const root = createRoot(container);
export let rerenderEntireTree = () => {
    root.render(
        <HashRouter >
            <Provider store={store}>
                <App />
            </Provider>
        </HashRouter>
    )
}

/* export let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>, document.querySelector('main')
    )
} */

rerenderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state)
})