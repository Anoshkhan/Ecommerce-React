import React from 'react'
import styled from 'styled-components';
import { categories } from '../data';

const Container = styled.div`
    flex: 1;
    margin: 5px;
    position: relative;
    width: 400px;
    height: 70vh;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
`;
const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const Title = styled.h1`
    color: white;
    margin-bottom: 20px;
    text-shadow: 1px 2px black;
`;
const Button = styled.button`
    border: none;
    padding: 10px 15px;
    background-color: white;
    color: gray;
    cursor: pointer;
    border-radius: 5px;
    font-weight: 600;
`;
const CategoryItem = ({item}) => {
  return (
    <Container>
        <Image src={item.img} />
        <Info>
            <Title>{item.title}</Title>
            <Button>SHOP NOW</Button>
        </Info>
    </Container>
  )
};

export default CategoryItem