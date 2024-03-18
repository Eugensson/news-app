import styled from "@emotion/styled"

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
`

export const VisibleList = styled.ul`
    display: flex;
    align-items: center;
    gap: 10px;
`

export const Label = styled.label`
    padding: 7px 14px;
    cursor: pointer;

    font-size: 12px;
    line-height: 1.33;
    text-transform: capitalize;
    border: 1px solid;
    border-radius: 4px;

    &.active {
        background-color: #4440f6;
    }
`

export const Select = styled.div`
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    padding: 7px 14px;

    font-size: 12px;
    line-height: 1.33;
    border: 1px solid;
    border-radius: 4px;
    cursor: pointer;
    text-transform: capitalize;
`

export const DropdownList = styled.ul`
    position: absolute;
    top: 110%;
    left: 0;
    z-index: 999;
    overflow-y: scroll;

    display: flex;
    flex-direction: column;
    gap: 12px;

    padding: 14px;
    width: 150%;
    max-height: 380px;
    cursor: default;
    border-radius: 4px;
    background-color: #f8f8f8;
`

export const DropdownLabel = styled.label`
    color: #4440f6;
    cursor: pointer;

    :hover {
        text-decoration: underline;
    }
`

export const Input = styled.input`
    appearance: none;
`