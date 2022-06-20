import React, {useEffect, useState} from 'react';
import { useParams, Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, DateTime, Tooltip  } from 'recharts';

const API_HOST = "http://localhost:8080";
const INVENTORY_API_URL = `${API_HOST}/inventory`;

function UnitDashboard() {
    let { unit } = useParams();
    const [orderLines, setOrderLines] = useState([]);

    const fetchOrderLines = () => {
        fetch(`${INVENTORY_API_URL}/units/orderlines/${unit}`)
            .then(response => response.json())
            .then(data => setOrderLines(data[0]));
    }

    const formatXAxis = (tickItem) => {
        return new Date(tickItem).toLocaleDateString('en-US');
    }
    
    useEffect(() => {
        fetchOrderLines();
    }, []);

    return (
        <div className="container">
            <h1>{ unit } Dashboard</h1>
            <ButtonGroup className="mb-2" variant="dark">
                <Link to={`/units/${unit}/unitprofile`}><Button variant="dark">Inventory Profile</Button></Link>
                <Link to={`/units/${unit}/unitusage`}><Button variant="dark">Usage</Button></Link>
                <Link to={`/units/${unit}/unitorders`}><Button variant="dark">Order History</Button></Link>
            </ButtonGroup>
            <LineChart width={900} height={450} data={orderLines}>
                <Line type="monotone" dataKey="total" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" />
                <XAxis valueType="date" dataKey="TransDate" tickFormatter={formatXAxis}/>
                <YAxis />
                <Tooltip />
            </LineChart>
        </div>
    );
}

export default UnitDashboard;