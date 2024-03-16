import PropTypes from "prop-types"
import LinesEllipsis from "react-lines-ellipsis"
import { IconContext } from "react-icons"
import { GoHeart } from "react-icons/go"
import { GoHeartFill } from "react-icons/go"
import { BsCheck } from "react-icons/bs"

import {
  Wrapper,
  Group,
  MarkerRead,
  Thumb,
  ImageNews,
  Category,
  Btn,
  Title,
  Descriptions,
  Date,
  LinkToArticle,
  Placeholder
} from "./Card.styled";

const Card = ({id, title, category, url, description, read, favorite, published, imageURL, handleCheckFavorite, handleCheckRead}) => {

  return (
    <Wrapper read={read}>
      <Thumb>
        {imageURL ? <ImageNews src={imageURL} alt="" /> : null }
        <Category>{category}</Category>
        {read &&
            <MarkerRead>
            Already read
            <IconContext.Provider value={{ size: '28px', color: '#00dd73' }}>
              <BsCheck />
            </IconContext.Provider>
            </MarkerRead>
        }          
        <Btn type="button" onClick={() => handleCheckFavorite(id)}>
          {favorite ? "Remove from favorite" : "Add to favorite"}        
          <IconContext.Provider value={{ size: '16px', color: '#4b48da' }}>
            {favorite ? <GoHeartFill /> : <GoHeart />}
          </IconContext.Provider>
        </Btn>
      </Thumb>
      {read && <Placeholder></Placeholder>}
      <Title>
        <LinesEllipsis
          text={title}
          maxLine='3'
          ellipsis='...'
          trimRight
          basedOn='letters'
        />
      </Title>
      <Descriptions>
        <LinesEllipsis
          text={description}
          maxLine='3'
          ellipsis='...'
          trimRight
          basedOn='letters'
        />
      </Descriptions>
      <Group>
        <Date>{published}</Date>
        <LinkToArticle href={url} target="_blank" onClick={()=>handleCheckRead(id)}>Read more</LinkToArticle>
      </Group>
    </Wrapper>
  )  
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  category: PropTypes.string,
  description: PropTypes.string,
  published: PropTypes.string,
  url: PropTypes.string,
  imageURL: PropTypes.string,
  read: PropTypes.bool.isRequired,
  favorite: PropTypes.bool.isRequired,
  handleCheckFavorite: PropTypes.func,
  handleCheckRead: PropTypes.func,
}

export default Card


// import PropTypes from "prop-types";
// import LinesEllipsis from "react-lines-ellipsis";
// import { IconContext } from "react-icons";
// import { GoHeart, GoHeartFill } from "react-icons/go";
// import { BsCheck } from "react-icons/bs";

// import {
//   Wrapper,
//   Group,
//   MarkerRead,
//   Thumb,
//   ImageNews,
//   Category,
//   Btn,
//   Title,
//   Descriptions,
//   Date,
//   LinkToArticle,
//   Placeholder
// } from "./Card.styled";

// const Card = ({id, title, category, url, description, read, favorite, published, imageURL, handleCheckFavorite, handleCheckRead}) => {
//   const [favoriteNews, setFavoriteNews] = useState([])
//   const [readNews, setReadNews] = useState([])

//   return (
//     <Wrapper read={read}>
//       <Thumb>
//         {imageURL ? <ImageNews src={imageURL} alt="" /> : null }
//         <Category>{category}</Category>
//         {read &&
//             <MarkerRead>
//             Already read
//             <IconContext.Provider value={{ size: '28px', color: '#00dd73' }}>
//               <BsCheck />
//             </IconContext.Provider>
//             </MarkerRead>
//         }          
//         <Btn type="button" onClick={() => handleCheckFavorite(id)}>
//           {favorite ? "Remove from favorite" : "Add to favorite"}        
//           <IconContext.Provider value={{ size: '16px', color: '#4b48da' }}>
//             {favorite ? <GoHeartFill /> : <GoHeart />}
//           </IconContext.Provider>
//         </Btn>
//       </Thumb>
//       {read && <Placeholder></Placeholder>}
//       <Title>
//         <LinesEllipsis
//           text={title}
//           maxLine='2'
//           ellipsis='...'
//           trimRight
//           basedOn='letters'
//         />
//       </Title>
//       <Descriptions>
//         <LinesEllipsis
//           text={description}
//           maxLine='3'
//           ellipsis='...'
//           trimRight
//           basedOn='letters'
//         />
//       </Descriptions>
//       <Group>
//         <Date>{published}</Date>
//         <LinkToArticle href={url} target="_blank" onClick={()=>handleCheckRead(id)}>Read more</LinkToArticle>
//       </Group>
//     </Wrapper>
//   )  
// }

// Card.propTypes = {
//   id: PropTypes.string.isRequired,
//   title: PropTypes.string,
//   category: PropTypes.string,
//   description: PropTypes.string,
//   published: PropTypes.string,
//   url: PropTypes.string,
//   imageURL: PropTypes.string,
//   read: PropTypes.bool,
//   favorite: PropTypes.bool,
//   handleCheckFavorite: PropTypes.func,
//   handleCheckRead: PropTypes.func,
// }

// export default Card;