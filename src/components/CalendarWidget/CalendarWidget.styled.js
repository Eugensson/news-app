import styled from "@emotion/styled"

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
`

export const Description = styled.p`
    display: none;

    margin-right: 20px;

    font-size: 14px;
    font-weight: 700;
    line-height: 1.39;

    @media screen and (min-width: 768px) {
        display: block;        
    }

    @media screen and (min-width: 1280px) {
        margin-right: 40px;
        
        font-size: 18px;
    }
`

export const SearchDate = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    gap: 18px;

    padding: 0 14px;
    font-size: 12px;
    line-height: 1.2;
    border: 1px solid;
    border-radius: 4px;    
`

export const ArrowGroup = styled.div`
    display: flex;
    align-items: center;

    padding: 7px 0;
    cursor: pointer;
`

export const DropdownCalendar = styled.div`
    position: absolute;
    top: 105%;
    right: 0;
    z-index: 999;

    width: 204%;
    border-radius: 4px;

`