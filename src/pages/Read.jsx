import { useState, useEffect } from "react"
import PlaceholderNoContent from "../components/PlaceholderNoContent/PlaceholderNoContent"
import { Container } from "../components/App.styled"

import CardList from "../components/CardList/CardList"

const Read = () => {
  const [readedNews, setReadedNews] = useState(() => {
    const storedReaded = localStorage.getItem("readed")
    return storedReaded ? JSON.parse(storedReaded) : []
  });

  useEffect(() => {
    const storedReaded = localStorage.getItem("readed");
    if (storedReaded) {
      setReadedNews(JSON.parse(storedReaded))
    }
  }, [])

  const updateReadedNews = (newReadedNews) => {
    setReadedNews(newReadedNews);
    localStorage.setItem("readed", JSON.stringify(newReadedNews))
  }

  return (
    <Container>
      {readedNews.length === 0 ? (
        <PlaceholderNoContent message="No readed news" />
      ) : (
        <CardList news={readedNews} updateReadedNews={updateReadedNews} />
      )}
    </Container>
  )
}

export default Read