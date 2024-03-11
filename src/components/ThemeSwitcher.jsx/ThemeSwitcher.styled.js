import styled from "@emotion/styled";

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;

    width: 90px;
`

export const Input = styled.input`
    position: relative;
    appearance: none;

    ::before {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        content: '';

        display: flex;
        align-items: center;
        justify-content: space-between;

        width: 40px;
        height: 20px;
        border: 1px solid;
        border-color: #4b48dB;
        border-radius: 20px;
        
        padding: 2px;
        cursor: pointer;
        background-color: transparent;
    }

    ::after {
        position: absolute;
        top: -8px;
        left: -18px;
        content: '';

        width: 16px;
        height: 16px;
        border-radius: 50%;
        background-color: #4b48dB;
    }

    &:checked::before {
        border-color: #ffffff;
        background-color: #4b48dB;           
    }

    &:checked::after {
        top: -8px;
        left: 1px;
        background-color: #ffffff;           
    }    
`


