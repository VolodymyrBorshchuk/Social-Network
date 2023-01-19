import {render, screen} from "@testing-library/react"
import profileReducer, { addPostCreator, deletePost } from "./profile-reducer";

let state = {
    postsData: [
        { id: "1", message: "Hello, its my 1 post", likesCount: "3" },
        { id: "2", message: "Hello, its my 2 post?", likesCount: "6" },
        { id: "3", message: "Hello, its my 3 post", likesCount: "13" },
    ]
}

it("length of posts should be incremented", () => {
    //1. Test data
    let action = addPostCreator("vovan")
    
    //2. Action
    let newState = profileReducer(state, action);

    //3. Expectation
    expect(newState.postsData.length).toBe(4);
})

it("message of new post should be correct", () => {
    //1. Test data
    let action = addPostCreator("vovan")
    
    //2. Action
    let newState = profileReducer(state, action);

    //3. Expectation
    expect(newState.postsData[3].message).toBe('vovan');
})

/* it("length of messages should be decremented", () => {
    //1. Test data
    let action = deletePost(1);
    
    //2. Action
    let newState = profileReducer(state, action);

    //3. Expectation
    expect(newState.postsData.length).toBe(2);
}) */

it("length of messages should be decremented if ID is incorrect", () => {
    //1. Test data
    let action = deletePost(1000);
    
    //2. Action
    let newState = profileReducer(state, action);

    //3. Expectation
    expect(newState.postsData.length).toBe(3);
})