import React, {useEffect, useState} from 'react';

import { useParams, Link } from 'react-router-dom';

import Table from 'react-bootstrap/Table';

const API_HOST = "http://localhost:8080";
const INVENTORY_API_URL = `${API_HOST}/inventory`;

function OrderItems() {
    let { pomsr } = useParams();
    const [orderitems, setOrderItems] = useState([]);

    const fetchOrderItems = () => {
        fetch(`${INVENTORY_API_URL}/orders/${pomsr}`)
            .then(response => response.json())
            .then(data => setOrderItems(data[0]));
    }
    
    useEffect(() => {
        fetchOrderItems();
    }, []);
    
    return (
        <div className="container">
            <h1>{pomsr}</h1>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>PS #</th>
                    <th>REF #</th>
                    <th>Description</th>
                    <th>Quantity</th>
                    <th>UOM</th>
                    <th>Unit Price</th>
                    <th>Total Price</th>
                </tr>
                </thead>
                <tbody>
                    {
                        orderitems.map((orderitem) => (
                            <tr key={orderitem.order_item_id}>
                                <td><Link to={`/items/${orderitem.PSNum}`}>{orderitem.PSNum}</Link></td>
                                <td>{orderitem.REFNum}</td>
                                <td>{orderitem.ItemDesc}</td>
                                <td>{orderitem.Qty}</td>
                                <td>{orderitem.UOM}</td>
                                <td>${orderitem.Cost}</td>
                                <td>${(orderitem.Qty * orderitem.Cost).toFixed(2)}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    );
}

export default OrderItems;