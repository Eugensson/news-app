import styled from "@emotion/styled"
import { NavLink } from "react-router-dom"

export const Wrapper = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const IconWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 32px;
    height: 32px;
    color: #f4f4f4;
    border-radius: 50%;
    border: 1px solid #f4f4f4;
    background-color: #4440f6; 
`

export const StyledLink = styled(NavLink)`
    display: flex;
    align-items: center;
    gap: 14px;

    padding: 6px 10px 6px 16px;

    color: inherit;

    &.active {
        color: #f4f4f4;
        background-color: #4440f6;
    }    
`