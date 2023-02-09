import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
    height: 30px;
    color: white;
    margin: 0px;
    background-color: purple;
    display: flex;
    align-items: center;
    justify-content: center;
    font-style: 14px;
    font-weight: 500;
    padding: 10px 0px;
    margin: -9px;
`
const Announcement = () => {
  return (
    <Container>Super Deal! Free Shipping On Order Upto Rs.2000</Container>
  )
}

export default Announcement;