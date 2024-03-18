import { useState } from "react"
import { format } from "date-fns"
import Calendar from "react-calendar"
import "react-calendar/dist/Calendar.css"
import { IconContext } from "react-icons"
import { IoCalendarNumberOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

import {Wrapper, Description, SearchDate, DropdownCalendar} from "./CalendarWidget.styled"

const CalendarWidget = () => {
    const [value, setValue] = useState(new Date())
    const [showDropdown, setShowDropdown] = useState(false)

    const formattedDate = format(new Date(value), 'dd/MM/yyyy')

    const toggleDropdown = () => setShowDropdown((prev) => (prev === false ? true : false))

    return (
        <Wrapper>
            <Description>Search date news</Description>
            <SearchDate onClick={toggleDropdown}>
                <IconContext.Provider value={{ size: '14px', color: '#4440F6' }}>
                    <IoCalendarNumberOutline />
                </IconContext.Provider>                
                <p>{formattedDate}</p>
                <IconContext.Provider value={{ size: '14px' }}>
                    {showDropdown ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </IconContext.Provider>
                
                {showDropdown && <DropdownCalendar><Calendar onChange={setValue} value={value} /></DropdownCalendar>}
            </SearchDate>
        </Wrapper>        
    )
}

export default CalendarWidget