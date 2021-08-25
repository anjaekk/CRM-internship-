import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

import Templete from './Templete/index';

import { PERFORMANCE_URL } from '../../config';

function index() {
  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);
  const confettiRef = useRef(null);
  const [monthData, setMonthData] = useState([]);

  useEffect(() => {
    setHeight(confettiRef.current.clientHeight);
    setWidth(confettiRef.current.clientWidth);
  }, []);

  // useEffect(() => {
  //   handleFetch();
  // }, []);

  function sliceData(data) {
    data.map(el => {
      let a = el.value.toString().slice(0, 4);
      setMonthData([{ name: el.name, value: Number(a) }]);
    });
  }

  // const handleFetch = async () => {
  //   try {
  //     const token = localStorage.getItem('token');
  //     const config = {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //         'Content-Type': 'application/json',
  //       },
  //     };
  //     const response = await axios.get(`${PERFORMANCE_URL}`, config);
  //     if (response) {
  //       sliceData(response.data);
  //     }
  //   } catch (err) {
  //     console.log(`err.response.status`, err.response.status);
  //   }
  // };
  // console.log(`monthData`, monthData);
  return (
    <Templete
      // monthData={monthData}
      confettiRef={confettiRef}
      width={width}
      height={height}
    />
  );
}

export default index;
