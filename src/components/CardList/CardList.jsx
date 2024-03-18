import { useState, useEffect } from "react"
import { useMediaQuery } from "@react-hook/media-query"
import PropTypes from "prop-types"

import Card from "../Card/Card"
import WeatherWidget from "../WeatherWidget/WeatherWidget"

import { List, Item } from "./CardList.styled"

const CardList = ({ news, setNews }) => {
    const [weatherWidgetIndex, setWeatherWidgetIndex] = useState(0)
    const [newsWithWeather, setNewsWithWeather] = useState([])

    const isMobile = useMediaQuery("(max-width: 767px)")
    const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1279px)")
    const isDesktop = useMediaQuery("(min-width: 1280px)")

    useEffect(() => {
        let index = 0

        if (isMobile) {
            index = 0
        } else if (isTablet) {
            index = 1
        } else if (isDesktop) {
            index = 2
        }

        setWeatherWidgetIndex(index);
    }, [isMobile, isTablet, isDesktop])

    useEffect(() => {
        const newsBeforeWeatherWidget = news.slice(0, weatherWidgetIndex)
        const newsAfterWeatherWidget = news.slice(weatherWidgetIndex)

        const updatedNews = [
            ...newsBeforeWeatherWidget,
            <WeatherWidget key={weatherWidgetIndex} />,
            ...newsAfterWeatherWidget,
        ]

        setNewsWithWeather(updatedNews)
    }, [weatherWidgetIndex, news])

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
            {newsWithWeather.map(({ id, title, category, url, description, published, imageURL, favorite, read }, i) => {
                if (i === weatherWidgetIndex) {
                    return (
                        <Item key={i}>
                            <WeatherWidget />
                        </Item>
                    )
                }
                return (
                    <Item key={i}>
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
