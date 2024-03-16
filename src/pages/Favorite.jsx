import { useState, useEffect } from "react"

import CardList from "../components/CardList/CardList"
import PlaceholderNoContent from "../components/PlaceholderNoContent/PlaceholderNoContent"

import {Container} from "../components/App.styled"

const Favorite = () => {
  const [favoriteNews, setFavoriteNews] = useState([])

  useEffect(() => {
    const parsedNews = JSON.parse(localStorage.getItem("favorite"));

    if (parsedNews) {
      setFavoriteNews(parsedNews);
    }
  }, []);

  return (
    <Container>
      {favoriteNews.length === 0
        ? <PlaceholderNoContent message="No added to favorite news"/>
        : <CardList news={favoriteNews} />}      
    </Container>
  )
}

export default Favorite