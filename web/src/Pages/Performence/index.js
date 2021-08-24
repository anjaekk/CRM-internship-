import React, { useState, useEffect, useRef } from 'react';

import Templete from './Templete/index';

function index() {
  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);
  const confettiRef = useRef(null);

  useEffect(() => {
    setHeight(confettiRef.current.clientHeight);
    setWidth(confettiRef.current.clientWidth);
  }, []);
  return <Templete confettiRef={confettiRef} width={width} height={height} />;
}

export default index;
