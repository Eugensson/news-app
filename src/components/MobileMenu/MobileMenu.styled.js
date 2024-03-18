import styled from "@emotion/styled"

const getColor = ({theme}) => (theme==="light" ? "#111321" : "#f4f4f4");
const getBackgroundColor = ({ theme }) => (theme === "light" ? "#f4f4f4" : "#2e2e2e");

export const Wrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;

    display: flex;
    flex-direction: column;

    width: 100vw;
    height: 100vh;
    padding: 24px 0px;
    color: ${getColor};
    background-color: ${getBackgroundColor};
`

export const Group = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 68px;
    padding: 0 4px;
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

export const ThemeWrapper = styled.div`
    margin-top: auto;
    padding: 0 16px;
`