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
  padding: 10px 15px;
  font-weight: 600;
  cursor: pointer;
  border: ${props=>props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) =>
    props.type === "filled" && "white"};
  margin: 0px 10px ;

`;
const TopTexts = styled.div``;
const TopText = styled.span`
  text-decoration: underline;
  margin: 0px 10px;
  text-decoration: underline;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Info = styled.div`
  flex: 3;
  
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ProductDetail = styled.div`
  flex: 2;
`;
const Image = styled.img`
  width: 200px;
`;
const Details = styled.div`
  
`;
const ProductName = styled.span`
  
`;
const ProductId = styled.span`
  
`;
const ProductColor = styled.span`
  
`;
const ProductSize = styled.span`
  
`;
const PriceDetail = styled.div`
  flex: 1;
`;
const Summary = styled.div`
  flex: 1;
`;

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
            <TopButton type='filled'>CHECKOUT NOW</TopButton>
          </Top>
          <Bottom>
            <Info>
              <Product>
                <ProductDetail>
                    <Image src='https://i0.wp.com/footwearmenders.com/wp-content/uploads/2022/09/img_3778.jpeg?fit=1284%2C1260&ssl=1'/>
                    <Details>
                      <ProductName><b>Product: </b>THUNDER SHOES</ProductName>
                      <ProductId><b>Id: </b>40395980</ProductId>
                      <ProductColor/>
                      <ProductSize><b>Size: </b>38</ProductSize>
                    </Details>
                </ProductDetail>
                <PriceDetail>
                    price
                </PriceDetail>
              </Product>
            </Info>
            <Summary>
                Summary
            </Summary>
          </Bottom>
        </Wrapper>
        <Footer />
        
    </Container>
  )
}

export default Cart