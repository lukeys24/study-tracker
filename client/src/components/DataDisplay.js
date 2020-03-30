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

    userData = [
        { name: "Leetcode", value: 17 },
        { name: "Project", value: 38 },
        { name: "Algorithms", value: 26 },
        { name: "Code", value: 38 }
    ];

    const COLORS = [
        "#2196f3",
        "#9c27b0",
        "#e91e63",
        "#ff9800",
        "#ffeb3b",
        "#009688",
        "#673ab7",
        "#cddc39",
    ];
    const dataColors = {};
    for (let i = 0; i < userData.length; i++) {
        dataColors[userData[i].name] = COLORS[i % COLORS.length];
    }

    console.table(dataColors);
    return (
        <div className='data-box'>
            <ButtonSelect onClick={(date) => handleClick(date)}/>
            <PieGraph colors={dataColors}/>
            <BarGraph colors={dataColors}/>
        </div>
    );
}
