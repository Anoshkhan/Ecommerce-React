import React from 'react';
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from '../components/Footer';
import { Add, Remove } from '@material-ui/icons';
const Container = styled.div`

`;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px 50px;
`;
const Title = styled.h1`

`;
const Desc = styled.p`
  padding: 20px 30px 0px 0px;
`;
const Price = styled.h3`
`;
const FilterContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;

`;
const Filter = styled.div`
  margin: 30px 0px;
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  font-size: 18px;
  font-weight: 300;
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props=>props.color};
  margin: 0px 5px;
  cursor: pointer;
`;
const FilterSize = styled.select`
  padding: 5px;
  margin-left: 10px;
`;
const FilterSizeOption = styled.option`
`;
const  AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const  AmountContainer= styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border: 1px solid purple;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
  
`;
const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  font-weight: bold;
  cursor: pointer;
  &:hover{
    background-color: #f8f4f4;
  }
`;
const Product = () => {
  return (
    <Container>
        <Announcement />
        <Navbar />
        <Wrapper>
          <ImageContainer>
            <Image src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"/>
          </ImageContainer>
          <InfoContainer>
            <Title>Editorial Fashion Shoes</Title>
            <Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</Desc>
            <Price>$20</Price>
            <FilterContainer>
              <Filter>
                <FilterTitle>Color</FilterTitle>
                <FilterColor color="pink"/>
                <FilterColor color="lightgreen"/>
                <FilterColor color="lightblue"/> 
              </Filter>
              <Filter>
                <FilterTitle>Size</FilterTitle>
                <FilterSize>
                  <FilterSizeOption>32</FilterSizeOption>
                  <FilterSizeOption>34</FilterSizeOption>
                  <FilterSizeOption>36</FilterSizeOption>
                  <FilterSizeOption>38</FilterSizeOption>
                  <FilterSizeOption>40</FilterSizeOption>
                </FilterSize>
              </Filter>
            </FilterContainer>
            <AddContainer>
              <AmountContainer>
                <Remove />
                <Amount>1</Amount>
                <Add />
              </AmountContainer>
              <Button>Add To Cart</Button>
            </AddContainer>
          </InfoContainer>
        </Wrapper>
        <Newsletter />
        <Footer />
        
    </Container>
    
  )
}

export default Product