import React from "react"
import {useState, useEffect} from "react"

export default function Games() {
    const [games, setGames] = useState([])

    useEffect(() => {
        async function fetchGames() {
            const res = await fetch("");
            let json = await res.json();
            json = await json.results;
            setGames(json);
        }
        fetchGames();
    }, [])

    if (!games) {
        return <h1>No hay nada que ver.</h1>
    }

    return (
        <div className="row">
            <h1>Rating games</h1>
            <hr/>
        </div>
    )
}