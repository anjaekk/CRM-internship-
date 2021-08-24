import React from 'react';

// ATOMS, ORGANISMS
import { Span } from '../../../Components/Atoms';
import {
  PerformanceLine,
  PerformanceBar,
  PerformancePie,
  PerformanceCircle,
  Confetti,
} from '../../../Components/Organisms';

// STYLES
import styled from 'styled-components';

function index({ width, height, confettiRef }) {
  return (
    <Container>
      <Span size="lg">Sales Dashboard</Span>
      <FlexBox>
        <PerformanceElementTop>
          <Span size="mid" marginSize="false">
            Forecasted Revenue
          </Span>
          <p>$ 270,000</p>
        </PerformanceElementTop>
        <PerformanceElementTop>
          <Span size="mid" marginSize="false">
            Forecasted Revenue by Month
          </Span>
          <PerformanceBar />
        </PerformanceElementTop>
        <ConfettiBox ref={confettiRef}>
          <Span size="mid" marginSize="false">
            Monthly Goal
          </Span>
          <p>$ 500,000</p>
          <Confetti width={width} height={height} />
        </ConfettiBox>
      </FlexBox>
      <FlexBox>
        <PerformanceElementBottom>
          <Span size="mid" marginSize="false">
            Sales Pipeline
          </Span>
          <div>
            <PerformancePie />
            <PerformanceCircle />
          </div>
        </PerformanceElementBottom>
        <PerformanceElementBottom>
          <Span size="mid" marginSize="false">
            Actual Revenue by Year ( Deals dollar )
          </Span>
          <PerformanceLine />
        </PerformanceElementBottom>
      </FlexBox>
    </Container>
  );
}

export default index;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;
  margin-top: -2rem;
  background-color: #eee;
`;
const FlexBox = styled.div`
  ${({ theme }) => theme.flex('space-around', null, null)}
  margin: 2rem 0;
`;

const PerformanceElement = styled.div`
  width: 500px;
  height: 300px;
  background-color: #fff;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 0px 3px 0 rgb(0 0 0 / 12%);

  p {
    ${({ theme }) => theme.flex('center', 'center', null)}
    height: 100%;
    transform: translateY(-10%);
    font-size: 50px;
  }

  div {
    ${({ theme }) => theme.flex('center', 'center', 'column')}
    width: 100%;
  }
`;

const PerformanceElementTop = styled(PerformanceElement)``;

const ConfettiBox = styled(PerformanceElement)`
  position: relative;
`;

const PerformanceElementBottom = styled.div`
  width: 800px;
  height: 400px;
  background-color: #fff;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 0px 3px 0 rgb(0 0 0 / 12%);

  div {
    ${({ theme }) => theme.flex('center', 'center', null)}
    width: 100%;
  }
`;
