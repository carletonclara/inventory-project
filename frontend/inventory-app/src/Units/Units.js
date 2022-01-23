import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

import Table from 'react-bootstrap/Table';

const API_HOST = "http://localhost:8080";
const INVENTORY_API_URL = `${API_HOST}/inventory`;

function Units() {
    const [units, setUnits] = useState([]);

    const fetchUnits = () => {
        fetch(`${INVENTORY_API_URL}/units`)
            .then(res => res.json())
            .then(json => setUnits(json));
    }
    
    useEffect(() => {
        fetchUnits();
    }, []);

    return (
        <div className="container">
            <h1>Units</h1>
            <Table>
                <thead>
                <tr>
                    <th>Unit</th>
                    <th>Par Accuracy</th>
                    <th>No. of Items</th>
                    <th>Avg. Monthly Expenses</th>
                </tr>
                </thead>
                <tbody>
                    {
                        units.map((unit) => (
                            <tr key={unit.UnitID}>
                                <td><Link to={`/units/${unit.UnitName}`}>{unit.UnitName}</Link></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    );
}

export default Units;
