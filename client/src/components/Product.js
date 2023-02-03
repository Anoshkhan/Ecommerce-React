import React from 'react';
import styled from "styled-components";
import {ShoppingCartOutlined,SearchOutlined, FavoriteBorderOutlined} from "@material-ui/icons";
const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.1);
    transition: all 0.5s ease;
    cursor: pointer;
`;
const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 20;
    &:hover ${Info}{
        opacity: 1;
    }
`;
const Circle = styled.div`
    width: 220px;
    height: 220px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`;
const Image = styled.img`
    height: 80%;
    width: 80%;
    z-index: -20;
`;

const Icon = styled.div`
    width: 40px;
    height: 40px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;
    

    &:hover{
        background-color: #e9f5f5;
        transform: scale(1.1);
    }
`;
const Product = ({item}) => {
  return (
    <Container>
        <Image src={item.img} />
        <Info>
            <Icon>
                <ShoppingCartOutlined />
            </Icon>
            <Icon>
                <SearchOutlined />
            </Icon>
            <Icon>
                <FavoriteBorderOutlined />
            </Icon>
        </Info>
    </Container>
  )
}

export default Product