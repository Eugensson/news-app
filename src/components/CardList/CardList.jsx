import PropTypes from 'prop-types';

import Card from "../Card/Card"
import WeatherWidget from "../WeatherWidget/WeatherWidget"


import {Wrapper} from "./CardList.styled"

const CardList = ({news}) => {
    return (
        <Wrapper>
            {news.map(({id, title, category, url, description, published, imageURL}, index) => {
                if (index === 2) {
                    return <li key={index}>
                        <WeatherWidget/>
                    </li>
                }
                return <li key={id}>
                    <Card
                        title={title}
                        category={category}
                        url={url}
                        description={description}
                        published={published}
                        imageURL={imageURL}
                    />
                </li>
            })}
        </Wrapper>
    )
}

CardList.propTypes = {
    news: PropTypes.array,
}

export default CardList