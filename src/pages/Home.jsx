import { useState, useEffect } from "react"

import { getCategories, getNews } from "../services/apiNews"

import FilterBar from "../components/FilterBar/FilterBar"
import CardList from "../components/CardList/CardList"
import Paginationbar from "../components/Paginationbar/Paginationbar"

const Home = () => {
    const [categories, setCategories] = useState([])
    const [selectedCategory, setSelectedCategory] = useState("All")
    const [news, setNews] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
  
    useEffect(() => {
        const fetchCategories = async () => {        
            try {
                const response = await getCategories()
                setCategories(["All", ...response.categories])
            } catch (error) {
                console.log(error);
            }
        }
        
        fetchCategories()
    }, [])
  
    useEffect(() => {
        const fetchNews = async (currentPage) => {
        
            try {
                const response = await getNews({
                    page_number: currentPage,
                    category: selectedCategory==="All" ? null : selectedCategory,
                })
            
                setNews(response)
            } catch (error) {          
                console.log(error)        
            }
        }
        
        fetchNews(currentPage)
    }, [currentPage, selectedCategory])
  
  return (
    <>
      <FilterBar categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <CardList news={news} />
      <Paginationbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </>
  )
}

export default Home