import mongoose from "mongoose";
import User from "./user.js";  

mongoose.set("debug", true);

function getUsers(name, job) {
    if (!name && !job) return User.find();
    if (name && !job) return User.find({ name });
    if (job && !name) return User.find({ job });
    return User.find({ name, job });
}

function getUserById(id) {
    return User.findById(id);
}

function addUser(user) {
    const newUser = new User(user);
    return newUser.save();
}

function deleteUserById(id) {
    return User.findByIdAndDelete(id);
}

export default {
    addUser,
    getUsers,
    getUserById,
    deleteUserById
};

