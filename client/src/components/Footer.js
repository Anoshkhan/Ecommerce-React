import React from 'react';
import styled from 'styled-components';
import { Facebook, GitHub, Instagram, LinkedIn, Room, Phone, MailOutline } from '@material-ui/icons';
const Container = styled.div`
    display: flex;
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;
const Logo = styled.h1`

`;
const Desc = styled.p`
    margin: 20px 0;
    width: 80%;
`;
const SocialContainer = styled.div`
    display: flex;
`;
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
`;
const Center = styled.div`
    flex: 1;
    padding: 20px;
`;
const Title = styled.h3`
    margin-bottom: 30px;
`;
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;
const Right = styled.div`
    flex: 1;
`;
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;
const Payment = styled.img`
    width: 300px;
    margin-top: 0px;
`;
const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>NextLevel.</Logo>
            <Desc>A fusion of beautiful leathers, strong silhouettes, and impeccable detailing, this collection is for the people who likes to makes a bold statement in footwear.</Desc>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <Facebook />
                </SocialIcon>
                <SocialIcon color="E4405F" >
                    <Instagram/>
                </SocialIcon>
                <SocialIcon  color="000">
                    <GitHub/>
                </SocialIcon>
                <SocialIcon  color="0077B5">
                    <LinkedIn/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
            <Room style={{marginRight:"10px"}}/> 453 D, Hyderabad, Sindh
            </ContactItem>
            <ContactItem>
            <Phone style={{marginRight:"10px"}}/> +92 489 999900
            </ContactItem>
            <ContactItem>
            <MailOutline style={{marginRight:"10px"}} />contact@anoshkhan.dev
            </ContactItem>
            <Payment style={{marginTop:"-20px"}} src="https://cdn.webshopapp.com/shops/218525/files/371942398/payment-methods-epicerie-ludo.png"/>
        </Right>
    </Container>
  )
}

export default Footer