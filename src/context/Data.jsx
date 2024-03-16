import { useState, useEffect, createContext } from "react"
import { PropTypes } from "prop-types"

import { getCategories, getNews } from "../services/apiNews"
import { useDebounce } from "../helpers/hooks/useDebounce"

export const DataContext = createContext()

const Data = ({children}) => {
    const [news, setNews] = useState([])
    const [keywords, setKeywords] = useState("")
    const [categories, setCategories] = useState([])
    const [selectedCategory, setSelectedCategory] = useState("All")
    const [currentPage, setCurrentPage] = useState(1)

    const debounsedKeywords = useDebounce(keywords, 1500)

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
                    category: selectedCategory === "All" ? null : selectedCategory,
                    keywords: debounsedKeywords,
                })
            
                setNews(response)
            } catch (error) {          
                console.log(error)        
            }
        }
        
        fetchNews(currentPage)
    }, [currentPage, selectedCategory, debounsedKeywords])

    return (
        <DataContext.Provider value={{ news, setNews, categories, setCategories, selectedCategory, setSelectedCategory, currentPage, setCurrentPage, keywords, setKeywords }}>
            {children}
        </DataContext.Provider>
    )
}

Data.propTypes = {
    children: PropTypes.node,
}

export default Data