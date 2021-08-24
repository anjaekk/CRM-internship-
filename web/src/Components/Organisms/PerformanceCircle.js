import React from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data = [
  // { name: 'Group A', value: 900 },
  // { name: 'Group B', value: 300 },
  // { name: 'Group C', value: 300 },
  // { name: 'Group D', value: 200 },
  { name: 'Company A', value: 400 },
  { name: 'Company B', value: 300 },
  { name: 'Company C', value: 300 },
  { name: 'Company D', value: 200 },
  { name: 'Company E', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  console.log(`x`, x);
  console.log(`y`, y);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="text-before-edge"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

function index() {
  return (
    <ResponsiveContainer width="100%" aspect={2}>
      <PieChart width="100%" height="100%">
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}

export default index;
