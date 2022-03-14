import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from './NavigationBar';
import Home from './Home';
import Units from './Units/Units';
import UnitDashboard from './Units/UnitDashboard';
import UnitProfile from './Units/UnitProfile';
import UnitOrders from './Units/UnitOrders';
import UnitUsage from './Units/UnitUsage';
import Items from './Items/Items';

import Error from './Error'

function App() {

    return (
        <Router>
          <Nav></Nav>
          <Routes>
            <Route path ="/" element={ <Home />}/>
            <Route path ="/units" exact element={ <Units />}/>
            <Route path ="/units/:unit" element={ <UnitDashboard />}/>
            <Route path ="/units/:unit/unitprofile" element={ <UnitProfile />}/>
            <Route path ="/units/:unit/unitorders" element={ <UnitOrders />}/>
            <Route path ="/units/:unit/unitusage" element={ <UnitUsage />}/>
            <Route path ="/items" exact element={ <Items />}/>
            <Route path ="*" element={ <Error />}/>
          </Routes>
        </Router>
    );
}

export default App;
