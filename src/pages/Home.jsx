import { useState, useEffect } from "react"

import { getNews } from "../services/apiNews"
import CardList from "../components/CardList/CardList"
import FilterBar from "../components/FilterBar/FilterBar"
import Paginationbar from "../components/Paginationbar/Paginationbar"

const Home = () => {
  const [news, setNews] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

  const fetchNews = async (currentPage) => {
        try {
          const response = await getNews(currentPage)
          setNews(response)
        } catch (error) {
          console.log(error);
        }
  }
  
  useEffect(() => {
    fetchNews(currentPage)
  }, [currentPage])

  return (
    <>
      <FilterBar />
      <Paginationbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <CardList news={news} />
      <Paginationbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </>
  )
}

export default Home