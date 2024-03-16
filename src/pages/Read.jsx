import { useState, useEffect } from "react"

import CardList from "../components/CardList/CardList"
import PlaceholderNoContent from "../components/PlaceholderNoContent/PlaceholderNoContent"

import {Container} from "../components/App.styled"

const Read = () => {
  const [readNews, setReadNews] = useState([]);

  useEffect(() => {
    const parsedNews = JSON.parse(localStorage.getItem("read"));

    if (parsedNews) {
      setReadNews(parsedNews);
    }
  }, []);

  return (
    <Container>
      {readNews.length === 0
        ? <PlaceholderNoContent message="No readed news"/>
        : <CardList news={readNews}/>}      
    </Container>
  )
}

export default Read