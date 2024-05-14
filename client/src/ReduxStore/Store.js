import { configureStore } from "@reduxjs/toolkit"

import ChatReducer from "./Slice"


const initialState = {
    chats: {
        chatResponse: {id: "", description: "", owner: "ai", loading: false, error: "", createdAt: ""},
        userChatMessage: {description: "", owner: "user", createdAt: ""},
        sessionChats: [],
        allChats: []
    }
}

export default configureStore({
    reducer: {
        chats: ChatReducer
    },
    preloadedState: initialState
})