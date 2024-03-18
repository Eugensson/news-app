import { useState } from "react"
import { format } from "date-fns"
import Calendar from "react-calendar"
import "react-calendar/dist/Calendar.css"
import { IconContext } from "react-icons"
import { IoCalendarNumberOutline } from "react-icons/io5"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"

import {
    Wrapper,
    Description,
    SearchDate,
    DropdownCalendar,
    ArrowGroup
} from "./CalendarWidget.styled"

const CalendarWidget = () => {
    const [value, setValue] = useState(new Date())
    const [showDropdown, setShowDropdown] = useState(false)
    
    const formattedDate = format(new Date(value), "dd/MM/yyyy")
    
    const toggleDropdown = () => setShowDropdown((prev) => !prev)
    
    const handleDateChange = (date) => {
        setValue(date)
        toggleDropdown()
    }
    
    return (
        <Wrapper>
            <Description>Search date news</Description>
            <SearchDate>
                <IconContext.Provider value={{ size: "16px", color: "#4440F6" }}>
                    <IoCalendarNumberOutline />
                </IconContext.Provider>
                <p>{formattedDate}</p>
                <ArrowGroup>
                    <IconContext.Provider value={{ size: "16px" }}>
                        {showDropdown ? <IoIosArrowUp onClick={toggleDropdown} /> : <IoIosArrowDown onClick={toggleDropdown} />}
                    </IconContext.Provider>
                </ArrowGroup>
                {showDropdown && (
                    <DropdownCalendar>
                        <Calendar onChange={handleDateChange} value={value} /> {/* Виклик toggleDropdown */}
                    </DropdownCalendar>
                )}
            </SearchDate>
        </Wrapper>
    )
}

export default CalendarWidget