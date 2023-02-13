import React from 'react';
import styled from "styled-components";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url("https://cdn.pixabay.com/photo/2020/05/26/07/43/skateboard-5221914_960_720.jpg") right;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 30%;
  padding: 20px;
  background-color: white;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 400;
`;
const Form = styled.form`
  display: flex;
  flex-direction:column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
  border: 1px solid gray;
`;
const Button = styled.button`
  width: 30%;
  background-color: purple;
  border: none;
  color: white;
  padding: 12px 15px;
  cursor: pointer;
  font-size: 13px;
  font-weight: bold;
  border-radius:5px;
  margin: 10px 0px;
`;
const Link = styled.a`
  font-size: 12px;
  text-decoration: underline;
  margin: 5px 0;
  cursor: pointer;
`;
const Login = () => {
  return (
    <Container>
    <Wrapper>
      <Title>SIGN IN</Title>
      <Form>
        <Input placeholder="username"/>
        <Input placeholder="password"/>
        <Button>LOGIN</Button>
        <Link>FORGOT PASSWORD?</Link>
        <Link>CREATE A NEW ACCOUNT</Link>
      </Form>
    </Wrapper>
  </Container>
  )
}

export default Login