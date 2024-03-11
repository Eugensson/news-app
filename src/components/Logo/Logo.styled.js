import styled from "@emotion/styled"
import { Link } from "react-router-dom"

export const Logotype = styled(Link)`
    cursor: pointer;

    font-size: 24px;
    font-weight: 700;
    line-height: 1.375;
    color: inherit;
   
    @media screen and (min-width: 768px) {
        font-size: 32px;
    }

    @media screen and (min-width: 1280px) {
        font-size: 42px;
    }
`