import styled from "@emotion/styled"

export const SearchDate = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    gap: 18px;

    padding: 6px 12px;
    font-size: 12px;
    line-height: 1.75;
    border: 1px solid;
    border-radius: 4px;

    cursor: pointer;
`

export const DropdownCalendar = styled.div`
    position: absolute;
    top: 104%;
    right: 0;
    z-index: 999;
`