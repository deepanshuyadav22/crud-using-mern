import { useState } from "react";

const handleGet = (username) => {
    fetch(`/users/${username}`)
        .then(res => res.json())

        .then(data => {
            const userDetails = JSON.parse(data);

            console.log(userDetails);

            alert(`Username: ${userDetails.username}
Name: ${userDetails.name}
Place: ${userDetails.place}
Pincode: ${userDetails.pincode}`);
        })
        
        .catch(err => {
            console.log("Error: " + err);
            alert("Error: " + err);
        });
}

const Read = () => {
    const [username, setUsername] = useState("");

    return (
        <div>
            <input
                required
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)} />

            <button onClick={() => handleGet(username)}>Get</button>
        </div>
    );
}

export default Read;