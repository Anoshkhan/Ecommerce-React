import { Send } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
const Container = styled.div`
    height: 60vh;
    background-color: #f5e9e9;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 10px -10px;
`;
const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 30px;
`;
const Description = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
`;
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
`;
const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
    font-size: 17px;
`;
const Button = styled.button`
    flex: 1;
    border: none;
    background-color: purple;
    color: white;
`;

const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Description>Get timely update from your favorite products.</Description>
        <InputContainer>
            <Input placeholder="Your email"/>
            <Button>
                <Send />
            </Button>
        </InputContainer>
    </Container>
  )
};

export default Newsletter