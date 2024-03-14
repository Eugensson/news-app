import styled from "@emotion/styled"

const getColor = ({theme}) => (theme==="light" ? "#111321" : "#f4f4f4");
const getBackgroundColor = ({ theme }) => (theme === "light" ? "#f4f4f4" : "#2e2e2e");

export const Wrapper = styled.section`
    margin: 0 auto;
    padding: 0 16px;
    
    width: 100%;

    color: ${getColor};
    background-color: ${getBackgroundColor};

    @media screen and (min-width: 320px) {
        width: 320px;
    }
    
    @media screen and (min-width: 768px) {
        width: 768px;
    }

    @media screen and (min-width: 1280px) {
        width: 1280px;
    }
`