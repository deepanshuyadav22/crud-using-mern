import { useState } from "react";

const handleDelete = async (username) => {
    const res = await fetch(`/users/${username}`, { method: "delete" })
    console.log(res);

    if (res.ok) alert("Data deleted successfully.");
    else alert("An error occurred.");
}

const Delete = () => {
    const [username, setUsername] = useState("");

    return (
        <div>
            <input
                required
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)} />

            <button onClick={() => handleDelete(username)}>Delete</button>
        </div>
    );
}

export default Delete;