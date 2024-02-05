const { userServices } = require("../services");

const createUser = async (req, res) => {
    try {
        const reqBody = req.body;

        const userEX = await userServices.getEmailById(reqBody.email);
        if (!userEX) {
            throw new Error("this user are already crated")
        };

        const user = await userServices.createUser(reqBody);
        res.status(200).json({
            success: true,
            message: "user crated",
            data: user
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
};

const userList = async (req, res) => {
    try {
        const getUser = await userServices.userList();
        res.status(200).json({
            success: true,
            message: "user list crated!",
            data: getUser
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
};

const updateRecode = async (req, res) => {
    try {
        const userId = req.params.userId;

        const userEX = await userServices.getuserById(userId);
        if (!userEX) {
            throw new Error("user not found")
        };

        await userServices.updateRecode(userId, req.body);
        res.status(200).json({
            success: true,
            message: "user update succesfully!",
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
};

const deleteRecode = async (req, res) => {
    try {
        const userId = req.params.userId;

        const userEX = await userServices.getUserById(userId);
        if (!userEX) {
            throw new Error("user not found")
        };

        await userServices.deleteRecode(userId);
        res.status(200).json({
            success: true,
            message: "user delete succesfully!",
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
};

module.exports = {
    createUser,
    userList,
    deleteRecode,
    updateRecode
};

