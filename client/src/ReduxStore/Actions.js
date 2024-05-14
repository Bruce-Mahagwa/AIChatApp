import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

export const sendChat = createAsyncThunk(
    "chats/sendChats", 
    async (message, {rejectWithValue}) => {
        try {
            const KEY = process.env.REACT_KEY
<<<<<<< HEAD
=======
            console.log("React,key", KEY)
>>>>>>> ebc09e48d578ee2294553ae01529261c99d4d393
            // validate data
            if  (!message || !message.trim()) {
                return ["please send a message", "please send a message"]
            }
            const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "model": "gryphe/mythomist-7b:free",
                "messages": [
                    {"role": "user", "content": message},
                ],
            })
            })
            const chat = await response.json()
            // dispatch an action to the database where the chat will be saved
            // save message to db
            await axios.post("/posts/save-message", {message: {
                description: message,
                postedAt: new Date().toString(),
                owner: "user"
            }
            })
            // save ai chat to db
            await axios.post("/posts/save-message", {message: {
                        description: chat.choices[0].message.content,
                        postedAt: new Date().toString(),
                        owner: "ai"                
                    }
            })
            return {
                id: chat.id, 
                data: chat.choices
            };
        }
        catch(e) {
            return rejectWithValue("Cannot fetch chat from AI model")
        }
    }
)

