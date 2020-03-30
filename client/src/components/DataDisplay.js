import React, { useState, useEffect } from "react";
import PieGraph from "./PieGraph";
import BarGraph from "./BarGraph";
import ButtonSelect from "./ButtonSelect";

export default function DataDisplay({ userData }) {
    const handleClick = date => {
        console.log("date = ",date)
    }

    useEffect(() => {
        console.log("use effect")
    })

    return (
        <div className='data-box'>
            <ButtonSelect onClick={(date) => handleClick(date)}/>
            <PieGraph />
            <BarGraph />
        </div>
    );
}
