import styled from "@emotion/styled"
import { NavLink } from "react-router-dom"

export const HeaderContainer = styled.header`
    position: relative;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 24px 0;

    border-bottom: 2px solid rgba(0, 0, 0, 0.2);

    @media screen and (min-width: 768px) {
        padding: 30px 0;
    }
`

export const Group = styled.div`
    display: flex;
    align-items: center;
    gap: 14px;

    @media screen and (min-width: 768px) {
      display: none;
    }
`

export const Btn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    border: none;
    color: inherit;
    background-color: transparent;
`

export const Navigation = styled.nav`
    display: none;
    gap: 40px;

    font-size: 16px;
    line-height: 1.375;
    font-weight: 700; 


    @media screen and (min-width: 768px) {
      display: flex;       
    }

    @media screen and (min-width: 1280px) {
      gap: 70px;
      
      font-size: 18px;
      line-height: 1.44;
    }
`

export const StyledLink = styled(NavLink)`
  position: relative;
  
  color: inherit;

  ::after {
    position: absolute;
    content: '';
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 1px;
    opacity: 0;

    border-radius: 2px;
    background-color: #4440f6;
    }

    &.active::after {
        opacity: 1;
    }
`

export const TabletGroup = styled.div`
    display: none;

    @media screen and (min-width: 768px) {
      display: flex;
      gap: 24px;
    }

    @media screen and (min-width: 1280px) {
      gap: 147px;
    }
`