import { useState, useEffect } from "react"
import CardList from "../components/CardList/CardList"
import PlaceholderNoContent from "../components/PlaceholderNoContent/PlaceholderNoContent"
import { Container } from "../components/App.styled"

const Favorite = () => {
  const [favoriteNews, setFavoriteNews] = useState(() => {
    const storedFavorite = localStorage.getItem("favorite")
    return storedFavorite ? JSON.parse(storedFavorite) : []
  });

  useEffect(() => {
    const storedFavorite = localStorage.getItem("favorite")
    if (storedFavorite) {
      setFavoriteNews(JSON.parse(storedFavorite))
    }
  }, [])

  const updateFavorites = (newFavorites) => {
    setFavoriteNews(newFavorites);
    localStorage.setItem("favorite", JSON.stringify(newFavorites))
  };

  return (
    <Container>
      {favoriteNews.length === 0 ? (
        <PlaceholderNoContent message="No added to favorite news" />
      ) : (
        <CardList news={favoriteNews} updateFavorites={updateFavorites} />
      )}
    </Container>
  )
}

export default Favorite