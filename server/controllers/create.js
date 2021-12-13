// importing "User" model
const User = require("../models/userModel");

const createUser = async (userDetails) => {
    // creating a new user
    const user = new User(userDetails);

    // saving the new user
    const res = await user.save();

    // returning response
    return res;
}

module.exports = createUser;