import styled from "@emotion/styled";

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;

    @media screen and (min-width: 768px) {
        flex-direction: row;
        gap: 28px;
    }
    
    @media screen and (min-width: 1280px) {
        gap: 30px;
    }
`

export const Item = styled.li`
    width: 100%;

    @media screen and (min-width: 768px) {
        width: calc((100% - 28px)/2);    
    }

    @media screen and (min-width: 1280px) {        
        width: calc((100% - 2*30px)/3);
    }
` 