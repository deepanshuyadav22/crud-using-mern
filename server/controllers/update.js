// importing "User" model
const User = require("../models/userModel");

const updateUser = async ({ username, place }) => {
    // finding and updating a "document" with username === "username"
    const res = await User.updateOne({ username }, { $set: { place } });

    // returning response
    return res;
}

module.exports = updateUser;