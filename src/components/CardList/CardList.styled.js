import styled from "@emotion/styled";

export const Wrapper = styled.ul`
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