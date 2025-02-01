import React, { useState, useEffect } from "react";
import Table from "./Table";
import Form from "./Form";

function MyApp() {
    const [characters, setCharacters] = useState([]);

    function removeCharacter(id) {
        fetch(`http://localhost:8000/users/${id}`, {
            method: "DELETE",
        })
            .then((res) => {
                if (res.status === 204) {
                    setCharacters(characters.filter((character) => character._id !== id));
                } else {
                    console.log("Failed to delete the user.");
                }
            })
            .catch((error) => console.log(error));
    }

    function updateList(person) {
        postUser(person)
            .then((res) => res.json())
            .then((newUser) => setCharacters([...characters, newUser]))
            .catch((error) => console.log(error));
    }

    function fetchUsers() {
        return fetch("http://localhost:8000/users")
            .then((res) => res.json());
    }

    useEffect(() => {
        fetchUsers()
            .then((json) => setCharacters(json))
            .catch((error) => console.log(error));
    }, []);

    function postUser(person) {
        return fetch("http://localhost:8000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(person),
        });
    }

    return (
        <div className="container">
            <Table characterData={characters} removeCharacter={removeCharacter} />
            <Form handleSubmit={updateList} />
        </div>
    );
}

export default MyApp;

