// import { useEffect } from "react"
// import PropTypes from "prop-types"

// import Card from "../Card/Card"
// import WeatherWidget from "../WeatherWidget/WeatherWidget"

// import {List, Item} from "./CardList.styled"

// const CardList = ({ news, setNews }) => {
//     useEffect(() => {
//         const favoriteNews = news.filter(item => item.favorite === true)
//         localStorage.setItem("favorite", JSON.stringify(favoriteNews))
//     }, [news])

//     useEffect(() => {
//         const readNews = news.filter(item => item.read)
//         localStorage.setItem("read", JSON.stringify(readNews))
//     }, [news])
    
//     const handleCheckFavorite = (id) => {
//         setNews((prevState) => {
//            return prevState.map(item=>(item.id===id) ? {...item, favorite: !item.favorite} : item)
//         })
//     }

//     const handleCheckRead = (id) => {
//         setNews((prevState) => {
//            return prevState.map(item=>(item.id===id) ? {...item, read: !item.read} : item)
//         })
//     }

//     return (
//         <List>
//             {news.map(({id, title, category, url, description, published, imageURL, favorite, read}, index) => {
//                 if (index === 2) {
//                     return <Item key={index}>
//                         <WeatherWidget/>
//                     </Item>
//                 }
//                 return <Item key={id}>
//                     <Card
//                         id={id}
//                         title={title}
//                         category={category}
//                         url={url}
//                         description={description}
//                         published={published}
//                         imageURL={imageURL}
//                         favorite={favorite}
//                         read={read}
//                         handleCheckFavorite={handleCheckFavorite}
//                         handleCheckRead={handleCheckRead}
//                     />
//                 </Item>
//             })}
//         </List>
//     )
// }

// CardList.propTypes = {
//     news: PropTypes.array,
//     setNews: PropTypes.func,
//     currentPage: PropTypes.number,
//     selectedCategory: PropTypes.string,
// }

// export default CardList
//
//
//
//
//
//

// import { useEffect } from "react";
// import PropTypes from "prop-types";

// import Card from "../Card/Card";
// import WeatherWidget from "../WeatherWidget/WeatherWidget";

// import { List, Item } from "./CardList.styled";

// const CardList = ({ news, setNews }) => {
//   const handleCheckFavorite = (id) => {
//     setNews((prevState) => {
//       const updatedNews = prevState.map((item) =>
//         item.id === id ? { ...item, favorite: !item.favorite } : item
//       );

//       const favoriteNews = updatedNews.filter((item) => item.favorite === true);
//       localStorage.setItem("favorite", JSON.stringify(favoriteNews));

//       return updatedNews;
//     });
//   };

//   const handleCheckRead = (id) => {
//     setNews((prevState) =>
//       prevState.map((item) =>
//         item.id === id ? { ...item, read: !item.read } : item
//       )
//     );
//   };

//   useEffect(() => {
//     const readNews = news.filter((item) => item.read);
//     localStorage.setItem("read", JSON.stringify(readNews));
//   }, [news]);

//   return (
//     <List>
//       {news.map(
//         (
//           { id, title, category, url, description, published, imageURL, favorite, read },
//           index
//         ) => {
//           if (index === 2) {
//             return (
//               <Item key={index}>
//                 <WeatherWidget />
//               </Item>
//             );
//           }
//           return (
//             <Item key={id}>
//               <Card
//                 id={id}
//                 title={title}
//                 category={category}
//                 url={url}
//                 description={description}
//                 published={published}
//                 imageURL={imageURL}
//                 favorite={favorite}
//                 read={read}
//                 handleCheckFavorite={handleCheckFavorite}
//                 handleCheckRead={handleCheckRead}
//               />
//             </Item>
//           );
//         }
//       )}
//     </List>
//   );
// };

// CardList.propTypes = {
//   news: PropTypes.array,
//   setNews: PropTypes.func,
//   currentPage: PropTypes.number,
//   selectedCategory: PropTypes.string,
// };

// export default CardList;


import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import Card from "../Card/Card";
import WeatherWidget from "../WeatherWidget/WeatherWidget";

import { List, Item } from "./CardList.styled";

const CardList = ({ news, setNews }) => {
  const [favoriteNews, setFavoriteNews] = useState([]);
  const [readNews, setReadNews] = useState([]);

  const handleCheckFavorite = (id) => {
    setNews((prevState) => {
      const updatedNews = prevState.map((item) =>
        item.id === id ? { ...item, favorite: !item.favorite } : item
      );

      const favoriteNews = updatedNews.filter((item) => item.favorite === true);
      localStorage.setItem("favorite", JSON.stringify(favoriteNews));

      return updatedNews;
    });
  };

  const handleCheckRead = (id) => {
    setNews((prevState) =>
      prevState.map((item) =>
        item.id === id ? { ...item, read: !item.read } : item
      )
    );
  };

  useEffect(() => {
    const storedFavoriteNews = JSON.parse(localStorage.getItem("favorite")) || [];
    setFavoriteNews(storedFavoriteNews);

    const storedReadNews = JSON.parse(localStorage.getItem("read")) || [];
    setReadNews(storedReadNews);
  }, []);

  useEffect(() => {
    const readNews = news.filter((item) => item.read);
    localStorage.setItem("read", JSON.stringify(readNews));
  }, [news]);

  return (
    <List>
      {news.map(
        (
          { id, title, category, url, description, published, imageURL, favorite, read },
          index
        ) => {
          if (index === 2) {
            return (
              <Item key={index}>
                <WeatherWidget />
              </Item>
            );
          }
          const isFavorite = favoriteNews.some((item) => item.id === id);
          const isRead = readNews.some((item) => item.id === id);

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
                isFavorite={isFavorite}
                isRead={isRead}
                handleCheckFavorite={handleCheckFavorite}
                handleCheckRead={handleCheckRead}
              />
            </Item>
          );
        }
      )}
    </List>
  );
};

CardList.propTypes = {
  news: PropTypes.array,
  setNews: PropTypes.func,
  currentPage: PropTypes.number,
  selectedCategory: PropTypes.string,
};

export default CardList;

