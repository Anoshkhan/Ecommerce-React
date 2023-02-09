import React from 'react';
import styled from 'styled-components';
import {Search, ShoppingCartRounded} from "@material-ui/icons";
import { Badge } from '@material-ui/core';



const Container = styled.div`
  height: 60px;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Left = styled.div`
  flex: 1;
  display:flex;
  align-items: center;
`; 
const Language = styled.span`
  font-size: 14px;
  cursor:pointer;
`
const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  margin-left: 25px;
  padding: 5px;
`
const Input = styled.input`
  border:none; 
`;
const Center = styled.div`
  flex: 1;
`;
const Logo = styled.h1`
  font-size: 30px;
  font-weight: 600;
  text-align: center;
`
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const MenuItem = styled.div`
  font-size: 18px;
  cursor: pointer;
  margin-left: 25px;
`;
const Navbar = () => {
  return (
    <Container>
    <Wrapper>
      <Left>
        <Language>EN</Language>
        <SearchContainer>
          <Input />
          <Search  style={{color: "gray", fontSize: 16}}/>
          
        </SearchContainer>
      </Left>
      <Center>
        <Logo>Next<span style={{color:"purple"}}>Level.</span></Logo>
      </Center>
      <Right>
        <MenuItem>Register</MenuItem>
        <MenuItem>Sign In</MenuItem>
        <MenuItem>
          <Badge badgeContent={4} color="primary">
            <ShoppingCartRounded />
          </Badge>
        </MenuItem>
      
      </Right>
    </Wrapper>
    </Container>
  )
}

export default Navbar