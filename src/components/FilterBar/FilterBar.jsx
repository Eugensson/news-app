import { PropTypes } from "prop-types"

import Categories from "../Categories/Categories"
import CalendarWidget from "../CalendarWidget/CalendarWidget"

import { Wrapper } from "./FilterBar.styled"

const FilterBar = ({categories, selectedCategory, setSelectedCategory}) => {
    return (
        <Wrapper>
            <Categories categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
            <CalendarWidget />
        </Wrapper>
    )
}

FilterBar.propTypes = {
    categories: PropTypes.array,
    selectedCategory: PropTypes.string.isRequired,
    setSelectedCategory: PropTypes.func.isRequired,
}

export default FilterBar