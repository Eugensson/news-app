import { useState} from "react";
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis';
import { IconContext } from "react-icons";
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";
import { BsCheck } from "react-icons/bs";

import { Wrapper, Group, MarkerRead, Thumb, Section, Btn, Title, Descriptions, Date, LinkToArticle, Placeholder } from "./Card.styled";

const Card = ({title, category, url, description, published, imageURL}) => {
  const [read, setRead] = useState(false);
  const [favorite, setFavorite] = useState(false);

  const toggleRead = () => setRead((prev) => (prev === false ? true : false));
  const toggleFavorite = () => setFavorite((prev) => (prev === false ? true : false));

  return (
    <Wrapper read={read}>
      <Thumb>
              <Section>{category}</Section>
        {read &&
            <MarkerRead>
            Already read
            <IconContext.Provider value={{ size: '28px', color: '#00dd73' }}>
              <BsCheck />
            </IconContext.Provider>
          </MarkerRead>
        }
        {imageURL && imageURL !== "None" 
          ? <img src={imageURL} alt="Photo of news" />
          : <img src="images/Placeholder.jpg" alt="Placeholder image" />
        }
        <Btn type="button" onClick={toggleFavorite}>
          {favorite ? "Remove from favorite" : "Add to favorite"}        
          <IconContext.Provider value={{ size: '16px', color: '#4b48da' }}>
            {favorite ? <GoHeartFill /> : <GoHeart />}
          </IconContext.Provider>                  
        </Btn>
      </Thumb>      
      <Title>
        <LinesEllipsis
          text={title}
          maxLine='2'
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
        <LinkToArticle href={url} target="_blank" onClick={toggleRead}>Read more</LinkToArticle>
      </Group>
      {read && <Placeholder></Placeholder>}
    </Wrapper>
  )  
}

  Card.propTypes = {
    title: PropTypes.string,
    category: PropTypes.string,
    description: PropTypes.string,
    published: PropTypes.string,
    url: PropTypes.string,
    imageURL: PropTypes.string,
  }

export default Card


