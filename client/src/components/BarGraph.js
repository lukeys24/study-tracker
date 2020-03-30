import React from "react";
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
        Leetcode: 3.1,
        Project: 5.5,
        Algorithms: 7.6,
        Code: 6.2
    },
    {
        name: "Tues",
        Leetcode: 2,
        Project: 3.2,
        Algorithms: 9.4,
        Code: 2.1
    },
    {
        name: "Wed",
        Leetcode: 6,
        Project: 4.3,
        Algorithms: 3.2,
        Code: 5.4
    },
    {
        name: "Thurs",
        Leetcode: 3.4,
        Project: 4.1,
        Algorithms: 1.9,
        Code: 5.3
    },
    {
        name: "Fri",
        Leetcode: 8.6,
        Project: 3.6,
        Algorithms: 2.2,
        Code: 5
    },
    {
        name: "Sat",
        Leetcode: 2,
        Project: 2.5,
        Algorithms: 1,
        Code: 5.3
    },
    {
        name: "Sun",
        Leetcode: 2,
        Project: 4.4,
        Algorithms: 3.5,
        Code: 1.3
    }
];

export default function BarGraph({ colors }) {
    console.table(colors)

    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart
                data={data}
                margin={{
                    top: 20,
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
                <Bar dataKey="Leetcode" stackId="a" fill={colors["Leetcode"]} />
                <Bar dataKey="Project" stackId="a" fill={colors["Project"]} />
                <Bar dataKey="Algorithms" stackId="a" fill={colors["Algorithms"]} />
                <Bar dataKey="Code" stackId="a" fill={colors["Code"]} />
            </BarChart>
        </ResponsiveContainer>
    );
}
