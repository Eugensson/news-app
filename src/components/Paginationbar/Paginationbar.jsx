import { PropTypes } from "prop-types"
import Pagination from "@mui/material/Pagination"
import {Wrapper} from "./Paginationbar.styled"

const Paginationbar = ({currentPage, setCurrentPage}) => { 
  const handleChange = (e, value) => {
    setCurrentPage(value);
  };

  return (
    <Wrapper>
      <Pagination
        count={20}
        page={currentPage}
        onChange={handleChange}
        variant="outlined"
        shape="rounded"
        size="small"
      />
    </Wrapper>    
  );
}

Paginationbar.propTypes = {
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
}

export default Paginationbar