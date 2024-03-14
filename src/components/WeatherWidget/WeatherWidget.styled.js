import styled from '@emotion/styled';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    padding: 40px 53px;
    width: 100%;
    height: 500px;
    border-radius: 4px;
    font-family: Roboto, sans-serif;
    color: #ffffff;
    background-color: #4440f6;

    @media screen and (min-width: 768px) {
        width: 353px;
    }

    @media screen and (min-width: 1280px) {
        width: 395px;
    }
`

    

    

export const WeatherWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`

export const Temperature = styled.p`
    position: relative;

    font-size: 64px;
    line-height: 1.17;
    text-align: center;

    ::after {
        position: absolute;
        right: -8px;
        content: '';

        width: 1px;
        height: 83px;

        background-color: #ffffff;
    }
`

export const Location = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;

    padding: 8px;
    border-radius: 10px;
    font-size: 20px;
    line-height: 1.15;
    color: #ffffff;
    background-color: rgba(254, 254, 255, 0.3);
`
export const ImageThumb = styled.div`
    margin: 0 auto;

    width: 220px;
    height: 220px;
`

export const Text = styled.p`
    font-size: 30px;
    line-height: 1.17;
    text-align: center;
    color: #ffffff;
`