// importing "User" model
const User = require("../models/userModel");

const deleteUser = async (username) => {
    // finding and deleting a "document" with username === "username"
    const res = await User.deleteOne({ username });

    // returning response
    return res;
}

module.exports = deleteUser;