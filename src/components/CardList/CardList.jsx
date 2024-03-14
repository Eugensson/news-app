import PropTypes from 'prop-types';

import Card from "../Card/Card"
import WeatherWidget from "../WeatherWidget/WeatherWidget"


import {List, Item} from "./CardList.styled"

const CardList = ({news}) => {
    return (
        <List>
            {news.map(({id, title, category, url, description, published, imageURL}, index) => {
                if (index === 2) {
                    return <Item key={index}>
                        <WeatherWidget/>
                    </Item>
                }
                return <Item key={id}>
                    <Card
                        title={title}
                        category={category}
                        url={url}
                        description={description}
                        published={published}
                        imageURL={imageURL}
                    />
                </Item>
            })}
        </List>
    )
}

CardList.propTypes = {
    news: PropTypes.array,
}

export default CardList