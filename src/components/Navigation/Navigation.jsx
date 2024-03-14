import { PropTypes } from "prop-types"
import HomeIcon from '@mui/icons-material/Home'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ImportContactsIcon from '@mui/icons-material/ImportContacts'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

import { Wrapper, StyledLink, IconWrapper } from "./Navigation.styled"

const Navigation = ({ toggleMobileMenu }) => {
    return (
        <Wrapper>
            <StyledLink onClick={toggleMobileMenu} to="/news-app" end>
                <IconWrapper>
                    <HomeIcon sx={{ fontSize: 20 }} />
                </IconWrapper>                
                Home
                <ArrowForwardIosIcon sx={{ fontSize: 24, marginLeft: "auto" }}/>
            </StyledLink>
            <StyledLink onClick={toggleMobileMenu} to="/news-app/favorite">
                <IconWrapper>
                    <FavoriteBorderIcon sx={{ fontSize: 20 }} />
                </IconWrapper>                
                Favorite
                <ArrowForwardIosIcon sx={{ fontSize: 24, marginLeft: "auto" }}/>
            </StyledLink>
            <StyledLink onClick={toggleMobileMenu} to="/news-app/read">
                <IconWrapper>
                    <ImportContactsIcon sx={{ fontSize: 20 }}/>
                </IconWrapper>
                Read
                <ArrowForwardIosIcon sx={{ fontSize: 24, marginLeft: "auto" }}/>
            </StyledLink>
        </Wrapper>
    )
}

Navigation.propTypes = {
    toggleMobileMenu: PropTypes.func.isRequired,
}

export default Navigation