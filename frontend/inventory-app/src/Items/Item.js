import React, {useEffect, useState} from 'react';
import { useParams, Link } from 'react-router-dom';

import Table from 'react-bootstrap/Table';

const API_HOST = "http://localhost:8080";
const INVENTORY_API_URL = `${API_HOST}/inventory`;

function Items() {
    let { psnum } = useParams();

    const [item, setItem] = useState([]);

    const fetchItem = () => {
        fetch(`${INVENTORY_API_URL}/items/${psnum}`)
            .then(response => response.json())
            .then(data => setItem(data));
    }
    
    useEffect(() => {
        fetchItem();
    }, []);
    
    return (
        <div className="container">
            <h1>{psnum}</h1>
            <p>{item.REFNum}</p>
            <p>{item.ItemDesc}</p>
            <p>${item.Cost}</p>
            <p>{item.UOM}</p>
        </div>
    );
}

export default Items;