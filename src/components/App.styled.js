import styled from "@emotion/styled"

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;

    padding: 25px 0;

    @media screen and (min-width: 768px) {
        gap: 60px;

        padding: 50px 0;
    }

    @media screen and (min-width: 768px) {
        gap: 80px;
    }
`