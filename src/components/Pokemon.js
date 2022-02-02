import axios from 'axios';
import React, {useState, useEffect} from "react";

const baseURL = "https://pokeapi.co/api/v2/berry/";

export default function Pokemon() {
    const [berries, setBerries] = useState([]);
    const [url, setUrl] = useState(baseURL);

    useEffect(() => {
        axios.get(url)
            .then((response) => {
                // console.log(response.data);
                setBerries(response.data);
            });
    }, [url]);

    // console.log(berries);
    if (!berries) return [];

    const {results, next, previous} = berries;

    if (!results) return [];
    console.log('next-> ', next);
    console.log('previous-> ', previous);

    const handleNext = () => {
        console.log('handle next');

        if (next === null) {
            setUrl(url);
        } else {
            setUrl(next);
        }

    }

    const handlePrevious = () => {
        console.log('handle previous');

        if (previous === null) {
            setUrl(baseURL);
        } else {
            setUrl(previous);
        }

    }

    return (
        <div className="container">
            <div className={"row"}>
                <h1 className={"display-5 fw-bold"}>Listado </h1>
                {results.length > 0
                    ?
                    results.map(p => (
                            <h1 key={p.name}>{p.name}</h1>
                        )
                    )
                    :
                    <h1>no hay datos</h1>
                }
            </div>
            <div className={"d-grid gap-2 d-sm-flex justify-content-sm-center"}>
                    <button type={"button"} className={"btn btn-outline-primary btn-lg px-4 gap-3"}
                            onClick={() => handlePrevious()}> Previous
                    </button>
                    <button type={"button"} className={"btn btn-outline-primary btn-lg px-4"}
                            onClick={() => handleNext()}> next
                    </button>
            </div>
        </div>
    );
}