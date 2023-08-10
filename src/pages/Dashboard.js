import React from 'react';
import Card from './card.js';

const Dashboard = () => {
    return (
        <div>
            <Card name = {"View Customer"}/>
            <Card name = {"View Account"}/>
            <Card name = {"Add a Customer"}/>
        </div>
    )
}