import React, { useState } from "react";
import PieGraph from "./PieGraph";
import BarGraph from "./BarGraph";

export default function Graphs({ userData }) {
    return (
        <div>
            <PieGraph />
            <BarGraph />
        </div>
    );
}
