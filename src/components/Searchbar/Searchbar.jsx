import { useContext } from "react"

import { DataContext } from "../../context/Data"

import { Wrapper, InputField } from "./Searchbar.styled"

const Searchbar = () => {
    const { keywords, setKeywords } = useContext(DataContext)

    return (
        <Wrapper>
            <InputField
                type="text"
                name="search"
                value={keywords}
                onChange={(e)=>setKeywords(e.target.value)}
                placeholder="Search"
            />
        </Wrapper>
    )
}

export default Searchbar
