import { createSlice } from '@reduxjs/toolkit';
import { sendChat, saveUserMessagesToDb} from './Actions';

const initialState = {
    chatResponse: {id: "", description: "", owner: "ai", loading: false, error: "", createdAt: ""},
    userChatMessage: {description: "", owner: "user", createdAt: ""},
    sessionChats: [],
    allChats: []
}
 
const ChatSlice = createSlice({
    name: "chat",
    initialState: initialState,
    reducers: {
        saveUserMessage(state, action) {
            const message = action.payload;
            if (!message) {
                return;
            }
            state.userChatMessage.description = message;
            const date = new Date().toString()
            state.userChatMessage.createdAt = date;
            // add chat to session chats
            state.sessionChats.push(state.userChatMessage);
            },
        clearUserMessage(state) {
            // clear user chat
            state.userChatMessage =  {description: "", owner: "user", createdAt: ""}
        },
        clearAIMessage(state) {
            // clear chat response
            state.chatResponse = {id: "", description: "", owner: "ai", loading: false, error: "", createdAt: ""}
        },
        fetchAllChats(state, action) {
            const chats = action.payload;
            state.sessionChats = chats;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(sendChat.fulfilled, (state, action) => {
            const data = action.payload;
            if (Array.isArray(data)) {
                state.chatResponse.error = data[0]
                return;
            }
            state.chatResponse.id = data.id
            state.chatResponse.description = data.data?.[0]?.message?.content
            state.chatResponse.loading = false;
            const date = new Date().toString()
            state.chatResponse.createdAt = date;
            // add chat response to session chats
            state.sessionChats.push(state.chatResponse)
            }).addCase(sendChat.pending, (state) => {
            state.chatResponse.loading = true;
        })
    }
})

export default ChatSlice.reducer;
export const {saveUserMessage, clearAIMessage, clearUserMessage, fetchAllChats} = ChatSlice.actions;