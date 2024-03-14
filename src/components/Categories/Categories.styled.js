import styled from "@emotion/styled";

export const WrapperMobile = styled.div`
    display: flex;

    @media screen and (min-width: 768px) {
        display: none;        
    }
`

export const WrapperTablet = styled.div`
    display: none;
    justify-content: center;
    align-items: center;
    gap: 14px;

    @media screen and (min-width: 768px) and (max-width: 1279px) {
        display: flex;        
    }
`

export const WrapperDesktop = styled.div`
    display: none;
    justify-content: center;
    align-items: center;
    gap: 16px;

    @media screen and (min-width: 1280px) {
        display: flex;        
    }
`

export const CustomSelect = styled.div`
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    padding: 7px 14px;
    cursor: pointer;

    font-size: 12px;
    line-height: 1.33;
    border:  1px solid;
    border-radius: 4px;
`

export const SelectedCategory = styled.p`
    text-transform: capitalize;
`

export const CategoryList = styled.ul`
    display: flex;
    align-items: center;
    gap: 14px;

    @media screen and (min-width: 1280px) {
        gap: 16px;
    }
`

export const CategoryLabel = styled.label`
    padding: 7px 14px;
    cursor: pointer;

    font-size: 12px;
    line-height: 1.33;
    text-transform: capitalize;
    border:  1px solid;
    border-radius: 4px;

`

export const DropdownCategoryList = styled.ul`
    position: absolute;
    top: 105%;
    left: 0;
    z-index: 999;

    overflow-y: scroll;

    display: flex;
    flex-direction: column;
    gap: 12px;
    
    padding: 14px;
    width: 100%;
    max-height: 380px;
    cursor: default;
    border-radius: 4px;
    color: #4440f6;
    background-color: #f8f8f8;
`

export const CategoryDropdownLabel = styled.label`
    text-transform: capitalize;
    cursor: pointer;

    :hover {
        text-decoration: underline;
    }
`

export const CategoryInput = styled.input`
    appearance: none;
`