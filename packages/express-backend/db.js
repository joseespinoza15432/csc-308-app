import mongoose from "mongoose";

const mongoURI = "mongodb://localhost:27017/users"; 

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.error("MongoDB connection error:", err));

export default mongoose;

