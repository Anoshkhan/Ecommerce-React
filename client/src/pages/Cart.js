import React from 'react';
import styled from "styled-components";
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Container = styled.div``;
const Wrapper = styled.div``;
const Title = styled.h1`
  font-weight: 400;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${props=>props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) =>
    props.type === "filled" && "white"};

`;
const TopTexts = styled.div``;
const TopText = styled.span`
  text-decoration: underline;
  margin: 0px 10px;
  text-decoration: underline;
`;
const Bottom = styled.div``;

const Cart = () => {
  return (
    <Container>
        <Announcement />
        <Navbar />
        <Wrapper>
          <Title>YOUR SHOES</Title>
          <Top>
            <TopButton>CONTINUE SHOPPING</TopButton>
            <TopTexts>
              <TopText>Shoes(2)</TopText>
              <TopText>Your Wishlist(0)</TopText>
            </TopTexts>
            <TopButton type='filled'>CHECK OUT</TopButton>
          </Top>
          <Bottom></Bottom>
        </Wrapper>
        <Footer />
        
    </Container>
  )
}

export default Cart