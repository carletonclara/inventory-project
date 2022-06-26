import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

import Table from 'react-bootstrap/Table';

const API_HOST = "http://localhost:8080";
const INVENTORY_API_URL = `${API_HOST}/inventory`;

function Orders() {
    const [orders, setOrders] = useState([]);

    const fetchOrders = () => {
        fetch(`${INVENTORY_API_URL}/orders`)
            .then(response => response.json())
            .then(data => setOrders(data[0]));
    }
    
    useEffect(() => {
        fetchOrders();
    }, []);
    
    return (
        <div className="container">
            <h1>Orders</h1>
            <Table>
                <thead>
                <tr>
                    <th>Unit</th>
                    <th>PO/MSR</th>
                    <th>Transaction Date</th>
                    <th>Total Lines</th>
                    <th>Total Price</th>
                </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order) => (
                            <tr key={order.OrderID}>
                                <td><Link to={`/units/${order.unitName}`}>{order.unitName}</Link></td>
                                <td><Link to={`/orders/${order.POMSR}`}>{order.POMSR}</Link></td>
                                <td>{new Intl.DateTimeFormat('en-US').format(new Date(order.TransDate))}</td>
                                <td>{order.orderLines}</td>
                                <td>${order.orderTotal.toFixed(2)}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    );
}

export default Orders;