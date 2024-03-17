import styled from "@emotion/styled";

const getCurrPageBtnColor = ({activePage, currentPage}) => (activePage===currentPage ? "#f4f4f4" : "#111321")
const getCurrPageBtnBgcColor = ({activePage, currentPage}) => (activePage===currentPage ? "#4440f6" : "#f4f4f4")
const getStatusCursor = ({activePage, currentPage}) => (activePage===currentPage ? "default" : "pointer")

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    margin: 0 auto;

    @media screen and (min-width: 768px) {
        flex-direction: row;
        gap: 40px;
    }

    @media screen and (min-width: 1280px) {
        padding: 60px 0;
    }
`

export const ValueWrapper = styled.ul`
    display: flex;
    justify-content: space-between;
    gap: 10px;

     @media screen and (min-width: 768px) {
        justify-content: center;
    }
`

export const Btn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2px;
    cursor: ${getStatusCursor};

    padding: 4px 6px;
    min-width: 33px;
    min-height: 33px;


    font-weight: 500; 
    font-size: 16px;
    line-height: 1.375;
    border: 1px solid #4440f6;
    color: ${getCurrPageBtnColor};
    border-radius: 4px;
    background-color: ${getCurrPageBtnBgcColor};
`
export const NavBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2px;
    cursor: pointer;

    padding: 4px 12px;
    min-width: 33px;
    min-height: 33px;


    font-weight: 500; 
    font-size: 16px;
    line-height: 1.375;
    border: 1px solid #4440f6;
    color: #111321;
    border-radius: 4px;
    background-color: #f4f4f4;
`

export const Ellipsis = styled.span`
    display: flex;
    justify-content: center;
    align-items: end;

    min-width: 15px;
    min-height: 33px;


    font-weight: 500; 
    font-size: 20px;
    border: none;
    background-color: transparent;
`