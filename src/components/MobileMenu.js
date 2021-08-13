import React from 'react'
import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import { IoIosArrowForward } from 'react-icons/io'
import { BsFillQuestionCircleFill } from 'react-icons/bs'
import { MdLocationOn } from 'react-icons/md'
import { HiShieldCheck } from 'react-icons/hi'
import { GiUsaFlag } from 'react-icons/gi'

const MobileMenu = ({ isOpen, toggle }) => {
  return (
    <MenuContainer isOpen={isOpen}>
      <Menu>
        <MenuHead>
          MENU <CloseIcon onClick={toggle} />
        </MenuHead>
        <Item>
          SOLUTIONS
          <Arrow />{' '}
        </Item>
        <Item>
          PRODUCTS
          <Arrow />
        </Item>
        <Item>
          AUTOMATION
          <Arrow />
        </Item>
        <Item>
          EDUCATION
          <Arrow />
        </Item>
        <Item>
          RESOURCES
          <Arrow />
        </Item>
        <MenuBottom>
          <MenuBottomItem>
            <BsFillQuestionCircleFill />
            Help
            <Arrow />
          </MenuBottomItem>
          <MenuBottomItem>
            <MdLocationOn /> Where to Buy/Rent
          </MenuBottomItem>
          <MenuBottomItem>
            <HiShieldCheck /> Safety
          </MenuBottomItem>
          <MenuBottomItem>
            <GiUsaFlag />
            EN
          </MenuBottomItem>
        </MenuBottom>
      </Menu>
    </MenuContainer>
  )
}

export default MobileMenu

const MenuContainer = styled.div`
  font-weight: 700;
  font-size: 15px;
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #f4f4f4;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  z-index: 1;
`
const CloseIcon = styled(FaTimes)`
  color: #fff;
  font-size: 24px;
`

const MenuWrapper = styled.div`
  padding: 0 20px;
`

const Item = styled.div`
  text-transform: capitalize;
  border-bottom: 1px solid #cfcfcf;
  background-color: white;
  padding: 10px 10px;
  align-items: center;
  display: flex;
  justify-content: space-between;
`

const MenuHead = styled.div`
  background-color: black;
  color: white;
  padding: 10px 10px;
  align-items: center;
  display: flex;
  justify-content: space-between;
`

const Menu = styled.div`
  background: #f4f4f4;

  text-align: left;
  height: 100vh;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`

const Arrow = styled(IoIosArrowForward)`
  font-size: 1.5rem;
`

const MenuBottom = styled.div``
const MenuBottomItem = styled.div`
  font-size: 15px;
  padding: 15px 10px;
  display: flex;
  align-items: center;
  svg {
    margin-right: 10px;
  }
`
