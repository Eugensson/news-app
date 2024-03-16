import { useEffect } from "react"
import PropTypes from "prop-types"

import Card from "../Card/Card"
import WeatherWidget from "../WeatherWidget/WeatherWidget"

import { List, Item } from "./CardList.styled"

const CardList = ({ news, setNews }) => {

    const handleCheckFavorite = (id) => {
        setNews((prevState) => {
            const updatedNews = prevState.map((item) =>
                item.id === id ? { ...item, favorite: !item.favorite } : item)
                return updatedNews
        })
    }

    const handleCheckRead = (id) => {
        setNews((prevState) =>
            prevState.map((item) =>
            item.id === id ? { ...item, read: !item.read } : item)
        )
    }

    useEffect(() => {
        const favoriteNews = news.filter((item) => item.favorite)
        localStorage.setItem("favorite", JSON.stringify(favoriteNews))
    }, [news]);

    useEffect(() => {
        const readNews = news.filter((item) => item.read)
        localStorage.setItem("readed", JSON.stringify(readNews))
    }, [news])
    
    return (
        <List>
            {news.map(({ id, title, category, url, description, published, imageURL, favorite, read }, index) => {
                if (index === 2) {
                    return (
                        <Item key={index}>
                            <WeatherWidget />
                        </Item>
                    )
                }
                return (
                    <Item key={id}>
                        <Card
                            id={id}
                            title={title}
                            category={category}
                            url={url}
                            description={description}
                            published={published}
                            imageURL={imageURL}
                            favorite={favorite}
                            read={read}
                            handleCheckFavorite={handleCheckFavorite}
                            handleCheckRead={handleCheckRead}
                        />
                    </Item>
                )
            })}
        </List>
    )
}

CardList.propTypes = {
    news: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            category: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            published: PropTypes.string.isRequired,
            imageURL: PropTypes.string.isRequired,
            favorite: PropTypes.bool.isRequired,
            read: PropTypes.bool.isRequired
        }),
    ).isRequired,
    setNews: PropTypes.func,
};

export default CardList


// import React, { useEffect, useState } from "react";
// import PropTypes from "prop-types";

// import Card from "../Card/Card";
// import WeatherWidget from "../WeatherWidget/WeatherWidget";

// import { List, Item } from "./CardListModify.styled";

// const CardListModify = ({ news, setNews }) => {
//   const [weatherDisplayed, setWeatherDisplayed] = useState(false);

//   useEffect(() => {
//     replaceNews();
//   }, []);

//   const replaceNews = () => {
//     const newNews = [...news];
//     newNews.splice(2, 0, { id: "weather-widget" }); // Додати пустий елемент для WeatherWidget
//     setNews(newNews);
//     setWeatherDisplayed(true);
//   };

//   return (
//     <List>
//       {news.map(({ id, title, category, url, description, published, imageURL, favorite, read }, index) => (
//         <Item key={id}>
//           {id === "weather-widget" ? (
//             weatherDisplayed ? <WeatherWidget /> : null // Відображати WeatherWidget, якщо він не відображався раніше
//           ) : (
//             <Card
//               id={id}
//               title={title}
//               category={category}
//               url={url}
//               description={description}
//               published={published}
//               imageURL={imageURL}
//               favorite={favorite}
//               read={read}
//             />
//           )}
//         </Item>
//       ))}
//     </List>
//   );
// };

// CardListModify.propTypes = {
//   news: PropTypes.arrayOf(
//     PropTypes.oneOfType([
//       PropTypes.shape({
//         id: PropTypes.string.isRequired,
//         title: PropTypes.string.isRequired
//       }),
//       PropTypes.shape({
//         component: PropTypes.element.isRequired
//       })
//     ])
//   ),
//   setNews: PropTypes.func.isRequired
// };

// export default CardListModify;
