import { useContext, useState } from "react"
import { useMediaQuery } from "@react-hook/media-query"
import { IoIosArrowDown } from "react-icons/io"
import { IoIosArrowUp } from "react-icons/io"

import { DataContext } from "../../context/Data"

import {Wrapper, VisibleList, Label, Input, Select, DropdownList, DropdownLabel} from "./Categories.styled"

const Categories = () => {
    const isMobile = useMediaQuery("(max-width: 767px)")
    const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1279px)")
    const isDesktop = useMediaQuery("(min-width: 1280px)")

    const [isShowSelectList, setIsShowSelectList] = useState(false)
    const { categories, setSelectedCategory } = useContext(DataContext)
    
    let numberSeparatorCategories

    if (isMobile) {
        numberSeparatorCategories = 0;
    } else if (isTablet) {
        numberSeparatorCategories = 4;
    } else if (isDesktop) {
        numberSeparatorCategories = 6;
    }
    
    const categoriesOutSelect = categories.slice(0, numberSeparatorCategories)
    const categoriesInSelect = categories.slice(numberSeparatorCategories)

    return (
        <Wrapper>
            <VisibleList>
                {categoriesOutSelect.map((category, i) => {
                    return (
                        <li key={i}>
                            <Label onClick={() => setSelectedCategory(category)}>
                                {category}
                                <Input type="radio" name="categories" />
                            </Label>
                        </li>
                    )
                })}
            </VisibleList>
            <Select onClick={() => setIsShowSelectList(prev => !prev)}>
                <p>other</p>
                {isShowSelectList ? <IoIosArrowUp /> : <IoIosArrowDown />}
                {isShowSelectList &&
                    <DropdownList>
                        {categoriesInSelect.map((category, i) => {
                        return (
                            <li key={i}>
                                <DropdownLabel onClick={()=>setSelectedCategory(category)}>
                                    {category}
                                    <Input type="radio" name="categories" />
                                </DropdownLabel>
                            </li>
                        )
                        })}
                    </DropdownList>}
            </Select>
        </Wrapper>
    )
}

export default Categories