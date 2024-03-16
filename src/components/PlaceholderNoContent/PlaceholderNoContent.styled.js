import styled from "@emotion/styled";

export const Title = styled.h2`
    font-size: 20px;
    line-height: 1.35;

    @media screen and (min-width: 768px) {
        font-size: 40px;
        line-height: 1.375;
    }
`

export const BackgroundImage = styled.div`
    width: 246px;
    height: 198px;

    background-image: url("images/placeholder.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;

    @media screen and (min-width: 768px) {
        width: 560px;
        height: 444px;
    }

    @media screen and (min-width: 1280px) {
        width: 601px;
        height: 448px;
    }
`