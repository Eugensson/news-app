import { useContext } from "react"

import { DataContext } from "../context/Data"

import FilterBar from "../components/FilterBar/FilterBar"
import CardList from "../components/CardList/CardList"
import Pagination from "../components/Pagination/Pagination"

import { Container } from "../components/App.styled"

const Home = () => {
    const { categories, selectedCategory, setSelectedCategory, news, setNews } = useContext(DataContext)

    return (
        <Container>
            <FilterBar categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
            <CardList news={news} setNews={setNews} />
            <Pagination/>
        </Container>
    )
}

export default Home