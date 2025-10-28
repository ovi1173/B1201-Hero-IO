import React from 'react';
import { BarChart, Bar, XAxis,Rectangle, YAxis,Legend ,CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const RatingChart = ({ data }) => {
    return (
        <div className='w-full flex justify-center mt-10'>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart
                    layout="vertical" 
                    data={data}
                    margin={{
                        top: 2,
                        right: 30,
                        left: 0,
                        bottom: 30,
                    }}
                >
                    <CartesianGrid stroke="#0400" strokeDasharray="2 2" />
                    <XAxis type="number" />
                    <YAxis type="category" dataKey="name" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="count" fill="#FF8811" activeBar={<Rectangle fill="none" stroke="none" />} />
                </BarChart>
            </ResponsiveContainer>
        </div>

    );
};

export default RatingChart;