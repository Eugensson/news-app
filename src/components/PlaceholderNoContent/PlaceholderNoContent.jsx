import { PropTypes } from "prop-types"

import { Title, BackgroundImage } from "./PlaceholderNoContent.styled"

const PlaceholderNoContent = ({ message }) => {
    return (
        <>
            <Title>{message}</Title>
            <BackgroundImage></BackgroundImage>
        </>
    )
}

PlaceholderNoContent.propTypes = {
    message: PropTypes.string.isRequired,
}

export default PlaceholderNoContent