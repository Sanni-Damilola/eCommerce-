import React from "react";
import styled from "styled-components";
import { HiOutlineChevronDown } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import { BsCartDash } from "react-icons/bs";
import { RxPerson } from "react-icons/rx";
import logo from "../Images/logo.png";

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Logo src={logo} />
        <Middle>
          <Span>home</Span>
          <Span>about</Span>
          <Span>service</Span>
          <Span>prouct</Span>
          <Span>
            <Icon>
              <FiSearch />
            </Icon>
            search
          </Span>
          <Span>explore</Span>
        </Middle>
        {/* <Right>
          <IconWrap>
            <FiSearch />
          </IconWrap>
          <IconWrap>
            <RxPerson />
          </IconWrap>
          <AddToCart>
            <BsCartDash />
          </AddToCart>
        </Right> */}
        <Button>get started</Button>
      </Wrapper>
    </Container>
  );
};

export default Header;

const Button = styled.div`
  width: 178px;
  height: 40px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: green;
`;

const Container = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.img`
  object-fit: cover;
  height: 40px;
`;

const Middle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Span = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-right: 23px;
  text-transform: capitalize;
  color: rgb(0, 0, 0, 0.8);
  font-weight: 500;
`;
const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3px;
  margin-right: 2px;
  color: rgb(0, 0, 0, 0.3);
`;
const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const IconWrap = styled.div`
  margin-right: 20px;
  font-size: 25px;
`;
const AddToCart = styled.div``;
