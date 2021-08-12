import React from 'react'
import styled from 'styled-components'

// React Icon Imports
import { BiSearchAlt2 } from 'react-icons/bi'
import { BsFillPersonFill } from 'react-icons/bs'
import { IoCart } from 'react-icons/io5'
import { GiUsaFlag } from 'react-icons/gi'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'

import logo from '../assets/LE-logo.png'

const Navbar = ({ toggle }) => {
    const cartValue = 3
    

  return (
    
      <Nav>
        <DeskTopNavContainer>
          <LanguageWrapper>
            <Flag>
              <GiUsaFlag />
            </Flag>
            <span>EN</span>
          </LanguageWrapper>

          <SecondMenu>
            <li>
              {' '}
              <AiOutlineCheckCircle />{' '}
            </li>
            <li>
              {' '}
              <AiOutlineQuestionCircle />{' '}
            </li>
            <li>
              {' '}
              <GoLocation />{' '}
            </li>
            <li>
              {' '}
              <BsFillPersonFill />{' '}
            </li>
            <li>
              {' '}
              <IoCart />{' '}
            </li>
            <li> {cartValue} </li>
          </SecondMenu>
        </DeskTopNavContainer>

        <NavContainer>
          <WrapperLeft>
            <Hamburger onClick={toggle}>
              <div></div>
              <div></div>
              <div></div>
            </Hamburger>

            <LogoWrapper>
              <img className="logo" src={logo} alt="" />
            </LogoWrapper>

            <Links>
              <a href="/">SOLUTIONS</a>
              <a href="/">PRODUCTS</a>
              <a href="/">AUTOMATION</a>
              <a href="/">EDUCATION</a>
              <a href="/">RESOURCES</a>
            </Links>
          </WrapperLeft>

          <WrapperRight>
            <IconContainer>
              <li>
                {' '}
                <BiSearchAlt2 />{' '}
              </li>
              <li>
                {' '}
                <BsFillPersonFill />{' '}
              </li>
              <li>
                {' '}
                <IoCart />{' '}
              </li>
              <li> {cartValue} </li>
            </IconContainer>
          </WrapperRight>

          <SearchContainer>
            <SearchWrapper>
              <span> Search </span>
              <BiSearchAlt2 />
            </SearchWrapper>
          </SearchContainer>
        </NavContainer>
      </Nav>
  )
}

export default Navbar

const Nav = styled.nav`
  width: 100vw;
  box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.5);
`

const DeskTopNavContainer = styled.div`
  display: none;
  padding: 5px 15px;
  @media screen and (min-width: 830px) {
    display: flex;
    justify-content: space-between;
    background-color: black;
    color: white;
  }
`

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 10px;
  @media screen and (min-width: 830px) {
    padding: 10px 20px;
  }
`

const LogoWrapper = styled.div`
  margin-left: 15px;
`

const Hamburger = styled.div`
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  align-self: center;

  div {
    height: 3px;
    width: 25px;
    background: black;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media screen and (min-width: 830px) {
    display: none;
  }
`

const IconContainer = styled.ul`
  li {
    margin-left: 8px;
    font-size: 1.3rem;
  }
`

const WrapperRight = styled.div`
  display: flex;
  @media screen and (min-width: 830px) {
    display: none;
  }
`
const WrapperLeft = styled.div`
  display: flex;
`

const SecondMenu = styled.ul`
  li {
    font-size: 1.3rem;
    margin-left: 10px;
  }
`

const Links = styled.div`
margin-left: 25px;
font-weight: 600;
font-size: 16px;
  display: none;
  a {
    margin-left: 10px;
    text-decoration: none;
    color: inherit;
  }

  a:hover{
    border-bottom: 1px solid #B81830;
  }
  @media screen and (min-width: 830px) {
    display: flex;
    align-items: center;
  }
`

const SearchContainer = styled.div`
  display: none;
  @media screen and (min-width: 830px) {
    display: contents;
  }
`

const SearchWrapper = styled.div`
  @media screen and (min-width: 830px) {
    display: flex;
    align-items: center;
    svg {
      margin-left: 10px;
      font-size: 20px;
    }
  }
`

const LanguageWrapper = styled.div`
display: flex;
align-items: center;
`
const Flag = styled.div`
margin-right: 5px;
`