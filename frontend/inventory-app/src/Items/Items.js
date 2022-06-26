import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

import Table from 'react-bootstrap/Table';

const API_HOST = "http://localhost:8080";
const INVENTORY_API_URL = `${API_HOST}/inventory`;

function Items() {
    const [items, setItems] = useState([]);

    const fetchItems = () => {
        fetch(`${INVENTORY_API_URL}/items`)
            .then(response => response.json())
            .then(data => setItems(data));
    }
    
    useEffect(() => {
        fetchItems();
    }, []);
    
    return (
        <div className="container">
            <h1>Items</h1>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>PS #</th>
                    <th>REF #</th>
                    <th>Description</th>
                    <th>Unit Price</th>
                    <th>UOM</th>
                </tr>
                </thead>
                <tbody>
                    {
                        items.map((item) => (
                            <tr key={item.itemID}>
                                <td><Link to={`/items/${item.PSNum}`}>{item.PSNum}</Link></td>
                                <td>{item.REFNum}</td>
                                <td>{item.ItemDesc}</td>
                                <td>${item.Cost}</td>
                                <td>{item.UOM}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    );
}

export default Items;