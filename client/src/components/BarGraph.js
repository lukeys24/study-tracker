import React, { PureComponent } from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from "recharts";

const data = [
    {
        name: "Mon",
        hours: 2
    },
    {
        name: "Tues",
        hours: 4
    },
    {
        name: "Wed",
        hours: 7
    },
    {
        name: "Thurs",
        hours: 2
    },
    {
        name: "Fri",
        hours: 10
    },
    {
        name: "Sat",
        hours: 6
    },
    {
        name: "Sun",
        hours: 8
    }
];

export default function Example() {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis width={30} />
                <Tooltip />
                <Legend />
                <Bar dataKey="hours" fill="#8884d8" />
            </BarChart>
        </ResponsiveContainer>
    );
}
