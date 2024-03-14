import { PropTypes } from "prop-types"

import { Logotype } from "./Logo.styled" 

const Logo = ({toggleMobileMenu}) => {
  return (
    <Logotype to="/news-app/" onClick={toggleMobileMenu}>
      News
    </Logotype>
  )
}

Logo.propTypes = {
    toggleMobileMenu: PropTypes.func,
}

export default Logo