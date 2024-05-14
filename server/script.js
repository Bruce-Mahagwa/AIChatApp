const PostModel = require("./models/PostModel")
const connectDB = require("./config/db")
async function deleteMany() {
    try {
        await connectDB()
        await PostModel.deleteMany({})
    }
    catch(e) {
        console.log(e)
    }
}
deleteMany()
