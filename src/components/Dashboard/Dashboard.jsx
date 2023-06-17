import React from 'react';
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    Tooltip
} from "recharts";

const data = [
    {
        subject: "Assignment-1",
        myMark: 60,
        fullMark: 60
    },
    {
        subject: "Assignment-2",
        myMark: 59,
        fullMark: 60
    },
    {
        subject: "Assignment-3",
        myMark: 60,
        fullMark: 60
    },
    {
        subject: "Assignment-4",
        myMark: 60,
        fullMark: 60
    },
    {
        subject: "Assignment-5",
        myMark: 58,
        fullMark: 60
    },
    {
        subject: "Assignment-6",
        myMark: 59,
        fullMark: 60
    },
    {
        subject: "Assignment-7",
        myMark: 60,
        fullMark: 60
    },
    {
        subject: "Assignment-8",
        myMark: 60,
        fullMark: 60
    }
];

const Dashboard = () => {
    return (
        <div>
            <h2 style={{textAlign: 'center', color: 'crimson'}}>Simple Radar Chart</h2>
            <RadarChart
            cx={760}
            cy={320}
            outerRadius={250}
            width={1200}
            height={700}
            data={data}
        >
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis />
            <Radar
                name="Zubair Ahmed"
                dataKey="myMark"
                stroke="red"
                fill="tomato"
                fillOpacity={0.4}
            />
            <Tooltip></Tooltip>
            
        </RadarChart>
        
        </div>
    );
};

export default Dashboard;