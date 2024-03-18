import Categories from "../Categories/Categories"
import CalendarWidget from "../CalendarWidget/CalendarWidget"

import { Wrapper } from "./FilterBar.styled"

const FilterBar = () => {
    return (
        <Wrapper>
            <Categories />
            <CalendarWidget />
        </Wrapper>
    )
}

export default FilterBar