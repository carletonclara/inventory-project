const dotenv = require('dotenv').config();
const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: process.env.DB_CONLIMIT,
    password: process.env.DB_PASSWORD,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT
})

let inventorydb = {};

inventorydb.allItems = () => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM items ORDER BY PSNum`, (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });
};

inventorydb.itemByPSNum = (psnum) => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM items WHERE PSNum = ?`, [psnum], (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results[0]);
        });
    });
};

inventorydb.allUnits = () => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM units`, (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });
};

inventorydb.unitInventoryProfile = (unit) => {
    return new Promise((resolve, reject) => {
        pool.query(`CALL select_unit_inventory_profile(?)`, [unit], (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });
};

inventorydb.unitOrderLines = (unit) => {
    return new Promise((resolve, reject) => {
        pool.query(`CALL select_order_counts_by_unit(?)`, [unit], (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });
};

inventorydb.unitOrders = (unit) => {
    return new Promise((resolve, reject) => {
        pool.query(`CALL select_orders_by_unit(?)`, [unit], (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });
};

inventorydb.unitUsage = (unit) => {
    return new Promise((resolve, reject) => {
        pool.query(`CALL unit_usage(?)`, [unit], (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });
};

inventorydb.allOrders = () => {
    return new Promise((resolve, reject) => {
        pool.query(`CALL select_all_orders()`, (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });
};

inventorydb.orderByPOMSR = (pomsr) => {
    return new Promise((resolve, reject) => {
        pool.query(`CALL select_items_by_order(?)`, [pomsr], (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });
};

module.exports = inventorydb;