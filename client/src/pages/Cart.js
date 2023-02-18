import React from 'react';
import styled from "styled-components";
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Add, Remove } from '@material-ui/icons';


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
  margin: 20px 0px 30px 0px;
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
  display: flex;
  flex: 2;
`;
const Image = styled.img`
  width: 300px;
  padding: 20px;
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 20px;
  justify-content: center;
`;
const ProductName = styled.span`
  padding: 5px;
`;
const ProductId = styled.span`
  padding: 5px;
`;
const ProductColor = styled.span`
  width: 20px;
  height: 20px;
  border-radius:50%;
  background-color: ${props=>props.color};
  margin: 5px;
`;
const ProductSize = styled.span`
  padding: 5px;
`;
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ProductPriceContainer = styled.div`
  display: flex;
  align-items: center;
`;
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;
const ProductPrice = styled.div`
  font-size: 28px;
  font-weight: bold;
`;
const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;
const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  padding: 20px;
  height: 50vh;
  border-radius: 10px;
`;
const SummaryTitle = styled.h1`
  font-weight: 300;
`;
const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${props=>props.type === "total" && "500"};
  font-size: ${props=>props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span`
`;
const SummaryItemPrice = styled.span`
`;
const SummaryButton = styled.button`
 width: 100%;
 padding: 10px;
 background-color:black;
 color: white;
 font-weight: 600;
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
                      <ProductColor color='pink'/>
                      <ProductSize><b>Size: </b>38</ProductSize>
                    </Details>
                </ProductDetail>
                <PriceDetail>
                    <ProductPriceContainer>
                    <Remove/>
                      <ProductAmount>2</ProductAmount>
                      <Add/>
                    </ProductPriceContainer>
                    <ProductPrice>Rs: 4,800</ProductPrice>
                </PriceDetail>
              </Product>
              <Hr/>
              <Product>
                <ProductDetail>
                    <Image src='https://cdn.shopify.com/s/files/1/0371/5416/0772/products/1_dee5c42f-b2ba-40db-8264-ef1110a65da3_360x.jpg?v=1676628064'/>
                    <Details>
                      <ProductName><b>Product: </b>THUNDER SHOES</ProductName>
                      <ProductId><b>Id: </b>40395980</ProductId>
                      <ProductColor color='brown'/>
                      <ProductSize><b>Size: </b>42/8</ProductSize>
                    </Details>
                </ProductDetail>
                <PriceDetail>
                    <ProductPriceContainer> 
                      <Remove/>
                      <ProductAmount>1</ProductAmount>
                      <Add/>
                    </ProductPriceContainer>
                    <ProductPrice>Rs: 3,999</ProductPrice>
                </PriceDetail>
              </Product>
            </Info>
            <Summary>
                <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                <SummaryItem>
                  <SummaryItemText>Sub Total</SummaryItemText>
                  <SummaryItemPrice> Rs: 13,599</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                  <SummaryItemText>Estimated Shipping</SummaryItemText>
                  <SummaryItemPrice> Rs: 299</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem type="total">
                  <SummaryItemText>Total</SummaryItemText>
                  <SummaryItemPrice> Rs: 13,898</SummaryItemPrice>
                </SummaryItem>
                <SummaryButton>CHECKOUT NOW</SummaryButton>
            </Summary>
          </Bottom>
        </Wrapper>
        <Footer />
        
    </Container>
  )
}

export default Cart