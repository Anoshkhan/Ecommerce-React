import React, { useState } from 'react';
import styled from "styled-components";
import {ArrowLeft, ArrowRight} from "@material-ui/icons";
import { sliderItems } from '../data';

const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    margin: 20px 0px;
    position: relative;
    overflow: hidden;

`
const Arrow = styled.div`
    height: 50px;
    width: 50px;
    background-color: lightgreen;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=> props.direction === "left" && "10px"};
    right: ${props=> props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${props => props.slideIndex* -100}vw);

`
const Slide =styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props=>props.bg};
    justify-content: center;
`
const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
`
const Image = styled.img`
    height: 80%;
    margin: 10% 10px;
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 90px 50px 60px;
`
const Title = styled.h1`
    font-size: 70px;
`
const Desc = styled.p`
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`
const Button = styled.button`
    padding: 10px 12px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover{
        transform: scale(1.1);

    }
`
const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction)=>{
        if (direction==="left"){
            setSlideIndex(slideIndex > 0 ? slideIndex -1 : 2);
        } else{
            setSlideIndex(slideIndex < 2 ? slideIndex +1 : 0);
        }
    };
  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}>
            <ArrowLeft style={{fontSize:35,}} />
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            {sliderItems.map((item)=> (
            <Slide bg={item.bg}>
                <ImgContainer>
                    <Image src={item.img}/>
                </ImgContainer>
                <InfoContainer>
                    <Title>{item.title}</Title>
                    <Desc>{item.desc}</Desc>
                    <Button>Shop Now</Button>
                </InfoContainer>
            </Slide>
            ))};
        </Wrapper>
        <Arrow direction="right" onClick={()=>handleClick("right")}>
            <ArrowRight style={{fontSize:35,}} />
        </Arrow>        

    </Container>
  )
}

export default Slider