import { useContext } from "react"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"

import { DataContext } from "../../context/Data"

import { Wrapper, ValueWrapper, Ellipsis, NavBtn, Btn } from "./Pagination.styled"

const Pagination = () => {
    const { currentPage, setCurrentPage } = useContext(DataContext)
    const total = 20
    const buttonsToShow = 3

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    const handleNextPage = () => {
        if (currentPage < total) {
            setCurrentPage(currentPage + 1)
        }
    }

    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    const renderDynamicButtons = () => {
        const dynamicButtons = []

        let start = Math.max(2, Math.min(currentPage - Math.floor(buttonsToShow / 2), total - buttonsToShow))
        let end = Math.min(total, start + buttonsToShow - 1)

        for (let i = start; i <= end; i+=1) {
            dynamicButtons.push(
                <Btn
                    key={i}
                    currentPage={currentPage}
                    activePage={i}
                    type="button"
                    onClick={() => handlePageClick(i)}
                >
                    {i}
                </Btn>
            )
        }

        return dynamicButtons
    }

    return (
        <Wrapper>
            <NavBtn key="prev" type="button" onClick={handlePrevPage}>
                <IoIosArrowBack />
                Prew
            </NavBtn>
            <ValueWrapper>
                <Btn
                    key={1}
                    currentPage={currentPage}
                    activePage={1}
                    type="button"
                    onClick={() => handlePageClick(1)}
                >1</Btn>
                {currentPage>=4 && <Ellipsis>...</Ellipsis>}
                {renderDynamicButtons()}
                {currentPage<=17 && <Ellipsis>...</Ellipsis>}
                <Btn
                    key={total}
                    currentPage={currentPage}
                    activePage={total}
                    type="button"
                    onClick={() => handlePageClick(total)}
                >{total}</Btn>
            </ValueWrapper>
            <NavBtn key="next" type="button" onClick={handleNextPage}>
                Next
                <IoIosArrowForward />
            </NavBtn>
        </Wrapper>
    )
}

export default Pagination
