import React from 'react';
import Navbar from "../components/Navbar";
import Announcement  from  "../components/Announcement";
import styled from 'styled-components';
const Container = styled.div`

`;
const Title = styled.h2`

`;
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Filter = styled.div`

`;
const ProductList = () => {
  return (
    <Container>
        <Announcement />
        <Navbar />
        <Title>Dresses</Title>
        <FilterContainer>
            <Filter>filter1</Filter>
            <Filter>filter2</Filter>
        </FilterContainer>
    </Container>
  )
}

export default ProductList