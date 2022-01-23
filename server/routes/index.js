const express = require('express');
const db = require('../db');

const router = express.Router();

router.get('/items', async (req, res, next) => {
    try {
        let results = await db.allItems();
        res.json(results);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/items/:id', async (req, res, next) => {
    try {
        let results = await db.itemByPSNum(req.params.id);
        res.json(results);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/units', async (req, res, next) => {
    try {
        let results = await db.allUnits();
        res.json(results);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/units/:id', async (req, res, next) => {
    try {
        let results = await db.unitInventoryProfile(req.params.id);
        res.json(results);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/units/orderlines/:id', async (req, res, next) => {
    try {
        let results = await db.unitOrderLines(req.params.id);
        res.json(results);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/units/orders/:id', async (req, res, next) => {
    try {
        let results = await db.unitOrders(req.params.id);
        res.json(results);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/units/usage/:id', async (req, res, next) => {
    try {
        let results = await db.unitUsage(req.params.id);
        res.json(results);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/orders', async (req, res, next) => {
    try {
        let results = await db.allOrders();
        res.json(results);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/orders/:id', async (req, res, next) => {
    try {
        let results = await db.orderByPOMSR(req.params.id);
        res.json(results);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

module.exports = router;