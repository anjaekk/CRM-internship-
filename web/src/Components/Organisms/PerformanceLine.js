import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Desk',
    Sales: 4000,
  },
  {
    name: 'Sofa',
    Sales: 1000,
  },
  {
    name: 'Bed',
    Sales: 4000,
  },
  {
    name: 'July',
    Sales: 800,
  },
  {
    name: 'October',
    Sales: 1500,
  },
];

function index() {
  return (
    <ResponsiveContainer width="100%" aspect={3}>
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="1" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="Sales"
          stroke="#8884d8"
          activeDot={{ r: 4 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default index;
