import styled from '@emotion/styled';

export const Wrapper = styled.article`
    position: relative;

    display: flex;
    flex-direction: column;
    gap: 20px;

    width: 100%;
`

export const Placeholder = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    background-color: rgba(244, 244, 244, 0.4;
`

export const Thumb = styled.div`
    position: relative;

    width: 100%;
    height: auto;
    padding-top: 80%;

    background-image: url("images/Placeholder.jpg");
    background-position: center;
    background-size: cover;

    overflow: hidden;
    border-radius: 4px;
`

export const ImageNews = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const Category = styled.p`
    position: absolute;
    top: 12px;
    left: 0;

    padding: 4px 8px;
    font-size: 12px;
    line-height: 1.333;
    font-weight: 500;
    color: #ffffff;
    background-color: rgba(68, 64, 246, 0.7);
`

export const MarkerRead = styled.p`
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 1;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 14px;
    font-weight: 700;
    line-height: 1.36;
    color: #00dd73;
`

export const Btn = styled.button`
    position: absolute;
    bottom: 12px;
    right: 12px;
    z-index: 1;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3px;

    cursor: pointer;
    padding: 6px 12px;
    font-family: inherit;
    font-size: 12px;
    font-weight: 500;
    border: 1px solid transparent;
    border-radius: 20px;
`

export const Title = styled.h2`
    width: 100%;

    font-size: 20px;
    line-height: 1.333;
    font-weight: 700;

    @media screen and (min-width: 768px) {
        font-size: 26px;
        line-height: 1.375;
    }
`

export const Descriptions = styled.div`
    font-size: 14px;
    line-height: 1.357;

    @media screen and (min-width: 768px) {
        font-size: 16px;
        line-height: 1.375;
    }
`

export const Group = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: auto;
`

export const Date = styled.time`
    font-size: 14px;
    line-height: 1.357;
    color: #a8a8a8;

    @media screen and (min-width: 768px) {
        font-size: 16px;
        line-height: 1.375;
    }
`

export const LinkToArticle = styled.a`
    margin-right: 26px;

    font-size: 14px;
    line-height: 1.357;
    color: #4440f6;

    @media screen and (min-width: 768px) {
        font-size: 16px;
        line-height: 1.375;
    }
`