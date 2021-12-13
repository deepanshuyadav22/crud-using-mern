import { useState } from "react";

const handlePost = async (username, name, place, pincode) => {
    const res = await fetch("/users", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, name, place, pincode })
    })

    console.log(res);

    if (res.ok) alert("Data inserted successfully.");
    else alert("An error occurred.");
}

const Create = () => {
    const [username, setUsername] = useState("");
    const [name, setName] = useState("");
    const [place, setPlace] = useState("");
    const [pincode, setPincode] = useState("");

    return (
        <div>
            <input
                required
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)} />

            <input
                required
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)} />

            <input
                required
                placeholder="Place"
                value={place}
                onChange={(e) => setPlace(e.target.value)} />

            <input
                required
                placeholder="Pincode"
                value={pincode}
                onChange={(e) => Number(e.target.value) && setPincode(Number(e.target.value))} />

            <button onClick={() => handlePost(username, name, place, pincode)}>Post</button>
        </div>
    );
}

export default Create;