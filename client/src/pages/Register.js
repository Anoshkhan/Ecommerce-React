import React from 'react';
import styled from "styled-components";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url("https://cdn.pixabay.com/photo/2017/07/31/21/49/happy-2561417_960_720.jpg") center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  border-radius: 20px;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 400;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;
const Agreement = styled.span`
  font-size:15px;
  margin:20px 0px;
`;
const Button = styled.button`
  width: 30%;
  background-color: purple;
  border: none;
  color: white;
  padding: 15px 20px;
  cursor: pointer;
  font-size: 15px;
  font-weight: bold;
  border-radius:5px;
`;
const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="name"/>
          <Input placeholder="last name"/>
          <Input placeholder="username"/>
          <Input placeholder="email"/>
          <Input placeholder="password"/>
          <Input placeholder="confirm password"/>
        <Agreement>
          By creating an account, I consent to the processing of my personal data in accordance
          with the <b>Privacy Policy</b>
        </Agreement>
        <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register