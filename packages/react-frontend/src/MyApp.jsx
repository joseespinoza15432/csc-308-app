// src/MyApp.jsx
import React, { useState } from "react";
import Table from "./Table";

function MyApp() {
    const [characters, setCharacters] = useState([
        { name: "Charlie", job: "Janitor" },
        { name: "Mac", job: "Bouncer" },
        { name: "Dee", job: "Aspiring Actress" },
        { name: "Dennis", job: "Bartender" },
    ]);

    function removeCharacter(index) {
        const updated = characters.filter((_, i) => i !== index);
        setCharacters(updated);
    }

    return (
        <div className="container">
            <Table
                characterData={characters}
                removeCharacter={removeCharacter}
            />
        </div>
    );
}

export default MyApp;
