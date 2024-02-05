const { user } = require("../models");


const createUser = async (reqbody) => {
    return user.create(reqbody);
};

const userList = (req, res) => {
    return user.find()
        .populate("admin");
};

const deleteRecode = async (userId) => {
    return user.findByIdAndDelete(userId);
};

const updateRecode = async (userId, updateBody) => {
    return user.findByIdAndUpdate(userId, { $set: updateBody });
};

const getuserById = async (userId) => {
    return user.findById(userId);
};

module.exports = {
    createUser,
    userList,
    deleteRecode,
    updateRecode,
    getuserById
};