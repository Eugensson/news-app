import { useContext } from "react"

import { DataContext } from "../context/Data"

import FilterBar from "../components/FilterBar/FilterBar"
import CardList from "../components/CardList/CardList"
import Paginationbar from "../components/Paginationbar/Paginationbar"

const Home = () => {
    const { categories, selectedCategory, setSelectedCategory, news, setNews, currentPage, setCurrentPage } = useContext(DataContext)
    
    return (
        <>
            <FilterBar categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
            <CardList news={news} setNews={setNews} />
            <Paginationbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </>
    )
}

export default Home