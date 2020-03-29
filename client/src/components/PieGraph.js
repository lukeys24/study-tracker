import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

export default function PieGraph({ userData }) {
    userData = [
        { name: "Leetcode", hours: 17 },
        { name: "Project", hours: 38 },
        { name: "Data Structures", hours: 26 },
    ];

    const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        percent,
        index
    }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text
                className='pie-text'
                x={x - 10}
                y={y}
                fill="white"
                textAnchor={x > cx ? "start" : "end"}
                dominantBaseline="central"
            >
                {userData[index].name}
            </text>
        );
    };

    return (
        <div>
            <ResponsiveContainer width="50%" height={400}>
                <PieChart >
                    <Pie
                        data={userData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        fill="#8884d8"
                        dataKey="hours"
                    >
                        {userData.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={COLORS[index % COLORS.length]}
                            />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}
