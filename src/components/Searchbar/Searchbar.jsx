import { useState } from "react"
import { PropTypes } from "prop-types"
import { IconContext } from "react-icons"
import { IoIosSearch } from "react-icons/io"

import {Wrapper, Btn, InputField} from "./Searchbar.styled"

const Searchbar = ({onSubmit}) => {
    const [query, setQuery] = useState('')

    const handleNameChange = e => { setQuery(e.target.value) }
    
    const resetForm = () => {setQuery("")}

    const handleSubmit = e => {
        e.preventDefault()

        if (query.trim() === "") {return}       

        onSubmit(query.trim().toLowerCase())

        resetForm()
    }

    return (
        <Wrapper onSubmit={handleSubmit}>
            <Btn type="submit">
                <IconContext.Provider value={{ size: '20px' }}>
                    <IoIosSearch/>
                </IconContext.Provider>
            </Btn>
            <InputField
                type="text"
                value={query}
                onChange={handleNameChange}
                placeholder="Search"
            />
        </Wrapper>        
    )
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}

export default Searchbar