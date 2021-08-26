import React, { useState } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
// import { CommentBox } from '.';

// const data = [
//   {
//     name: 'January',
//     value: 4000,
//   },
//   {
//     name: 'March',
//     value: 3000,
//   },
//   {
//     name: 'May',
//     value: 2000,
//   },
//   {
//     name: 'August',
//     value: 2780,
//   },
//   {
//     name: 'October',
//     value: 1890,
//   },
// ];

function index({ data }) {
  return (
    <ResponsiveContainer width="100%" aspect={3}>
      <AreaChart
        width={500}
        height={200}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="1" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip
          contentStyle={{ width: '100px' }}
          labelStyle={{ fontSize: '15px' }}
        />
        <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default index;
