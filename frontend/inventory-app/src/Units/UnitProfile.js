import React, {useEffect, useState} from 'react';

import { useParams } from 'react-router-dom';

import Table from 'react-bootstrap/Table';

const API_HOST = "http://localhost:8080";
const INVENTORY_API_URL = `${API_HOST}/inventory`;

function UnitProfile() {
    let { unit } = useParams();
    const [inventory, setInventory] = useState([]);

    const fetchInventory = () => {
        fetch(`${INVENTORY_API_URL}/units/${unit}`)
            .then(response => response.json())
            .then(data => setInventory(data[0]));
    }
    
    useEffect(() => {
        fetchInventory();
    }, []);


    return (
        <div className="container">
            <h1>{unit} Inventory Table</h1>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>PS #</th>
                    <th>REF #</th>
                    <th>Description</th>
                    <th>Unit Price</th>
                    <th>UOM</th>
                    <th>Par</th>
                </tr>
                </thead>
                <tbody>
                    {
                        inventory.map((item) => (
                            <tr key={item.unit_item_id}>
                                <td>{item.PSNum}</td>
                                <td>{item.REFNum}</td>
                                <td>{item.ItemDesc}</td>
                                <td>${item.Cost}</td>
                                <td>{item.UOM}</td>
                                <td>{item.Par}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    );
}

export default UnitProfile;
