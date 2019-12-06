import React from "react";

import Card from '../components/Card.js';

function Dashboard() {
  return (
    <div>
        <div className="App-content">
            <h1>Dashboard</h1>
            <div className="card-container">
                <Card
                    title="CPU Usage"
                    icon='fas fa-microchip'
                >
                    teettetete
                </Card>
                <Card
                    title="Test de lorem ipsum dolor sit amet"
                    icon='fas fa-times'
                />
                <Card>
                    test
                </Card>
            </div>
        </div>
    </div>
  );
}

export default Dashboard;
