// importing "User" model
const User = require("../models/userModel");

const readUserDetails = async (username) => {
    // finding and reading a "document" with username === "username"
    const res = await User.findOne({ username });

    // returning the found "document" in form of JS object
    return res;
}

module.exports = readUserDetails;