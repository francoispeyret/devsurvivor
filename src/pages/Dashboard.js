import React from "react";

import Card from '../components/Card.js';

function Dashboard() {
  return (
    <div>
        <div className="App-content">
            <h1>Dashboard</h1>
            <div className="card-container">
                <Card
                    icon='fas fa-microchip'
                />
                <Card>

                </Card>
            </div>
        </div>
    </div>
  );
}

export default Dashboard;
