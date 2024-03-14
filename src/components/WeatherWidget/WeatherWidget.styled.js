import styled from '@emotion/styled';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;

    padding: 23px 40px;
    width: 100%;
    border-radius: 4px;
    font-family: Roboto, sans-serif;
    color: #ffffff;
    background-color: #4440f6;
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

export const Text = styled.p`
    font-size: 30px;
    line-height: 1.17;
    text-align: center;
    color: #ffffff;
`