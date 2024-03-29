import axios from "axios"
import { format } from "date-fns"

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL
const API_KEY = import.meta.env.VITE_NEWS_API_KEY

export const getNews = async ({page_number = 1, category, keywords}) => {
    const options = {
        params: {
            apiKey: API_KEY,
            page_number,
            page_size: 8,
            category,
            keywords,
        }
    }
    
    try {
        const { data } = await axios.get(`${BASE_URL}search`, options)
        const { news } = data

        const normalizeNews = await news.map((newsItem) => {
            const formattedDate = format(new Date(newsItem.published), 'dd/MM/yyyy')
            return {...newsItem, imageURL: newsItem.image, category: newsItem.category[0], published: formattedDate, read: false, favorite: false} 
        })
        return normalizeNews
    } catch (error) {
        console.log(error);
    }
}

export const getCategories = async () => {
    const options = {
        params: {
            apiKey: API_KEY,
        }
    }
    
    try {
        const response = await axios.get(`${BASE_URL}available/categories`, options)
        return response.data
    } catch (error) {
        console.log(error);
    }
}