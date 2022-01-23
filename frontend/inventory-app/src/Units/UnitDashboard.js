import React, {useEffect, useState} from 'react';
import { useParams, Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, DateTime } from 'recharts';

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
    
    useEffect(() => {
        fetchOrderLines();
        console.log(orderLines);
    }, []);

    return (
        <div className="container">
            <h1>{ unit } Dashboard</h1>
            <Container>
                
                <Row>
                    <Col>
                        <LineChart width={600} height={300} data={orderLines}>
                            <Line type="monotone" dataKey="total" stroke="#8884d8" />
                            <CartesianGrid stroke="#ccc" />
                            <XAxis valueType="date" dataKey="TransDate" />
                            <YAxis />
                        </LineChart>
                    </Col>
                    <Col>
                        <Row>
                            <Link to={`/units/${unit}/unitprofile`}><Button variant="dark">Inventory Profile</Button></Link>
                        </Row>
                        <Row>
                            <Link to={`/units/${unit}/unitusage`}><Button variant="dark">Usage</Button></Link>
                        </Row>
                        <Row>
                            <Link to={`/units/${unit}/unitorders`}><Button variant="dark">Order History</Button></Link>
                        </Row>    
                    </Col>
                </Row>
            </Container>    
        </div>
    );
}

export default UnitDashboard;