import React, {useEffect, useState} from 'react';

import { useParams } from 'react-router-dom';

import Table from 'react-bootstrap/Table';

const API_HOST = "http://localhost:8080";
const INVENTORY_API_URL = `${API_HOST}/inventory`;

function UnitUsage() {
    let { unit } = useParams();
    const [usage, setUsage] = useState([]);

    const fetchUsage = () => {
        fetch(`${INVENTORY_API_URL}/units/usage/${unit}`)
            .then(response => response.json())
            .then(data => setUsage(data[0]));
    }
    
    useEffect(() => {
        fetchUsage();
        console.log(usage);
    }, []);

    return (
        <div className="container">
            <h1>{ unit } Usage</h1>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>PS #</th>
                    <th>Current Par</th>
                    <th>3 Day Avg</th>
                </tr>
                </thead>
                <tbody>
                    {
                        usage.map((item) => (
                            <tr key={item.unit_item_id}>
                                <td>{item.psnum}</td>
                                <td>{item.par}</td>
                                <td>{item.three_day_avg}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    );
}

export default UnitUsage;