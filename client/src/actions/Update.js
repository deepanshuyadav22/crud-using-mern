import { useState } from "react";

const handlePut = async (username, place) => {
    const res = await fetch("/users", {
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, place })
    })

    console.log(res);

    if (res.ok) alert("Data updated successfully.");
    else alert("An error occurred.");
}

const Update = () => {
    const [username, setUsername] = useState("");
    const [place, setPlace] = useState("");

    return (
        <div>
            <input
                required
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)} />

            <input
                required
                placeholder="Place"
                value={place}
                onChange={(e) => setPlace(e.target.value)} />

            <button onClick={() => handlePut(username, place)}>Put</button>
        </div>
    );
}

export default Update;