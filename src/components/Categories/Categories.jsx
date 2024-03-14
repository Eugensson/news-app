import { useState } from "react"
import { PropTypes } from "prop-types"
import { IconContext } from "react-icons"
import { IoIosArrowDown } from "react-icons/io"
import { IoIosArrowUp } from "react-icons/io"

import {WrapperMobile, WrapperTablet, WrapperDesktop, CustomSelect, CategoryList, CategoryLabel, SelectedCategory, DropdownCategoryList, CategoryDropdownLabel, CategoryInput} from "./Categories.styled"

const Categories = ({ categories, selectedCategory, setSelectedCategory }) => {
    
    const [showList, setShowList] = useState(false)

    const toggleDropdown = () => setShowList((prev) => (prev === false ? true : false))

    return (
        <>
            <WrapperMobile>
                <CustomSelect onClick={toggleDropdown}>
                    <SelectedCategory>
                        {selectedCategory === "All" ? "Categories" : selectedCategory}
                    </SelectedCategory>
                    <IconContext.Provider value={{ size: '14px' }}>
                        {showList ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </IconContext.Provider>
                    {showList &&
                        <DropdownCategoryList>
                            {categories.map(
                                (category, index) => {
                                    return (
                                        <li key={index}>
                                            <CategoryDropdownLabel onClick={()=>setSelectedCategory(category)}>
                                                {category}
                                                <CategoryInput type="radio" name="categories"/>
                                            </CategoryDropdownLabel>
                                        </li>
                                    )
                                }
                            )}
                        </DropdownCategoryList>
                    }
                </CustomSelect>
            </WrapperMobile>
            
            <WrapperTablet>
                <CategoryList>
                    {categories.map((category, index) => {
                        if(index > 3) { return }
                            
                        return <li key={index}>
                            <CategoryLabel onClick={() => setSelectedCategory(category)}>
                                {category}
                                <CategoryInput type="radio" name="categories" />
                            </CategoryLabel>                            
                        </li>
                    })}
                    <CustomSelect onClick={toggleDropdown}>
                    <SelectedCategory>Others</SelectedCategory>
                    <IconContext.Provider value={{ size: '14px' }}>
                        {showList ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </IconContext.Provider>
                    {showList &&
                        <DropdownCategoryList>
                            {categories.map(
                                (category, index) => {
                                    if (index < 4) { return }

                                    return (
                                        <li key={index}>
                                            <CategoryDropdownLabel onClick={()=>setSelectedCategory(category)}>
                                                {category}
                                                <CategoryInput type="radio" name="categories"/>
                                            </CategoryDropdownLabel>
                                        </li>
                                    )
                                }
                            )}
                        </DropdownCategoryList>
                    }
                    </CustomSelect>
                </CategoryList>
                
            </WrapperTablet>

            <WrapperDesktop>
                <CategoryList>
                    {categories.map((category, index) => {
                        if(index > 5) { return }
                            
                        return <li key={index}>
                            <CategoryLabel onClick={() => setSelectedCategory(category)}>
                                {category}
                                <CategoryInput type="radio" name="categories"/>
                            </CategoryLabel>                            
                        </li>
                    })}
                    <CustomSelect onClick={toggleDropdown}>
                    <SelectedCategory>Others</SelectedCategory>
                    <IconContext.Provider value={{ size: '14px' }}>
                        {showList ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </IconContext.Provider>
                    {showList &&
                        <DropdownCategoryList>
                            {categories.map(
                                (category, index) => {
                                    if (index < 6) { return }

                                    return (
                                        <li key={index}>
                                            <CategoryDropdownLabel onClick={()=>setSelectedCategory(category)}>
                                                {category}
                                                <CategoryInput type="radio" name="categories"/>
                                            </CategoryDropdownLabel>
                                        </li>
                                    )
                                }
                            )}
                        </DropdownCategoryList>
                    }
                    </CustomSelect>
                </CategoryList>                
            </WrapperDesktop>
        </>
        
    )
}

Categories.propTypes = {
    categories: PropTypes.array,
    selectedCategory: PropTypes.string.isRequired,
    setSelectedCategory: PropTypes.func.isRequired,
}

export default Categories



            
