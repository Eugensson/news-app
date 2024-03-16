import styled from "@emotion/styled";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    padding: 0 12px;
    width: 140px;

    border: 1px solid;
    border-radius: 4px;

    @media screen and (min-width: 768px) {
        width: 210px;
    }

    @media screen and (min-width: 1280px) {
        width: 290px;
    }
`

export const Btn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    color: inherit;
    cursor: pointer;    
    border: none;
    background-color: transparent;
`

export const InputField = styled.input`
    padding: 3px;

    font-size: 16px;
    line-height: 1.5;
    border: none;
    outline: none;
    color: inherit;
    background-color: transparent;

    @media screen and (min-width: 768px) {
        line-height: 1.71;
    }
`